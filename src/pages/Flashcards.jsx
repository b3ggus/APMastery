import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allQuestions } from '../data/subjects.js'
import { dueCards } from '../lib/srs.js'
import { useUser } from '../context/UserContext.jsx'
import DifficultyBadge from '../components/DifficultyBadge.jsx'

export default function Flashcards() {
  const { state, reviewFlashcard, recordAnswer } = useUser()
  const questionsById = useMemo(() => Object.fromEntries(allQuestions().map((q) => [q.id, q])), [])

  const [revealed, setRevealed] = useState(false)
  const [reviewedCount, setReviewedCount] = useState(0)

  const due = useMemo(() => dueCards(Object.values(state.flashcards)), [state.flashcards, reviewedCount])
  const card = due[0]
  const question = card ? questionsById[card.questionId] : null

  function grade(g) {
    reviewFlashcard(card.questionId, g)
    recordAnswer({ question, correct: g > 0, fromFlashcard: true })
    setRevealed(false)
    setReviewedCount((c) => c + 1)
  }

  const totalCards = Object.keys(state.flashcards).length

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl">🗂️ Flashcards</h1>
        <span className="text-sm font-mono text-paper/50">{due.length} due · {totalCards} total</span>
      </div>

      {!question ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="font-display text-xl mb-2">Nothing due right now</h2>
          <p className="text-paper/50 text-sm mb-6">Missed questions from practice automatically become flashcards here, spaced out over time.</p>
          <Link to="/" className="focus-ring border border-panel-line bg-panel rounded-md px-5 py-2.5 hover:bg-panel-soft">Home</Link>
        </div>
      ) : (
        <div className="bg-paper-card text-ink rounded-lg p-6 sm:p-8 shadow-xl card-torn">
          <div className="flex items-center justify-between mb-4">
            <DifficultyBadge difficulty={question.difficulty} />
            <span className="text-xs font-mono text-ink/50">{question.topic}</span>
          </div>
          <p className="text-lg leading-relaxed mb-6 whitespace-pre-line">{question.prompt}</p>

          {!revealed ? (
            <button onClick={() => setRevealed(true)} className="focus-ring bg-ink text-paper px-5 py-2.5 rounded-md font-medium hover:bg-ink-soft">
              Show answer
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-signal/10 border border-signal/30 rounded p-3">
                <p className="text-sm font-600 mb-1">Correct answer: {['A', 'B', 'C', 'D'][question.correct]}</p>
                <p className="text-sm leading-relaxed">{question.explanation.correct}</p>
              </div>
              <p className="text-xs uppercase tracking-wide text-ink/50">How well did you know this?</p>
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => grade(0)} className="focus-ring bg-danger/15 border border-danger/40 text-danger rounded-md py-2.5 text-sm font-medium hover:brightness-110">Forgot</button>
                <button onClick={() => grade(2)} className="focus-ring bg-gold/15 border border-gold/40 text-ember-dark rounded-md py-2.5 text-sm font-medium hover:brightness-110">Good</button>
                <button onClick={() => grade(3)} className="focus-ring bg-signal/15 border border-signal/40 text-signal rounded-md py-2.5 text-sm font-medium hover:brightness-110">Easy</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
