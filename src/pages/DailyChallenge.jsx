import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allQuestions } from '../data/subjects.js'
import { getDailyChallenge } from '../lib/dailyChallenge.js'
import { todayStr } from '../lib/gamification.js'
import { useUser } from '../context/UserContext.jsx'
import QuestionCard from '../components/QuestionCard.jsx'

export default function DailyChallenge() {
  const { recordAnswer, recordDailyChallengeComplete, state } = useUser()
  const today = todayStr()
  const questions = useMemo(() => getDailyChallenge(allQuestions(), today, 10), [today])

  const alreadyDoneToday = state.dailyChallengeLastDate === today
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = questions[index]

  function handleAnswered({ correct, timeSec }) {
    recordAnswer({ question, correct, timeSec })
    if (correct) setCorrectCount((c) => c + 1)
  }

  function next() {
    if (index + 1 < questions.length) {
      setIndex(index + 1)
    } else {
      recordDailyChallengeComplete()
      setFinished(true)
    }
  }

  if (alreadyDoneToday && !finished) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="font-display text-3xl mb-2">Already done for today</h1>
        <p className="text-paper/60 mb-6">Come back tomorrow for a new set of 10. Total daily challenges completed: {state.dailyChallengesDone}.</p>
        <Link to="/" className="focus-ring border border-panel-line rounded-md px-5 py-2.5 hover:bg-panel-soft">Home</Link>
      </div>
    )
  }

  if (finished) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">📅</div>
        <h1 className="font-display text-3xl mb-2">Daily challenge complete</h1>
        <p className="text-paper/60 mb-6">{correctCount}/{questions.length} correct today.</p>
        <Link to="/" className="focus-ring bg-gold text-ink rounded-md px-5 py-2.5 hover:brightness-110">Home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-4 text-sm font-mono text-paper/60">
        <span>📅 Daily Challenge</span>
        <span>{index + 1} / {questions.length}</span>
      </div>
      <QuestionCard key={question.id} question={question} onAnswered={handleAnswered} onNext={next} nextLabel={index + 1 < questions.length ? 'Next' : 'Finish'} />
    </div>
  )
}
