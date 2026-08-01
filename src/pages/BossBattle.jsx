import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SUBJECTS_BY_ID } from '../data/subjects.js'
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

const BOSS_LENGTH = 20

export default function BossBattle() {
  const { subjectId, unitId } = useParams()
  const subject = SUBJECTS_BY_ID[subjectId]
  const { recordAnswer, defeatBoss } = useUser()

  const unitIndex = subject?.units.findIndex((u) => u.id === Number(unitId))
  const unit = subject?.units[unitIndex]

  const pool = useMemo(() => {
    if (!subject || unitIndex < 0) return []
    const cumulative = subject.units.slice(0, unitIndex + 1).flatMap((u) => u.questions.map((q) => ({ ...q, subject: subject.id, unitId: u.id })))
    const shuffled = shuffle(cumulative)
    const set = []
    while (set.length < BOSS_LENGTH) {
      set.push(shuffled[set.length % shuffled.length])
    }
    return set
  }, [subject, unitIndex])

  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState('playing') // playing | won | lost
  const [runKey, setRunKey] = useState(0)

  if (!subject || !unit) {
    return <div className="max-w-3xl mx-auto px-4 py-10">Boss not found. <Link className="underline" to="/">Go home</Link></div>
  }

  const question = pool[index]

  function handleAnswered({ correct, timeSec }) {
    recordAnswer({ question, correct, timeSec })
    if (!correct) setStatus('lost')
  }

  function next() {
    if (status === 'lost') return
    if (index + 1 >= BOSS_LENGTH) {
      defeatBoss(subject.id, unit.id)
      setStatus('won')
    } else {
      setIndex(index + 1)
    }
  }

  function retry() {
    setIndex(0)
    setStatus('playing')
    setRunKey((k) => k + 1)
  }

  if (status === 'lost') {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">💀</div>
        <h1 className="font-display text-3xl mb-2">The boss got you</h1>
        <p className="text-paper/60 mb-6">One mistake breaks the run — that's the deal with boss battles. You got to question {index + 1} of {BOSS_LENGTH}.</p>
        <div className="flex gap-3 justify-center">
          <Link to={`/subject/${subject.id}`} className="focus-ring border border-ink-line rounded-md px-5 py-2.5 hover:bg-ink-soft">Back to trail</Link>
          <button onClick={retry} className="focus-ring bg-danger text-paper rounded-md px-5 py-2.5 hover:brightness-110">Try again</button>
        </div>
      </div>
    )
  }

  if (status === 'won') {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">🏆</div>
        <h1 className="font-display text-3xl mb-2">Boss defeated!</h1>
        <p className="text-paper/60 mb-6">Flawless {BOSS_LENGTH}/{BOSS_LENGTH}. The next unit is unlocked.</p>
        <Link to={`/subject/${subject.id}`} className="focus-ring bg-gold text-ink rounded-md px-5 py-2.5 hover:brightness-110">Back to trail</Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8" key={runKey}>
      <div className="flex items-center justify-between mb-4 text-sm font-mono">
        <Link to={`/subject/${subject.id}`} className="text-paper/50 hover:text-paper">← {subject.name}</Link>
        <span className="text-danger">👹 {index + 1} / {BOSS_LENGTH} — no mistakes allowed</span>
      </div>
      <h1 className="font-display text-2xl mb-4">{unit.name.split(':')[0]} Boss</h1>
      <QuestionCard key={`${runKey}-${question.id}-${index}`} question={question} onAnswered={handleAnswered} onNext={next} nextLabel={index + 1 < BOSS_LENGTH ? 'Next' : 'Finish'} />
    </div>
  )
}
