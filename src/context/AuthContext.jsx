import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase, supabaseEnabled } from '../lib/supabase.js'

const AuthContext = createContext(null)

const USERNAME_RULE = /^[a-zA-Z0-9_]{3,20}$/

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(supabaseEnabled)

  const loadProfile = useCallback(async (userId) => {
    if (!supabaseEnabled || !userId) {
      setProfile(null)
      return
    }
    const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle()
    if (!error) setProfile(data)
  }, [])

  useEffect(() => {
    if (!supabaseEnabled) {
      setLoading(false)
      return
    }
    let active = true

    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return
      setSession(data.session)
      if (data.session?.user) await loadProfile(data.session.user.id)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession)
      if (newSession?.user) {
        await loadProfile(newSession.user.id)
      } else {
        setProfile(null)
      }
    })

    return () => {
      active = false
      listener.subscription.unsubscribe()
    }
  }, [loadProfile])

  async function isUsernameTaken(username) {
    const { data, error } = await supabase.from('profiles').select('id').eq('username', username).maybeSingle()
    if (error) throw error
    return Boolean(data)
  }

  async function signUp(email, password, username) {
    if (!supabaseEnabled) throw new Error('Accounts are not configured for this deployment yet.')
    const trimmed = username.trim()
    if (!USERNAME_RULE.test(trimmed)) {
      throw new Error('Usernames must be 3-20 characters: letters, numbers, and underscores only.')
    }
    if (await isUsernameTaken(trimmed)) {
      throw new Error('That username is already taken.')
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username: trimmed } },
    })
    if (error) throw error

    // Email confirmation is disabled for this project, so signUp returns an
    // active session immediately and we can create the profile row right away.
    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({ id: data.user.id, username: trimmed })
      if (profileError) {
        if (profileError.code === '23505') {
          throw new Error('That username is already taken.')
        }
        throw profileError
      }
      await loadProfile(data.user.id)
    }
    return data
  }

  async function signIn(email, password) {
    if (!supabaseEnabled) throw new Error('Accounts are not configured for this deployment yet.')
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  async function signOut() {
    if (!supabaseEnabled) return
    await supabase.auth.signOut()
    setProfile(null)
  }

  // Called by UserContext whenever gamification stats change, so the
  // leaderboard stays current. Silently no-ops when signed out or disabled.
  async function syncLeaderboardStats(stats) {
    if (!supabaseEnabled || !session?.user) return
    const { error } = await supabase
      .from('profiles')
      .update({
        xp: stats.xp,
        coins: stats.coins,
        best_streak: stats.bestStreak,
        bosses_defeated: stats.bossesDefeated,
        frq_completed: stats.frqCompleted,
        updated_at: new Date().toISOString(),
      })
      .eq('id', session.user.id)
    if (!error) {
      setProfile((p) => (p ? { ...p, ...stats } : p))
    }
  }

  const value = {
    enabled: supabaseEnabled,
    session,
    user: session?.user ?? null,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    syncLeaderboardStats,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
