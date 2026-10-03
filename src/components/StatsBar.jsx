import React, { useEffect, useState } from 'react'
import { getContentStats } from '../data/subjects.js'
import { supabase, supabaseEnabled } from '../lib/supabase.js'

const content = getContentStats()

function Stat({ icon, value, label }) {
  return (
    <div className="flex-1 min-w-[140px] bg-ink-soft border border-ink-line rounded-lg p-5 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-display text-3xl text-gold">{value}</p>
      <p className="text-xs uppercase tracking-wide text-paper/50 font-mono mt-1">{label}</p>
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
    <section className="flex flex-wrap gap-4">
      <Stat icon="📚" value={content.subjectCount} label="Subjects" />
      <Stat icon="❓" value={content.questionCount.toLocaleString()} label="Questions" />
      <Stat icon="⚔️" value={userCount !== null ? userCount.toLocaleString() : '—'} label="Students in the Arena" />
    </section>
  )
}
