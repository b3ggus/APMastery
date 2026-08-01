// Deterministic pseudo-random selection so every student gets the same
// Daily Challenge set on a given calendar day (seeded by the date string).

function seededRandom(seed) {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0
  }
  return function () {
    h = Math.imul(h ^ (h >>> 15), h | 1)
    h ^= h + Math.imul(h ^ (h >>> 7), h | 61)
    return ((h ^ (h >>> 14)) >>> 0) / 4294967296
  }
}

export function getDailyChallenge(allQuestions, dateStr, count = 10) {
  const hardPool = allQuestions.filter((q) => q.type === 'mcq' && q.difficulty >= 3)
  const rand = seededRandom(dateStr)
  const pool = [...hardPool]
  const picked = []
  while (picked.length < count && pool.length > 0) {
    const idx = Math.floor(rand() * pool.length)
    picked.push(pool.splice(idx, 1)[0])
  }
  return picked
}
