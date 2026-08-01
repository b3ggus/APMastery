import React from 'react'
import { DIFFICULTY_LABELS } from '../lib/gamification.js'

export default function DifficultyBadge({ difficulty, className = '' }) {
  const d = DIFFICULTY_LABELS[difficulty]
  if (!d) return null
  const colors = {
    1: 'text-signal border-signal/40 bg-signal/10',
    2: 'text-gold border-gold/40 bg-gold/10',
    3: 'text-ember-light border-ember/40 bg-ember/10',
    4: 'text-danger border-danger/40 bg-danger/10',
    5: 'text-indigo-light border-indigo/40 bg-indigo/10',
  }
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-mono ${colors[difficulty]} ${className}`}>
      {d.stars} <span className="hidden sm:inline">{d.label}</span>
    </span>
  )
}
