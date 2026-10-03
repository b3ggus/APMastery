import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allQuestions } from '../data/subjects.js'
import { useUser } from '../context/UserContext.jsx'
import QuestionCard from '../components/QuestionCard.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Survival() {
  const { recordAnswer, recordSurvival, state } = useUser()
  const [pool] = useState(() => shuffle(allQuestions()))
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [over, setOver] = useState(false)
  const [runKey, setRunKey] = useState(0)

  const question = pool[index % pool.length]

  function handleAnswered({ correct, timeSec }) {
    recordAnswer({ question, correct, timeSec })
    if (correct) setCorrectCount((c) => c + 1)
    else {
      const newMistakes = mistakes + 1
      setMistakes(newMistakes)
      if (newMistakes >= 3) {
        recordSurvival(correctCount)
        setOver(true)
      }
    }
  }

  function next() {
    if (over) return
    setIndex((i) => i + 1)
  }

  function restart() {
    setIndex(0)
    setCorrectCount(0)
    setMistakes(0)
    setOver(false)
    setRunKey((k) => k + 1)
  }

  if (over) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">🛡️💥</div>
        <h1 className="font-display text-3xl mb-2">Run over</h1>
        <p className="text-paper/60 mb-2">You answered {correctCount} correctly before 3 mistakes.</p>
        <p className="text-paper/40 text-sm mb-6">Personal best: {state.bestSurvival}</p>
        <div className="flex gap-3 justify-center">
          <Link to="/" className="focus-ring border border-panel-line rounded-md px-5 py-2.5 hover:bg-panel-soft">Home</Link>
          <button onClick={restart} className="focus-ring bg-ember text-paper rounded-md px-5 py-2.5 hover:brightness-110">Run it back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8" key={runKey}>
      <div className="flex items-center justify-between mb-4 text-sm font-mono text-paper/60">
        <span>🛡️ Survival</span>
        <span>{correctCount} correct · {'❤️'.repeat(3 - mistakes)}{'🖤'.repeat(mistakes)}</span>
      </div>
      <QuestionCard key={`${runKey}-${question.id}-${index}`} question={question} onAnswered={handleAnswered} onNext={next} nextLabel="Next" />
    </div>
  )
}
