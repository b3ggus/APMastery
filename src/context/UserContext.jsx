import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { xpForQuestion, coinsForQuestion, updateStreak, todayStr, BADGES } from '../lib/gamification.js'
import { newCard, reviewCard } from '../lib/srs.js'
import { useAuth } from './AuthContext.jsx'

const STORAGE_KEY = 'ap-arena-state-v1'

const DEFAULT_STATE = {
  xp: 0,
  coins: 0,
  streak: 0,
  bestStreak: 0,
  lastActive: null,
  badgesEarned: [],
  unitProgress: {}, // { "biology:1": { completed: true, perfect: true, bossDefeated: true } }
  bossesBySubject: {}, // { biology: 2 }
  flashcards: {}, // { questionId: srsCard }
  history: [], // [{ questionId, subject, unit, difficulty, topic, correct, timeSec, ts }]
  frqCompleted: 0,
  dailyChallengesDone: 0,
  dailyChallengeLastDate: null,
  bestSurvival: 0,
  fastestQuizAvgSec: null,
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_STATE }
    return { ...DEFAULT_STATE, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [state, setState] = useState(loadState)
  const { user, syncLeaderboardStats } = useAuth()

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  // Push the subset of stats the leaderboard cares about to Supabase whenever
  // they change, but only when signed in and only after a short debounce so
  // rapid-fire answers during a quiz don't trigger a request per question.
  const syncTimer = useRef(null)
  useEffect(() => {
    if (!user) return
    clearTimeout(syncTimer.current)
    syncTimer.current = setTimeout(() => {
      const bossesDefeated = Object.values(state.bossesBySubject).reduce((a, b) => a + b, 0)
      syncLeaderboardStats({
        xp: state.xp,
        coins: state.coins,
        bestStreak: state.bestStreak,
        bossesDefeated,
        frqCompleted: state.frqCompleted,
      })
    }, 1500)
    return () => clearTimeout(syncTimer.current)
  }, [user, state.xp, state.coins, state.bestStreak, state.bossesBySubject, state.frqCompleted, syncLeaderboardStats])

  // --- Derived aggregate stats used for badge checks ---
  const stats = useMemo(() => {
    const totalCorrect = state.history.filter((h) => h.correct).length
    const perfectUnits = Object.values(state.unitProgress).filter((u) => u.perfect).length
    const bossesDefeated = Object.values(state.bossesBySubject).reduce((a, b) => a + b, 0)
    return {
      totalCorrect,
      perfectUnits,
      bestStreak: state.bestStreak,
      fastestQuizAvgSec: state.fastestQuizAvgSec,
      bossesDefeated,
      bossesBySubject: state.bossesBySubject,
      frqCompleted: state.frqCompleted,
      bestSurvival: state.bestSurvival,
      dailyChallengesDone: state.dailyChallengesDone,
      flashcardsReviewed: state.history.filter((h) => h.fromFlashcard).length,
    }
  }, [state])

  const earnedBadgeIds = useMemo(() => BADGES.filter((b) => b.check(stats)).map((b) => b.id), [stats])

  function touchStreak() {
    setState((s) => {
      const { streak, lastActive } = updateStreak(s.lastActive, s.streak)
      return { ...s, streak, lastActive, bestStreak: Math.max(s.bestStreak, streak) }
    })
  }

  function recordAnswer({ question, correct, timeSec = null, fromFlashcard = false }) {
    touchStreak()
    setState((s) => {
      const gainedXp = xpForQuestion(question.difficulty, correct)
      const gainedCoins = coinsForQuestion(question.difficulty, correct)
      const entry = {
        questionId: question.id,
        subject: question.subject,
        unit: question.unitId,
        topic: question.topic,
        difficulty: question.difficulty,
        correct,
        timeSec,
        fromFlashcard,
        ts: Date.now(),
      }
      let flashcards = s.flashcards
      if (!correct && !fromFlashcard) {
        // Missed questions automatically become flashcards
        flashcards = { ...flashcards, [question.id]: s.flashcards[question.id] || newCard(question.id) }
      }
      return {
        ...s,
        xp: s.xp + gainedXp,
        coins: s.coins + gainedCoins,
        history: [...s.history, entry],
        flashcards,
      }
    })
  }

  function completeUnit(subjectId, unitId, { perfect = false } = {}) {
    setState((s) => ({
      ...s,
      unitProgress: {
        ...s.unitProgress,
        [`${subjectId}:${unitId}`]: { ...(s.unitProgress[`${subjectId}:${unitId}`] || {}), completed: true, perfect: perfect || s.unitProgress[`${subjectId}:${unitId}`]?.perfect || false },
      },
    }))
  }

  function defeatBoss(subjectId, unitId) {
    setState((s) => {
      const key = `${subjectId}:${unitId}`
      const already = s.unitProgress[key]?.bossDefeated
      return {
        ...s,
        unitProgress: { ...s.unitProgress, [key]: { ...(s.unitProgress[key] || {}), bossDefeated: true } },
        bossesBySubject: already ? s.bossesBySubject : { ...s.bossesBySubject, [subjectId]: (s.bossesBySubject[subjectId] || 0) + 1 },
      }
    })
  }

  function isUnitUnlocked(subjectId, units, unitIndex) {
    if (unitIndex === 0) return true
    const prevUnit = units[unitIndex - 1]
    return !!state.unitProgress[`${subjectId}:${prevUnit.id}`]?.bossDefeated
  }

  function recordSurvival(score) {
    setState((s) => ({ ...s, bestSurvival: Math.max(s.bestSurvival, score) }))
  }

  function recordQuizSpeed(avgSec, questionCount) {
    if (questionCount < 10) return
    setState((s) => ({ ...s, fastestQuizAvgSec: s.fastestQuizAvgSec === null ? avgSec : Math.min(s.fastestQuizAvgSec, avgSec) }))
  }

  function recordFrqComplete() {
    setState((s) => ({ ...s, frqCompleted: s.frqCompleted + 1 }))
  }

  function recordDailyChallengeComplete() {
    const today = todayStr()
    setState((s) => {
      if (s.dailyChallengeLastDate === today) return s
      return { ...s, dailyChallengesDone: s.dailyChallengesDone + 1, dailyChallengeLastDate: today }
    })
  }

  function reviewFlashcard(questionId, grade) {
    setState((s) => {
      const card = s.flashcards[questionId] || newCard(questionId)
      const updated = reviewCard(card, grade)
      return { ...s, flashcards: { ...s.flashcards, [questionId]: updated } }
    })
  }

  function resetProgress() {
    setState({ ...DEFAULT_STATE })
  }

  const value = {
    state,
    stats,
    earnedBadgeIds,
    recordAnswer,
    completeUnit,
    defeatBoss,
    isUnitUnlocked,
    recordSurvival,
    recordQuizSpeed,
    recordFrqComplete,
    recordDailyChallengeComplete,
    reviewFlashcard,
    resetProgress,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}
