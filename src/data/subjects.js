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
import { humanGeo } from './humanGeo.js'
import { macro } from './macro.js'
import { calcBC } from './calcBC.js'
import { physicsCMech } from './physicsCMech.js'
import { physicsCEM } from './physicsCEM.js'
import { worldHistory } from './worldHistory.js'
import { euroHistory } from './euroHistory.js'
import { micro } from './micro.js'
import { engLang } from './engLang.js'
import { engLit } from './engLit.js'

export const SUBJECTS = [biology, chemistry, statistics, psychology, usHistory, csa, calcAB, govPolitics, envSci, physics1, humanGeo, macro, calcBC, physicsCMech, physicsCEM, worldHistory, euroHistory, micro, engLang, engLit]

export const SUBJECTS_BY_ID = Object.fromEntries(SUBJECTS.map((s) => [s.id, s]))

// The rest of the roadmap — shown in the UI as "coming soon" so the app is
// honest about scope instead of silently omitting them.
export const COMING_SOON = []

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
