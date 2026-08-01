import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { SUBJECTS_BY_ID } from '../data/subjects.js'
import ProgressTrail from '../components/ProgressTrail.jsx'

export default function SubjectPage() {
  const { subjectId } = useParams()
  const subject = SUBJECTS_BY_ID[subjectId]

  if (!subject) {
    return <div className="max-w-3xl mx-auto px-4 py-10">Subject not found. <Link className="underline" to="/">Go home</Link></div>
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl">{subject.icon} {subject.name}</h1>
          <p className="text-paper/50 text-sm mt-1">Work down the trail — beat each Unit Boss with zero mistakes to unlock the next unit.</p>
        </div>
        <Link to={`/subject/${subject.id}/frq`} className="focus-ring shrink-0 border border-ink-line rounded-md px-4 py-2 text-sm hover:bg-ink-soft">
          📝 FRQs
        </Link>
      </div>
      <ProgressTrail subject={subject} />
    </div>
  )
}
