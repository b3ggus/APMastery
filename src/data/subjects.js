import { biology } from './biology.js'
import { chemistry } from './chemistry.js'
import { statistics } from './statistics.js'
import { psychology } from './psychology.js'
import { usHistory } from './usHistory.js'
import { csa } from './csa.js'
import { calcAB } from './calcAB.js'
import { govPolitics } from './govPolitics.js'
import { envSci } from './envSci.js'
import { physics1 } from './physics1.js'

export const SUBJECTS = [biology, chemistry, statistics, psychology, usHistory, csa, calcAB, govPolitics, envSci, physics1]

export const SUBJECTS_BY_ID = Object.fromEntries(SUBJECTS.map((s) => [s.id, s]))

// The rest of the roadmap — shown in the UI as "coming soon" so the app is
// honest about scope instead of silently omitting them.
export const COMING_SOON = [
  { id: 'calc-bc', name: 'AP Calculus BC', icon: '📐' },
  { id: 'physics-c', name: 'AP Physics C', icon: '🧲' },
  { id: 'world-history', name: 'AP World History', icon: '🌍' },
  { id: 'euro-history', name: 'AP European History', icon: '🏛️' },
  { id: 'human-geo', name: 'AP Human Geography', icon: '🗺️' },
  { id: 'macro', name: 'AP Macroeconomics', icon: '📈' },
  { id: 'micro', name: 'AP Microeconomics', icon: '📉' },
  { id: 'eng-lang', name: 'AP English Language', icon: '✍️' },
  { id: 'eng-lit', name: 'AP English Literature', icon: '📖' },
]
// Used by the homepage stats strip — computed once from the already-bundled
// subject data rather than hardcoded, so the numbers never drift out of
// sync as subjects/units grow.
export function getContentStats() {
  let mcqCount = 0
  let frqCount = 0
  for (const s of SUBJECTS) {
    for (const u of s.units) mcqCount += u.questions.length
    frqCount += (s.frqs || []).length
  }
  return { subjectCount: SUBJECTS.length, mcqCount, frqCount, questionCount: mcqCount + frqCount }
}
export function allQuestions() {
  return SUBJECTS.flatMap((s) => s.units.flatMap((u) => u.questions.map((q) => ({ ...q, subject: s.id, unitId: u.id, unitName: u.name }))))
}

export function getUnit(subjectId, unitId) {
  const subject = SUBJECTS_BY_ID[subjectId]
  if (!subject) return null
  return subject.units.find((u) => u.id === Number(unitId)) || null
}
