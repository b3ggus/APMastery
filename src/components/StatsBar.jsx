import React, { useEffect, useState } from 'react'
import { getContentStats } from '../data/subjects.js'
import { supabase, supabaseEnabled } from '../lib/supabase.js'

const content = getContentStats()

const ACCENTS = {
  ember: { border: 'border-ember/40', bg: 'bg-ember/10', text: 'text-ember-light' },
  moss: { border: 'border-moss/40', bg: 'bg-moss/10', text: 'text-moss-light' },
  indigo: { border: 'border-indigo/40', bg: 'bg-indigo/10', text: 'text-indigo-light' },
}

function Stat({ icon, value, label, accent }) {
  const c = ACCENTS[accent]
  return (
    <div className={`flex-1 min-w-[160px] border-2 rounded-lg p-5 text-center ${c.border} ${c.bg}`}>
      <div className="text-3xl mb-1">{icon}</div>
      <p className={`font-display text-3xl ${c.text}`}>{value}</p>
      <p className="text-xs uppercase tracking-wide text-paper/60 font-mono mt-1">{label}</p>
    </div>
  )
}

export default function StatsBar() {
  const [userCount, setUserCount] = useState(null)

  useEffect(() => {
    if (!supabaseEnabled) return
    let active = true
    supabase
      .from('profiles')
      .select('id', { count: 'exact', head: true })
      .then(({ count }) => {
        if (active && typeof count === 'number') setUserCount(count)
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <section>
      <h2 className="font-display text-2xl mb-4 text-center">The Arena, by the numbers</h2>
      <div className="flex flex-wrap gap-4">
        <Stat icon="📚" value={content.subjectCount} label="Subjects" accent="moss" />
        <Stat icon="❓" value={content.questionCount.toLocaleString()} label="Questions" accent="ember" />
        <Stat
          icon="⚔️"
          value={userCount !== null ? userCount.toLocaleString() : '—'}
          label="Students in the Arena"
          accent="indigo"
        />
      </div>
    </section>
  )
}
