import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { supabase, supabaseEnabled } from '../lib/supabase.js'
import { generateUsername } from '../lib/usernames.js'

async function findAvailableUsername(maxAttempts = 8) {
  for (let i = 0; i < maxAttempts; i++) {
    const candidate = generateUsername()
    const { data } = await supabase.from('profiles').select('id').eq('username', candidate).maybeSingle()
    if (!data) return candidate
  }
  // Astronomically unlikely with the random numeric suffix, but fall back
  // to a longer, still-readable name rather than looping forever.
  return `${generateUsername()}${Date.now().toString().slice(-4)}`
}

export default function Auth() {
  const { enabled, signUp, signIn, user } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState('signup') // 'signup' | 'login'
  const [username, setUsername] = useState('')
  const [generating, setGenerating] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [busy, setBusy] = useState(false)

  const rollUsername = useCallback(async () => {
    if (!supabaseEnabled) return
    setGenerating(true)
    try {
      setUsername(await findAvailableUsername())
    } finally {
      setGenerating(false)
    }
  }, [])

  // Suggest a username the moment the sign-up form opens, so the field is
  // never empty and most people can just hit submit without typing one.
  useEffect(() => {
    if (mode === 'signup' && !username && supabaseEnabled) {
      rollUsername()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  if (user) {
    return (
      <div className="max-w-md mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-paper/70">You're already signed in.</p>
        <button className="focus-ring mt-4 px-4 py-2 rounded bg-moss text-paper font-medium" onClick={() => navigate('/leaderboard')}>
          Go to leaderboard
        </button>
      </div>
    )
  }

  if (!enabled) {
    return (
      <div className="max-w-md mx-auto px-4 sm:px-6 py-16 text-center text-paper/60">
        <p>Accounts aren't configured for this deployment yet.</p>
      </div>
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    try {
      if (mode === 'signup') {
        await signUp(email, password, username)
      } else {
        await signIn(email, password)
      }
      navigate('/')
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16">
      <div className="relative card-torn bg-paper-card text-ink rounded-lg border border-ink-line/10 shadow-xl shadow-black/30 p-7 sm:p-9">
        <div className="tape" />
        <h1 className="font-display text-3xl mb-1">
          {mode === 'signup' ? '📜 Join the Arena' : '🔑 Welcome back'}
        </h1>
        <p className="text-ink/60 text-sm mb-6">
          {mode === 'signup'
            ? "We've already picked you a study name below — keep it, shuffle for another, or write your own."
            : 'Log back in to pick up your streak where you left off.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-mono uppercase tracking-wide text-ink/50 mb-1">
                Your study name
              </label>
              <div className="flex gap-2">
                <input
                  className="focus-ring flex-1 rounded border border-ink-line/30 bg-paper px-3 py-2 text-ink font-display text-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="StudyWizard482"
                  required
                  minLength={3}
                  maxLength={20}
                  pattern="[a-zA-Z0-9_]+"
                  title="3-20 characters: letters, numbers, underscores only"
                />
                <button
                  type="button"
                  onClick={rollUsername}
                  disabled={generating}
                  title="Shuffle for a new suggestion"
                  className="focus-ring shrink-0 px-3 rounded border border-ink-line/30 bg-paper hover:bg-gold/20 disabled:opacity-50 text-lg"
                >
                  {generating ? '…' : '🎲'}
                </button>
              </div>
              <p className="text-[11px] text-ink/40 mt-1">This is what shows up on the leaderboard.</p>
            </div>
          )}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wide text-ink/50 mb-1">Email</label>
            <input
              type="email"
              className="focus-ring w-full rounded border border-ink-line/30 bg-paper px-3 py-2 text-ink"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wide text-ink/50 mb-1">Password</label>
            <input
              type="password"
              className="focus-ring w-full rounded border border-ink-line/30 bg-paper px-3 py-2 text-ink"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          {error && <p className="text-sm text-danger">{error}</p>}

          <button
            type="submit"
            disabled={busy}
            className="focus-ring w-full px-4 py-2.5 rounded bg-moss text-paper font-medium hover:brightness-110 disabled:opacity-50"
          >
            {busy ? 'Working…' : mode === 'signup' ? '⚔️ Enter the Arena' : 'Log in'}
          </button>
        </form>

        <button
          className="focus-ring mt-5 text-sm text-ink/50 hover:text-ink underline"
          onClick={() => {
            setError(null)
            setMode((m) => (m === 'signup' ? 'login' : 'signup'))
          }}
        >
          {mode === 'signup' ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
        </button>
      </div>
    </div>
  )
}
