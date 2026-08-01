import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'
import { rankForXP, streakFlames } from '../lib/gamification.js'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/daily', label: 'Daily' },
  { to: '/flashcards', label: 'Flashcards' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/achievements', label: 'Badges' },
  { to: '/ranked', label: 'Ranked' },
]

export default function Nav() {
  const { state } = useUser()
  const location = useLocation()
  const { current } = rankForXP(state.xp)

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-ink/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl font-600 tracking-tight text-paper">
            Specimen <span className="text-gold">·</span> <span className="text-sm font-body font-500 text-paper/60">AP Study Arena</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`focus-ring px-3 py-2 rounded text-sm font-medium transition-colors ${
                  location.pathname === l.to ? 'bg-ink-soft text-paper' : 'text-paper/60 hover:text-paper hover:bg-ink-soft/60'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="hidden sm:flex items-center gap-1 text-gold" title="Rank">
              <span className="w-2 h-2 rounded-full" style={{ background: current.color }} />
              {current.name}
            </span>
            <span className="text-paper/80">{state.xp} XP</span>
            <span className="text-ember-light">{state.coins}c</span>
            <span title={`${state.streak} day streak`}>{streakFlames(state.streak)}{state.streak}</span>
          </div>
        </div>
        <nav className="flex md:hidden gap-1 pb-2 overflow-x-auto">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`focus-ring shrink-0 px-3 py-1.5 rounded text-xs font-medium ${
                location.pathname === l.to ? 'bg-ink-soft text-paper' : 'text-paper/60'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
