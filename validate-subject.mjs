// Deeper structural validator for a subject data file, beyond plain syntax checking.
// Usage: node validate-subject.mjs <path-to-module> <exportName>
import path from 'node:path'

const [, , modPath, exportName] = process.argv
if (!modPath || !exportName) {
  console.error('Usage: node validate-subject.mjs <path> <exportName>')
  process.exit(1)
}

const abs = path.resolve(modPath)
const mod = await import(`file://${abs}`)
const subject = mod[exportName]

if (!subject) {
  console.error(`Export "${exportName}" not found in ${modPath}`)
  process.exit(1)
}

let errors = []
let warnings = []
const allIds = new Set()
const unitIds = new Set()

for (const unit of subject.units) {
  if (unitIds.has(unit.id)) errors.push(`Duplicate unit id: ${unit.id}`)
  unitIds.add(unit.id)

  for (const q of unit.questions) {
    if (allIds.has(q.id)) errors.push(`Duplicate question id: ${q.id}`)
    allIds.add(q.id)

    if (!Array.isArray(q.choices) || q.choices.length < 2) {
      errors.push(`${q.id}: choices missing or too short`)
      continue
    }
    if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= q.choices.length) {
      errors.push(`${q.id}: correct index ${q.correct} out of range for ${q.choices.length} choices`)
    }
    const expectedWrongKeys = q.choices.map((_, i) => i).filter((i) => i !== q.correct).sort((a, b) => a - b)
    const wrongObj = q.explanation && q.explanation.wrong
    if (!wrongObj) {
      errors.push(`${q.id}: missing explanation.wrong`)
    } else {
      const actualWrongKeys = Object.keys(wrongObj).map(Number).sort((a, b) => a - b)
      if (JSON.stringify(actualWrongKeys) !== JSON.stringify(expectedWrongKeys)) {
        errors.push(`${q.id}: wrong keys ${JSON.stringify(actualWrongKeys)} do not match non-correct choice indices ${JSON.stringify(expectedWrongKeys)}`)
      }
    }
    for (const field of ['correct', 'tempting', 'commonMistake', 'apTip']) {
      if (!q.explanation || !q.explanation[field] || typeof q.explanation[field] !== 'string' || q.explanation[field].trim() === '') {
        errors.push(`${q.id}: explanation.${field} missing or empty`)
      }
    }
    if (!q.id || !q.prompt || !q.topic) errors.push(`${q.id || '(no id)'}: missing id/prompt/topic`)
  }
}

if (Array.isArray(subject.frqs)) {
  for (const f of subject.frqs) {
    if (allIds.has(f.id)) errors.push(`Duplicate id (FRQ collides with MCQ or another FRQ): ${f.id}`)
    allIds.add(f.id)
    if (!unitIds.has(f.unit)) {
      errors.push(`${f.id}: references unit ${f.unit}, which does not exist`)
    }
    if (!f.prompt || !f.prompt.trim()) errors.push(`${f.id}: missing prompt`)
    if (!Array.isArray(f.rubricPoints) || f.rubricPoints.length === 0) errors.push(`${f.id}: missing rubricPoints`)
    if (!f.sampleResponse || !f.sampleResponse.trim()) errors.push(`${f.id}: missing sampleResponse`)
  }
} else {
  warnings.push('No frqs array found on subject')
}

console.log(`Subject: ${subject.id} — ${subject.units.length} units, ${[...allIds].length} total ids`)
subject.units.forEach((u) => console.log(`  Unit ${u.id}: ${u.name} — ${u.questions.length} MCQs`))
if (subject.frqs) console.log(`  FRQs: ${subject.frqs.length}`)

if (warnings.length) {
  console.log('\nWarnings:')
  warnings.forEach((w) => console.log('  - ' + w))
}

if (errors.length) {
  console.log(`\n${errors.length} ERROR(S):`)
  errors.forEach((e) => console.log('  - ' + e))
  process.exit(1)
} else {
  console.log('\nAll structural checks passed.')
}
