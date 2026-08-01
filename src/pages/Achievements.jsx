import React from 'react'
import { BADGES } from '../lib/gamification.js'
import { useUser } from '../context/UserContext.jsx'

export default function Achievements() {
  const { earnedBadgeIds } = useUser()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-display text-3xl mb-2">🏆 Achievements</h1>
      <p className="text-paper/50 text-sm mb-6">{earnedBadgeIds.length}/{BADGES.length} earned. More badges get added as the question bank grows.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {BADGES.map((b) => {
          const earned = earnedBadgeIds.includes(b.id)
          return (
            <div key={b.id} className={`rounded-lg border-2 p-4 ${earned ? 'border-gold/50 bg-gold/10' : 'border-ink-line bg-ink-soft/40 opacity-50'}`}>
              <div className="text-3xl mb-2">{earned ? b.icon : '🔒'}</div>
              <h3 className="font-display text-lg">{b.name}</h3>
              <p className="text-xs text-paper/50 mt-1">{b.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
