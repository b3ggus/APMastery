import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUnit, SUBJECTS_BY_ID } from '../data/subjects.js'
import { useUser } from '../context/UserContext.jsx'
import QuestionCard from '../components/QuestionCard.jsx'

const ORDER_KEY = 'ap-arena-question-order'
const ORDER_MODES = [
  { id: 'inOrder', label: 'In order', description: 'The order questions appear in the unit.' },
  { id: 'shuffled', label: 'Shuffled', description: 'Random order, reshuffled each run.' },
  { id: 'easyFirst', label: 'Easy → Hard', description: 'Ramp up from ⭐ to ⭐⭐⭐⭐⭐.' },
  { id: 'hardFirst', label: 'Hard → Easy', description: 'Start with the toughest questions first.' },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function orderQuestions(questions, mode) {
  if (mode === 'shuffled') return shuffle(questions)
  if (mode === 'easyFirst') return [...questions].sort((a, b) => a.difficulty - b.difficulty)
  if (mode === 'hardFirst') return [...questions].sort((a, b) => b.difficulty - a.difficulty)
  return questions
}

export default function UnitPractice() {
  const { subjectId, unitId } = useParams()
  const subject = SUBJECTS_BY_ID[subjectId]
  const unit = getUnit(subjectId, unitId)
  const { recordAnswer, completeUnit } = useUser()

  const [mode, setMode] = useState(() => localStorage.getItem(ORDER_KEY) || 'inOrder')
  const [started, setStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [xpEarned, setXpEarned] = useState(0)
  const [finished, setFinished] = useState(false)

  const orderedQuestions = useMemo(() => {
    if (!unit) return []
    return orderQuestions(unit.questions, mode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit, mode, started])

  if (!subject || !unit) {
    return <div className="max-w-3xl mx-auto px-4 py-10">Unit not found. <Link className="underline" to="/">Go home</Link></div>
  }

  function chooseMode(id) {
    setMode(id)
    localStorage.setItem(ORDER_KEY, id)
  }

  function begin() {
    setIndex(0)
    setMistakes(0)
    setXpEarned(0)
    setFinished(false)
    setStarted(true)
  }

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-4 text-sm text-paper/50 font-mono">
          <Link to={`/subject/${subject.id}`} className="hover:text-paper">← {subject.name}</Link>
          <span>{unit.questions.length} questions</span>
        </div>
        <h1 className="font-display text-2xl mb-1">{unit.name}</h1>
        <p className="text-paper/60 mb-6">Choose how you want the questions ordered for this run.</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {ORDER_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => chooseMode(m.id)}
              className={`focus-ring text-left rounded-md border px-4 py-3 transition ${mode === m.id ? 'border-gold bg-gold/10' : 'border-panel-line hover:bg-panel-soft'}`}
            >
              <div className="font-semibold">{m.label}</div>
              <div className="text-sm text-paper/60">{m.description}</div>
            </button>
          ))}
        </div>
        <button onClick={begin} className="focus-ring bg-gold text-ink rounded-md px-6 py-2.5 font-semibold hover:brightness-110">
          Start unit →
        </button>
      </div>
    )
  }

  const question = { ...orderedQuestions[index], subject: subject.id, unitId: unit.id }

  function handleAnswered({ correct, timeSec }) {
    recordAnswer({ question, correct, timeSec })
    if (!correct) setMistakes((m) => m + 1)
    setXpEarned((x) => x + (correct ? question.difficulty * 12 : Math.max(2, question.difficulty)))
  }

  function next() {
    if (index + 1 < orderedQuestions.length) {
      setIndex(index + 1)
    } else {
      completeUnit(subject.id, unit.id, { perfect: mistakes === 0 })
      setFinished(true)
    }
  }

  if (finished) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">{mistakes === 0 ? '🎯' : '📗'}</div>
        <h1 className="font-display text-3xl mb-2">{mistakes === 0 ? 'Perfect unit!' : 'Unit complete'}</h1>
        <p className="text-paper/60 mb-6">{orderedQuestions.length - mistakes}/{orderedQuestions.length} correct · +{xpEarned} XP</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link to={`/subject/${subject.id}`} className="focus-ring border border-panel-line rounded-md px-5 py-2.5 hover:bg-panel-soft">Back to trail</Link>
          <button onClick={() => setStarted(false)} className="focus-ring border border-panel-line rounded-md px-5 py-2.5 hover:bg-panel-soft">Practice again</button>
          <Link to={`/subject/${subject.id}/unit/${unit.id}/boss`} className="focus-ring bg-danger text-paper rounded-md px-5 py-2.5 hover:brightness-110">Fight the Unit Boss →</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-4 text-sm text-paper/50 font-mono">
        <Link to={`/subject/${subject.id}`} className="hover:text-paper">← {subject.name}</Link>
        <span>{index + 1} / {orderedQuestions.length}</span>
      </div>
      <h1 className="font-display text-2xl mb-4">{unit.name}</h1>
      <QuestionCard key={question.id} question={question} onAnswered={handleAnswered} onNext={next} nextLabel={index + 1 < orderedQuestions.length ? 'Next question' : 'Finish unit'} />
    </div>
  )
}
