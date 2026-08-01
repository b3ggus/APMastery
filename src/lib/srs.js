// Simplified SM-2 spaced repetition. Grade is 0 (wrong) to 3 (easy).

const DAY_MS = 1000 * 60 * 60 * 24

export function newCard(questionId) {
  return {
    questionId,
    interval: 0, // days
    ease: 2.3,
    reps: 0,
    due: Date.now(),
  }
}

export function reviewCard(card, grade) {
  const c = { ...card }
  if (grade <= 0) {
    c.reps = 0
    c.interval = 1
    c.ease = Math.max(1.3, c.ease - 0.2)
  } else {
    c.reps += 1
    c.ease = Math.max(1.3, c.ease + (grade === 3 ? 0.1 : grade === 1 ? -0.15 : 0))
    if (c.reps === 1) c.interval = 1
    else if (c.reps === 2) c.interval = 3
    else c.interval = Math.round(c.interval * c.ease)
  }
  c.due = Date.now() + c.interval * DAY_MS
  return c
}

export function dueCards(cards) {
  const now = Date.now()
  return cards.filter((c) => c.due <= now)
}
