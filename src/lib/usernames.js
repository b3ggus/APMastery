// Study-themed username generator used by the sign-up flow to suggest a
// ready-to-go handle instead of making new users think one up. Kept in its
// own file (rather than inline in Auth.jsx) so the word lists are easy to
// extend later, and so other surfaces (e.g. a future admin tool) can reuse
// the exact same style of name.

const ADJECTIVES = [
  'Study', 'Quiz', 'Flash', 'Brainy', 'Sharp', 'Night', 'Early', 'Focus',
  'Exam', 'Grind', 'Ace', 'Prep', 'Smart', 'Clever', 'Diligent', 'Curious',
  'Bright', 'Swift', 'Keen', 'Steady',
]

const NOUNS = [
  'Wizard', 'Ninja', 'Scholar', 'Owl', 'Fox', 'Genius', 'Nerd', 'Brain',
  'Ace', 'Guru', 'Master', 'Ranger', 'Panda', 'Hawk', 'Sensei', 'Prodigy',
  'Whiz', 'Captain', 'Legend', 'Champ',
]

function pick(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// A random numeric suffix keeps collisions rare even against a large
// existing user base, without the generated name feeling as impersonal as
// a UUID — it still reads as "StudyWizard482", not "user_8f3a1c2d".
export function generateUsername() {
  const adj = pick(ADJECTIVES)
  const noun = pick(NOUNS)
  const number = Math.floor(Math.random() * 9000) + 100 // 100-9099
  return `${adj}${noun}${number}`
}
