import React, { useEffect, useState } from 'react'
import DifficultyBadge from './DifficultyBadge.jsx'

const LETTERS = ['A', 'B', 'C', 'D']

export default function QuestionCard({ question, onAnswered, onNext, nextLabel = 'Next question' }) {
  const [selected, setSelected] = useState(null)
  const [answeredAt, setAnsweredAt] = useState(null)
  const [startedAt, setStartedAt] = useState(() => Date.now())

  useEffect(() => {
    setSelected(null)
    setAnsweredAt(null)
    setStartedAt(Date.now())
  }, [question.id])

  function choose(idx) {
    if (selected !== null) return
    setSelected(idx)
    setAnsweredAt(Date.now())
    const correct = idx === question.correct
    const timeSec = (Date.now() - startedAt) / 1000
    onAnswered?.({ correct, timeSec, choiceIdx: idx })
  }

  const answered = selected !== null
  const correct = answered && selected === question.correct

  return (
    <div className="relative bg-paper-card text-ink rounded-lg p-6 sm:p-8 shadow-xl card-torn">
      <div className="flex items-center justify-between gap-3 mb-4">
        <DifficultyBadge difficulty={question.difficulty} />
        {question.topic && <span className="text-xs font-mono text-ink/50">{question.topic}</span>}
      </div>

      <p className="font-body text-lg leading-relaxed mb-6 whitespace-pre-line">{question.prompt}</p>

      <div className="space-y-3">
        {question.choices.map((choice, idx) => {
          let style = 'border-ink/15 hover:border-ink/40 hover:bg-ink/5'
          if (answered) {
            if (idx === question.correct) style = 'border-signal bg-signal/15 text-signal'
            else if (idx === selected) style = 'border-danger bg-danger/10 text-danger'
            else style = 'border-ink/10 opacity-50'
          }
          return (
            <button
              key={idx}
              onClick={() => choose(idx)}
              disabled={answered}
              className={`focus-ring w-full text-left flex gap-3 items-start rounded-md border-2 px-4 py-3 transition-colors ${style}`}
            >
              <span className="font-mono font-600 shrink-0">{LETTERS[idx]}</span>
              <span>{choice}</span>
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="mt-6 border-t border-ink/10 pt-5 space-y-4 animate-[fadeIn_0.25s_ease-in]">
          <div className={`text-sm font-mono font-600 ${correct ? 'text-signal' : 'text-danger'}`}>
            {correct ? '✓ Correct' : `✗ Not quite — correct answer is ${LETTERS[question.correct]}`}
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide text-ink/50 mb-1">Why {LETTERS[question.correct]} is correct</h4>
            <p className="text-sm leading-relaxed">{question.explanation.correct}</p>
          </div>
          {selected !== question.correct && question.explanation.wrong[selected] && (
            <div>
              <h4 className="text-xs uppercase tracking-wide text-ink/50 mb-1">Why {LETTERS[selected]} is wrong</h4>
              <p className="text-sm leading-relaxed">{question.explanation.wrong[selected]}</p>
            </div>
          )}
          <div>
            <h4 className="text-xs uppercase tracking-wide text-ink/50 mb-1">Most tempting distractor</h4>
            <p className="text-sm leading-relaxed">{question.explanation.tempting}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide text-ink/50 mb-1">Common mistake</h4>
            <p className="text-sm leading-relaxed">{question.explanation.commonMistake}</p>
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded p-3">
            <h4 className="text-xs uppercase tracking-wide text-ember-dark mb-1 font-600">AP scoring tip</h4>
            <p className="text-sm leading-relaxed">{question.explanation.apTip}</p>
          </div>
          {onNext && (
            <button onClick={onNext} className="focus-ring mt-2 bg-ink text-paper px-5 py-2.5 rounded-md font-medium hover:bg-ink-soft transition-colors">
              {nextLabel} →
            </button>
          )}
        </div>
      )}
    </div>
  )
}
