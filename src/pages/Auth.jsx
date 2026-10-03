import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Auth() {
  const { enabled, signUp, signIn, user } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState('signup') // 'signup' | 'login'
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [busy, setBusy] = useState(false)

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
      <h1 className="font-display text-3xl mb-1">{mode === 'signup' ? 'Create an account' : 'Log in'}</h1>
      <p className="text-paper/50 text-sm mb-6">
        {mode === 'signup' ? 'Pick a username — this is what shows up on the leaderboard.' : 'Welcome back.'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div>
            <label className="block text-xs font-mono text-paper/50 mb-1">Username</label>
            <input
              className="focus-ring w-full rounded border border-ink-line bg-ink-soft px-3 py-2 text-paper"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="study_wizard_42"
              required
              minLength={3}
              maxLength={20}
              pattern="[a-zA-Z0-9_]+"
              title="3-20 characters: letters, numbers, underscores only"
            />
          </div>
        )}
        <div>
          <label className="block text-xs font-mono text-paper/50 mb-1">Email</label>
          <input
            type="email"
            className="focus-ring w-full rounded border border-ink-line bg-ink-soft px-3 py-2 text-paper"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-paper/50 mb-1">Password</label>
          <input
            type="password"
            className="focus-ring w-full rounded border border-ink-line bg-ink-soft px-3 py-2 text-paper"
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
          className="focus-ring w-full px-4 py-2 rounded bg-moss text-paper font-medium disabled:opacity-50"
        >
          {busy ? 'Working…' : mode === 'signup' ? 'Sign up' : 'Log in'}
        </button>
      </form>

      <button
        className="focus-ring mt-4 text-sm text-paper/50 hover:text-paper underline"
        onClick={() => {
          setError(null)
          setMode((m) => (m === 'signup' ? 'login' : 'signup'))
        }}
      >
        {mode === 'signup' ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
      </button>
    </div>
  )
}
