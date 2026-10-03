import React, { useEffect, useState } from 'react'
import { supabase, supabaseEnabled } from '../lib/supabase.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Leaderboard() {
  const { user, profile } = useAuth()
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!supabaseEnabled) {
      setLoading(false)
      return
    }
    let active = true
    supabase
      .from('profiles')
      .select('id, username, xp, coins, best_streak, bosses_defeated, frq_completed')
      .order('xp', { ascending: false })
      .limit(50)
      .then(({ data, error }) => {
        if (!active) return
        if (error) setError(error.message)
        else setRows(data)
        setLoading(false)
      })
    return () => {
      active = false
    }
  }, [profile?.xp])

  if (!supabaseEnabled) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center text-paper/60">
        Leaderboards aren't configured for this deployment yet.
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-display text-3xl mb-2">🏅 Leaderboard</h1>
      <p className="text-paper/50 text-sm mb-6">Top 50 by total XP.</p>

      {!user && (
        <p className="text-sm text-paper/50 mb-4">
          <a href="/signup" className="underline text-gold">
            Sign up
          </a>{' '}
          to get on the board.
        </p>
      )}

      {loading && <p className="text-paper/50">Loading…</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <ol className="space-y-1">
          {rows.map((row, i) => (
            <li
              key={row.id}
              className={`flex items-center justify-between rounded px-3 py-2 font-mono text-sm ${
                row.id === user?.id ? 'bg-gold/15 border border-gold/40' : 'bg-ink-soft/40'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="w-6 text-right text-paper/40">{i + 1}</span>
                <span className="text-paper">{row.username}</span>
              </span>
              <span className="text-gold">{row.xp} XP</span>
            </li>
          ))}
          {rows.length === 0 && <p className="text-paper/40 text-sm">No one on the board yet — be the first.</p>}
        </ol>
      )}
    </div>
  )
}
