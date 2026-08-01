import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUnit, SUBJECTS_BY_ID } from '../data/subjects.js'
import { useUser } from '../context/UserContext.jsx'
import QuestionCard from '../components/QuestionCard.jsx'

export default function UnitPractice() {
  const { subjectId, unitId } = useParams()
  const subject = SUBJECTS_BY_ID[subjectId]
  const unit = getUnit(subjectId, unitId)
  const { recordAnswer, completeUnit } = useUser()

  const [index, setIndex] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [xpEarned, setXpEarned] = useState(0)
  const [finished, setFinished] = useState(false)

  if (!subject || !unit) {
    return <div className="max-w-3xl mx-auto px-4 py-10">Unit not found. <Link className="underline" to="/">Go home</Link></div>
  }

  const question = { ...unit.questions[index], subject: subject.id, unitId: unit.id }

  function handleAnswered({ correct, timeSec }) {
    recordAnswer({ question, correct, timeSec })
    if (!correct) setMistakes((m) => m + 1)
    setXpEarned((x) => x + (correct ? question.difficulty * 12 : Math.max(2, question.difficulty)))
  }

  function next() {
    if (index + 1 < unit.questions.length) {
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
        <p className="text-paper/60 mb-6">{unit.questions.length - mistakes}/{unit.questions.length} correct · +{xpEarned} XP</p>
        <div className="flex gap-3 justify-center">
          <Link to={`/subject/${subject.id}`} className="focus-ring border border-ink-line rounded-md px-5 py-2.5 hover:bg-ink-soft">Back to trail</Link>
          <Link to={`/subject/${subject.id}/unit/${unit.id}/boss`} className="focus-ring bg-danger text-paper rounded-md px-5 py-2.5 hover:brightness-110">Fight the Unit Boss →</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-4 text-sm text-paper/50 font-mono">
        <Link to={`/subject/${subject.id}`} className="hover:text-paper">← {subject.name}</Link>
        <span>{index + 1} / {unit.questions.length}</span>
      </div>
      <h1 className="font-display text-2xl mb-4">{unit.name}</h1>
      <QuestionCard key={question.id} question={question} onAnswered={handleAnswered} onNext={next} nextLabel={index + 1 < unit.questions.length ? 'Next question' : 'Finish unit'} />
    </div>
  )
}
