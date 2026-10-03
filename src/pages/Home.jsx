import React from 'react'
import { Link } from 'react-router-dom'
import { SUBJECTS, COMING_SOON } from '../data/subjects.js'
import { useUser } from '../context/UserContext.jsx'
import { rankForXP, streakFlames } from '../lib/gamification.js'
import StatsBar from '../components/StatsBar.jsx'

const ACCENT_CLASSES = {
  moss: 'border-moss/40 hover:border-moss bg-moss/5',
  ember: 'border-ember/40 hover:border-ember bg-ember/5',
  indigo: 'border-indigo/40 hover:border-indigo bg-indigo/5',
}

export default function Home() {
  const { state, stats } = useUser()
  const { current, next } = rankForXP(state.xp)
  const toNext = next ? next.min - state.xp : null

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      <StatsBar />

      <section className="grid sm:grid-cols-3 gap-4">
        <div className="bg-ink-soft border border-ink-line rounded-lg p-5">
          <p className="text-xs uppercase tracking-wide text-paper/50 font-mono mb-1">Streak</p>
          <p className="font-display text-3xl">{streakFlames(state.streak)} {state.streak} days</p>
          <p className="text-xs text-paper/40 mt-1">Best: {state.bestStreak} days</p>
        </div>
        <div className="bg-ink-soft border border-ink-line rounded-lg p-5">
          <p className="text-xs uppercase tracking-wide text-paper/50 font-mono mb-1">Rank</p>
          <p className="font-display text-3xl" style={{ color: current.color }}>{current.name}</p>
          <p className="text-xs text-paper/40 mt-1">{next ? `${toNext} XP to ${next.name}` : 'Max rank reached'}</p>
        </div>
        <div className="bg-ink-soft border border-ink-line rounded-lg p-5">
          <p className="text-xs uppercase tracking-wide text-paper/50 font-mono mb-1">Lifetime</p>
          <p className="font-display text-3xl">{stats.totalCorrect} correct</p>
          <p className="text-xs text-paper/40 mt-1">{state.coins} coins earned</p>
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-3 bg-gold/10 border border-gold/30 rounded-lg p-5">
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-display text-xl">📅 Daily Challenge</h3>
          <p className="text-sm text-paper/60">10 hard questions, refreshed every day. Same set for everyone today.</p>
        </div>
        <Link to="/daily" className="focus-ring bg-gold text-ink px-5 py-2.5 rounded-md font-medium hover:brightness-110">Start today's set</Link>
      </section>

      <section>
        <h2 className="font-display text-2xl mb-4">Subjects</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {SUBJECTS.map((s) => {
            const totalUnits = s.units.length
            const done = s.units.filter((u) => state.unitProgress[`${s.id}:${u.id}`]?.bossDefeated).length
            return (
              <Link key={s.id} to={`/subject/${s.id}`} className={`focus-ring rounded-lg border-2 p-5 transition-colors ${ACCENT_CLASSES[s.accent]}`}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="font-display text-lg">{s.name}</h3>
                <p className="text-xs text-paper/50 font-mono mt-1">{done}/{totalUnits} units mastered</p>
              </Link>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl mb-4">More subjects — coming soon</h2>
        <div className="flex flex-wrap gap-2">
          {COMING_SOON.map((s) => (
            <span key={s.id} className="text-sm px-3 py-1.5 rounded-full border border-ink-line text-paper/40 font-mono">
              {s.icon} {s.name}
            </span>
          ))}
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-4">
        <Link to="/survival" className="focus-ring rounded-lg border-2 border-danger/40 hover:border-danger bg-danger/5 p-5">
          <div className="text-2xl mb-1">🛡️</div>
          <h3 className="font-display text-lg">Survival Mode</h3>
          <p className="text-xs text-paper/50">Answer until 3 mistakes. Best: {state.bestSurvival}</p>
        </Link>
        <Link to="/flashcards" className="focus-ring rounded-lg border-2 border-indigo/40 hover:border-indigo bg-indigo/5 p-5">
          <div className="text-2xl mb-1">🗂️</div>
          <h3 className="font-display text-lg">Flashcard Review</h3>
          <p className="text-xs text-paper/50">Missed questions, spaced repetition</p>
        </Link>
        <Link to="/ranked" className="focus-ring rounded-lg border-2 border-gold/40 hover:border-gold bg-gold/5 p-5">
          <div className="text-2xl mb-1">🏅</div>
          <h3 className="font-display text-lg">Ranked Mode</h3>
          <p className="text-xs text-paper/50">Hard questions only. Climb the tiers.</p>
        </Link>
      </section>
    </div>
  )
}
