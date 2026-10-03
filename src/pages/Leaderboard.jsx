import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase, supabaseEnabled } from '../lib/supabase.js'
import { useAuth } from '../context/AuthContext.jsx'

const PAGE_SIZE = 50
const MEDALS = ['🥇', '🥈', '🥉']

// Deterministic color per username so avatars stay stable across reloads
// without needing to store a color in the database.
const AVATAR_PALETTE = ['#C7723A', '#4C7A5E', '#4A5FBF', '#D4A72C', '#9C5628', '#37458F']
function avatarColor(username) {
  let hash = 0
  for (let i = 0; i < username.length; i++) hash = (hash * 31 + username.charCodeAt(i)) >>> 0
  return AVATAR_PALETTE[hash % AVATAR_PALETTE.length]
}

export default function Leaderboard() {
  const { user, profile } = useAuth()
  const [rows, setRows] = useState([])
  const [totalCount, setTotalCount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)

  const loadPage = useCallback(async (from) => {
    const to = from + PAGE_SIZE - 1
    return supabase
      .from('profiles')
      .select('id, username, xp, coins, best_streak, bosses_defeated, frq_completed', { count: from === 0 ? 'exact' : undefined })
      .order('xp', { ascending: false })
      .order('username', { ascending: true })
      .range(from, to)
  }, [])

  useEffect(() => {
    if (!supabaseEnabled) {
      setLoading(false)
      return
    }
    let active = true
    setLoading(true)
    loadPage(0).then(({ data, error, count }) => {
      if (!active) return
      if (error) setError(error.message)
      else {
        setRows(data)
        if (typeof count === 'number') setTotalCount(count)
      }
      setLoading(false)
    })
    return () => {
      active = false
    }
    // Re-sync from the top whenever the signed-in user's own XP changes, so
    // moving up/down the board after a practice session is reflected.
  }, [loadPage, profile?.xp])

  async function handleLoadMore() {
    setLoadingMore(true)
    const { data, error } = await loadPage(rows.length)
    if (error) setError(error.message)
    else setRows((prev) => [...prev, ...data])
    setLoadingMore(false)
  }

  if (!supabaseEnabled) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center text-paper/60">
        Leaderboards aren't configured for this deployment yet.
      </div>
    )
  }

  const hasMore = totalCount !== null && rows.length < totalCount

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <div className="relative overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-gold/20 via-ember/10 to-moss/15 p-6 mb-6">
        <div className="absolute -top-10 -right-10 text-[140px] opacity-10 select-none leading-none">🏆</div>
        <h1 className="font-display text-4xl mb-1">Leaderboard</h1>
        <p className="text-paper/60 text-sm">
          Every Arena player, ranked by total XP.
          {totalCount !== null && (
            <span className="font-mono text-paper/40"> {totalCount.toLocaleString()} competitors so far.</span>
          )}
        </p>
      </div>

      {!user && (
        <div className="flex items-center justify-between gap-3 mb-5 bg-moss/10 border border-moss/30 rounded-lg px-4 py-3">
          <p className="text-sm text-paper/70">Not on the board yet?</p>
          <Link
            to="/signup"
            className="focus-ring shrink-0 bg-moss text-paper text-sm font-medium px-4 py-1.5 rounded hover:brightness-110"
          >
            Join the Arena
          </Link>
        </div>
      )}

      {loading && (
        <div className="space-y-1.5 animate-pulse">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-12 rounded-lg bg-panel-soft" />
          ))}
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <>
          <ol className="space-y-1.5">
            {rows.map((row, i) => {
              const isMe = row.id === user?.id
              const rank = i + 1
              return (
                <li
                  key={row.id}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                    isMe
                      ? 'bg-gold/15 border border-gold/50'
                      : rank <= 3
                        ? 'bg-panel-soft border border-panel-line shadow-sm'
                        : 'bg-panel border border-panel-line/60 hover:border-panel-line'
                  }`}
                >
                  <span className="w-7 text-center font-mono text-sm text-paper/40 shrink-0">
                    {MEDALS[rank - 1] ?? rank}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-display font-semibold text-white shrink-0 shadow-sm"
                    style={{ backgroundColor: avatarColor(row.username) }}
                  >
                    {row.username[0]?.toUpperCase()}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className={`block truncate ${isMe ? 'font-semibold text-gold' : 'text-paper'}`}>
                      {row.username}
                      {isMe && <span className="ml-1.5 text-[10px] font-mono text-gold/70 align-middle">YOU</span>}
                    </span>
                  </span>
                  <span className="font-mono text-sm text-gold shrink-0">{row.xp.toLocaleString()} XP</span>
                </li>
              )
            })}
            {rows.length === 0 && (
              <p className="text-paper/40 text-sm text-center py-10">
                No one's on the board yet — be the first to{' '}
                <Link to="/signup" className="text-gold underline">
                  join the Arena
                </Link>
                .
              </p>
            )}
          </ol>

          {hasMore && (
            <div className="text-center mt-5">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="focus-ring px-5 py-2 rounded-lg border border-panel-line bg-panel text-paper/70 hover:text-paper hover:border-gold/50 text-sm font-mono disabled:opacity-50"
              >
                {loadingMore ? 'Loading…' : `Show next ${Math.min(PAGE_SIZE, totalCount - rows.length)}`}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
