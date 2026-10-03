import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SUBJECTS_BY_ID } from '../data/subjects.js'
import { useUser } from '../context/UserContext.jsx'
import DifficultyBadge from '../components/DifficultyBadge.jsx'

export default function FRQPage() {
  const { subjectId } = useParams()
  const subject = SUBJECTS_BY_ID[subjectId]
  const { recordFrqComplete } = useUser()
  const [openId, setOpenId] = useState(null)
  const [response, setResponse] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [checked, setChecked] = useState({})

  if (!subject) {
    return <div className="max-w-3xl mx-auto px-4 py-10">Subject not found. <Link className="underline" to="/">Go home</Link></div>
  }

  function openFrq(id) {
    setOpenId(id)
    setResponse('')
    setRevealed(false)
    setChecked({})
  }

  function submitSelfGrade(frq) {
    recordFrqComplete()
    setOpenId(null)
  }

  const open = subject.frqs.find((f) => f.id === openId)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl">📝 {subject.name} FRQs</h1>
        <Link to={`/subject/${subject.id}`} className="text-sm text-paper/50 hover:text-paper">← Back to trail</Link>
      </div>

      {!open ? (
        <div className="space-y-3">
          {subject.frqs.map((f) => (
            <button key={f.id} onClick={() => openFrq(f.id)} className="focus-ring w-full text-left border border-panel-line bg-panel rounded-lg p-4 hover:bg-panel-soft flex items-center justify-between">
              <div>
                <p className="font-medium">Unit {f.unit} Free Response</p>
                <p className="text-xs text-paper/40 mt-1 line-clamp-1">{f.prompt.slice(0, 90)}…</p>
              </div>
              <DifficultyBadge difficulty={f.difficulty} />
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-paper-card text-ink rounded-lg p-6 sm:p-8 shadow-xl card-torn">
          <div className="flex items-center justify-between mb-4">
            <DifficultyBadge difficulty={open.difficulty} />
            <button onClick={() => setOpenId(null)} className="text-sm text-ink/50 hover:text-ink">✕ Close</button>
          </div>
          <p className="whitespace-pre-line leading-relaxed mb-5">{open.prompt}</p>

          {!revealed ? (
            <>
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Type your free response here..."
                rows={8}
                className="focus-ring w-full rounded-md border border-ink/20 p-3 text-sm mb-4"
              />
              <button onClick={() => setRevealed(true)} className="focus-ring bg-ink text-paper px-5 py-2.5 rounded-md font-medium hover:bg-ink-soft">
                Reveal rubric &amp; self-grade
              </button>
            </>
          ) : (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs uppercase tracking-wide text-ink/50 mb-2">Scoring rubric — check off what your response covered</h4>
                <div className="space-y-2">
                  {open.rubricPoints.map((point, i) => (
                    <label key={i} className="flex items-start gap-2 text-sm cursor-pointer">
                      <input type="checkbox" checked={!!checked[i]} onChange={(e) => setChecked((c) => ({ ...c, [i]: e.target.checked }))} className="mt-1" />
                      <span>{point}</span>
                    </label>
                  ))}
                </div>
                <p className="text-sm font-mono mt-2">Score: {Object.values(checked).filter(Boolean).length} / {open.rubricPoints.length}</p>
              </div>
              <div className="bg-signal/10 border border-signal/30 rounded p-3">
                <h4 className="text-xs uppercase tracking-wide text-signal mb-1 font-600">Sample full-credit response</h4>
                <p className="text-sm leading-relaxed whitespace-pre-line">{open.sampleResponse}</p>
              </div>
              <button onClick={() => submitSelfGrade(open)} className="focus-ring bg-gold text-ink px-5 py-2.5 rounded-md font-medium hover:brightness-110">
                Mark complete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
