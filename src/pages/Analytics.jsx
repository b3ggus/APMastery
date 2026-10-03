import React, { useMemo } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useUser } from '../context/UserContext.jsx'
import { SUBJECTS } from '../data/subjects.js'
import { estimateAPScore } from '../lib/gamification.js'

function groupByDay(history) {
  const map = {}
  history.forEach((h) => {
    const day = new Date(h.ts).toISOString().slice(0, 10)
    if (!map[day]) map[day] = { day, correct: 0, total: 0 }
    map[day].total += 1
    if (h.correct) map[day].correct += 1
  })
  return Object.values(map)
    .sort((a, b) => (a.day > b.day ? 1 : -1))
    .slice(-14)
    .map((d) => ({ ...d, accuracy: Math.round((d.correct / d.total) * 100) }))
}

function byDifficulty(history) {
  const buckets = { 1: { correct: 0, total: 0 }, 2: { correct: 0, total: 0 }, 3: { correct: 0, total: 0 }, 4: { correct: 0, total: 0 }, 5: { correct: 0, total: 0 } }
  history.forEach((h) => {
    if (!buckets[h.difficulty]) return
    buckets[h.difficulty].total += 1
    if (h.correct) buckets[h.difficulty].correct += 1
  })
  return buckets
}

function byTopic(history) {
  const map = {}
  history.forEach((h) => {
    if (!h.topic) return
    if (!map[h.topic]) map[h.topic] = { topic: h.topic, correct: 0, total: 0 }
    map[h.topic].total += 1
    if (h.correct) map[h.topic].correct += 1
  })
  return Object.values(map).map((t) => ({ ...t, accuracy: Math.round((t.correct / t.total) * 100) }))
}

export default function Analytics() {
  const { state } = useUser()
  const daily = useMemo(() => groupByDay(state.history), [state.history])
  const diffBuckets = useMemo(() => byDifficulty(state.history), [state.history])
  const topics = useMemo(() => byTopic(state.history).sort((a, b) => a.accuracy - b.accuracy), [state.history])
  const weakest = topics.filter((t) => t.total >= 2).slice(0, 5)

  const scoresBySubject = SUBJECTS.map((s) => {
    const h = state.history.filter((x) => x.subject === s.id)
    const buckets = byDifficulty(h)
    return { subject: s.name, score: estimateAPScore(buckets) }
  })

  if (state.history.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">📊</div>
        <h1 className="font-display text-2xl mb-2">No data yet</h1>
        <p className="text-paper/50">Answer some questions in practice, boss battles, or daily challenges to see your analytics here.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      <h1 className="font-display text-3xl">📊 Analytics</h1>

      <section className="bg-panel-soft border border-panel-line rounded-lg p-5">
        <h2 className="font-display text-lg mb-3">Estimated AP Score</h2>
        <p className="text-xs text-paper/40 mb-4 font-mono">A rough heuristic based on your accuracy weighted by difficulty — not an official prediction.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {scoresBySubject.map((s) => (
            <div key={s.subject} className="text-center">
              <p className="text-xs text-paper/50 mb-1">{s.subject}</p>
              <p className="font-display text-4xl" style={{ color: s.score >= 4 ? '#6FA287' : s.score >= 3 ? '#D4A72C' : '#C1553D' }}>
                {s.score ?? '—'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-panel-soft border border-panel-line rounded-lg p-5">
        <h2 className="font-display text-lg mb-3">Accuracy over last 14 active days</h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={daily}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A3438" />
            <XAxis dataKey="day" tick={{ fill: '#F4EFE3', fontSize: 11 }} tickFormatter={(d) => d.slice(5)} />
            <YAxis domain={[0, 100]} tick={{ fill: '#F4EFE3', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: '#1B2327', border: '1px solid #2A3438', color: '#F4EFE3' }} />
            <Line type="monotone" dataKey="accuracy" stroke="#D4A72C" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="bg-panel-soft border border-panel-line rounded-lg p-5">
        <h2 className="font-display text-lg mb-3">Accuracy by difficulty</h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={[1, 2, 3, 4, 5].map((d) => ({ name: '⭐'.repeat(d), accuracy: diffBuckets[d].total ? Math.round((diffBuckets[d].correct / diffBuckets[d].total) * 100) : 0 }))}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A3438" />
            <XAxis dataKey="name" tick={{ fill: '#F4EFE3', fontSize: 11 }} />
            <YAxis domain={[0, 100]} tick={{ fill: '#F4EFE3', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: '#1B2327', border: '1px solid #2A3438', color: '#F4EFE3' }} />
            <Bar dataKey="accuracy" fill="#4A5FBF" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="bg-panel-soft border border-panel-line rounded-lg p-5">
        <h2 className="font-display text-lg mb-3">You struggle with</h2>
        {weakest.length === 0 ? (
          <p className="text-paper/50 text-sm">Not enough data per topic yet — keep practicing to surface weak spots.</p>
        ) : (
          <ul className="space-y-2">
            {weakest.map((t) => (
              <li key={t.topic} className="flex items-center justify-between text-sm">
                <span>{t.topic}</span>
                <span className="font-mono text-danger">{t.accuracy}% ({t.correct}/{t.total})</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
