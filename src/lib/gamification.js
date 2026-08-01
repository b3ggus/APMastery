// Core gamification math. Kept pure/testable and separate from React state.

export const RANK_TIERS = [
  { name: 'Bronze', min: 0, color: '#A0673E' },
  { name: 'Silver', min: 800, color: '#9AA5AE' },
  { name: 'Gold', min: 2000, color: '#D4A72C' },
  { name: 'Platinum', min: 4000, color: '#5FBFB0' },
  { name: 'Diamond', min: 7000, color: '#7FA9E0' },
  { name: 'Master', min: 11000, color: '#B07FE0' },
  { name: 'Grandmaster', min: 16000, color: '#E07F9E' },
  { name: 'Legend', min: 24000, color: '#D4A72C' },
]

export function rankForXP(xp) {
  let current = RANK_TIERS[0]
  for (const tier of RANK_TIERS) {
    if (xp >= tier.min) current = tier
  }
  const idx = RANK_TIERS.indexOf(current)
  const next = RANK_TIERS[idx + 1] || null
  return { current, next, idx }
}

// XP scales with difficulty; coins are a smaller, flatter reward so XP stays the "real" currency.
export function xpForQuestion(difficulty, correct, timedBonus = false) {
  if (!correct) return Math.max(2, difficulty) // small consolation XP for attempting
  const base = difficulty * 12
  return timedBonus ? Math.round(base * 1.15) : base
}

export function coinsForQuestion(difficulty, correct) {
  if (!correct) return 0
  return difficulty * 4
}

export function todayStr(date = new Date()) {
  return date.toISOString().slice(0, 10)
}

function daysBetween(a, b) {
  const d1 = new Date(a + 'T00:00:00')
  const d2 = new Date(b + 'T00:00:00')
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24))
}

// Returns updated { streak, lastActive } given the last recorded activity date.
export function updateStreak(lastActive, streak) {
  const today = todayStr()
  if (!lastActive) return { streak: 1, lastActive: today }
  const gap = daysBetween(lastActive, today)
  if (gap === 0) return { streak, lastActive } // already logged today
  if (gap === 1) return { streak: streak + 1, lastActive: today }
  return { streak: 1, lastActive: today } // streak broken
}

export function streakFlames(streak) {
  if (streak >= 100) return '🔥🔥🔥🔥'
  if (streak >= 30) return '🔥🔥🔥'
  if (streak >= 7) return '🔥🔥'
  if (streak >= 1) return '🔥'
  return ''
}

export const DIFFICULTY_LABELS = {
  1: { stars: '⭐', label: 'Easy' },
  2: { stars: '⭐⭐', label: 'Medium' },
  3: { stars: '⭐⭐⭐', label: 'Hard' },
  4: { stars: '⭐⭐⭐⭐', label: 'AP Exam' },
  5: { stars: '⭐⭐⭐⭐⭐', label: 'Beyond AP' },
}

// Badge definitions. `check(stats)` receives the aggregate user stats object and returns true/false.
export const BADGES = [
  {
    id: 'first_blood',
    name: 'First Correct',
    icon: '🌱',
    desc: 'Answer your first question correctly.',
    check: (s) => s.totalCorrect >= 1,
  },
  {
    id: 'century',
    name: '100 Correct',
    icon: '🏆',
    desc: 'Answer 100 questions correctly across all subjects.',
    check: (s) => s.totalCorrect >= 100,
  },
  {
    id: 'perfect_unit',
    name: 'Perfect Unit',
    icon: '🎯',
    desc: 'Finish a unit practice set with zero mistakes.',
    check: (s) => s.perfectUnits >= 1,
  },
  {
    id: 'streak_7',
    name: 'Week Warrior',
    icon: '🔥',
    desc: 'Reach a 7-day streak.',
    check: (s) => s.bestStreak >= 7,
  },
  {
    id: 'streak_30',
    name: '30-Day Streak',
    icon: '🔥',
    desc: 'Reach a 30-day streak.',
    check: (s) => s.bestStreak >= 30,
  },
  {
    id: 'streak_100',
    name: 'Centurion Streak',
    icon: '🔥',
    desc: 'Reach a 100-day streak.',
    check: (s) => s.bestStreak >= 100,
  },
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    icon: '⚡',
    desc: 'Average under 20 seconds per question in a timed quiz of 10+.',
    check: (s) => s.fastestQuizAvgSec !== null && s.fastestQuizAvgSec < 20,
  },
  {
    id: 'boss_slayer',
    name: 'Boss Slayer',
    icon: '👹',
    desc: 'Defeat your first Unit Boss.',
    check: (s) => s.bossesDefeated >= 1,
  },
  {
    id: 'bio_legend',
    name: 'Biology Legend',
    icon: '🧬',
    desc: 'Defeat every Biology unit boss.',
    check: (s) => s.bossesBySubject?.biology >= 4,
  },
  {
    id: 'chem_legend',
    name: 'Chemistry Legend',
    icon: '⚗️',
    desc: 'Defeat every Chemistry unit boss.',
    check: (s) => s.bossesBySubject?.chemistry >= 4,
  },
  {
    id: 'stats_legend',
    name: 'Statistics Legend',
    icon: '📊',
    desc: 'Defeat every Statistics unit boss.',
    check: (s) => s.bossesBySubject?.statistics >= 4,
  },
  {
    id: 'frq_master',
    name: 'FRQ Master',
    icon: '📝',
    desc: 'Self-grade 10 free response questions.',
    check: (s) => s.frqCompleted >= 10,
  },
  {
    id: 'survivor_20',
    name: 'Survivor',
    icon: '🛡️',
    desc: 'Reach 20 correct in a single Survival Mode run.',
    check: (s) => s.bestSurvival >= 20,
  },
  {
    id: 'daily_10',
    name: 'Creature of Habit',
    icon: '📅',
    desc: 'Complete 10 Daily Challenges.',
    check: (s) => s.dailyChallengesDone >= 10,
  },
  {
    id: 'flash_50',
    name: 'Flashcard Fifty',
    icon: '🗂️',
    desc: 'Review 50 flashcards.',
    check: (s) => s.flashcardsReviewed >= 50,
  },
]

// Rough, transparent heuristic for an "estimated AP score" (1-5). Not a substitute for official scoring.
export function estimateAPScore(accuracyByDifficulty) {
  // accuracyByDifficulty: { 1: {correct, total}, ... 5: {...} }
  const weights = { 1: 0.6, 2: 0.8, 3: 1.1, 4: 1.4, 5: 1.6 }
  let weightedCorrect = 0
  let weightedTotal = 0
  for (const d of [1, 2, 3, 4, 5]) {
    const bucket = accuracyByDifficulty[d]
    if (!bucket || bucket.total === 0) continue
    weightedCorrect += bucket.correct * weights[d]
    weightedTotal += bucket.total * weights[d]
  }
  if (weightedTotal === 0) return null
  const pct = weightedCorrect / weightedTotal
  if (pct >= 0.85) return 5
  if (pct >= 0.7) return 4
  if (pct >= 0.55) return 3
  if (pct >= 0.35) return 2
  return 1
}
