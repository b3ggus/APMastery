import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allQuestions } from '../data/subjects.js'
import { RANK_TIERS, rankForXP } from '../lib/gamification.js'
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

export default function Ranked() {
  const { state, recordAnswer } = useUser()
  const { current, next } = rankForXP(state.xp)
  const [inRun, setInRun] = useState(false)
  const [pool] = useState(() => shuffle(allQuestions().filter((q) => q.difficulty >= 4)))
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)

  const question = pool[index % pool.length]

  function handleAnswered({ correct, timeSec }) {
    recordAnswer({ question, correct, timeSec })
    if (correct) setCorrectCount((c) => c + 1)
  }

  if (inRun) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-4 text-sm font-mono text-paper/60">
          <button onClick={() => setInRun(false)} className="hover:text-paper">← Exit ranked run</button>
          <span>{correctCount} correct this session</span>
        </div>
        <QuestionCard key={`${question.id}-${index}`} question={question} onAnswered={handleAnswered} onNext={() => setIndex((i) => i + 1)} nextLabel="Next" />
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-display text-3xl mb-2">🏅 Ranked</h1>
      <p className="text-paper/50 text-sm mb-6">Only ⭐⭐⭐⭐ AP Exam and ⭐⭐⭐⭐⭐ Beyond AP questions count here. XP from ranked questions climbs the same ladder as everywhere else.</p>

      <div className="space-y-2 mb-8">
        {RANK_TIERS.map((tier) => {
          const active = tier.name === current.name
          const reached = state.xp >= tier.min
          return (
            <div key={tier.name} className={`flex items-center justify-between rounded-md border px-4 py-2.5 ${active ? 'border-gold bg-gold/10' : 'border-panel-line bg-panel'}`}>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: tier.color }} />
                <span className={reached ? 'text-paper' : 'text-paper/40'}>{tier.name}</span>
              </span>
              <span className="font-mono text-xs text-paper/40">{tier.min}+ XP</span>
            </div>
          )
        })}
      </div>

      <button onClick={() => setInRun(true)} className="focus-ring bg-gold text-ink px-6 py-3 rounded-md font-medium hover:brightness-110">
        Start ranked run
      </button>
    </div>
  )
}
