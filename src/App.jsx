import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import SubjectPage from './pages/SubjectPage.jsx'
import UnitPractice from './pages/UnitPractice.jsx'
import BossBattle from './pages/BossBattle.jsx'
import Survival from './pages/Survival.jsx'
import DailyChallenge from './pages/DailyChallenge.jsx'
import Flashcards from './pages/Flashcards.jsx'
import Analytics from './pages/Analytics.jsx'
import Achievements from './pages/Achievements.jsx'
import Ranked from './pages/Ranked.jsx'
import FRQPage from './pages/FRQPage.jsx'
import Auth from './pages/Auth.jsx'
import Leaderboard from './pages/Leaderboard.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/subject/:subjectId/frq" element={<FRQPage />} />
          <Route path="/subject/:subjectId/unit/:unitId" element={<UnitPractice />} />
          <Route path="/subject/:subjectId/unit/:unitId/boss" element={<BossBattle />} />
          <Route path="/survival" element={<Survival />} />
          <Route path="/daily" element={<DailyChallenge />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/ranked" element={<Ranked />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-xs text-paper/30 font-mono">
        AP Study Arena. Progress is stored locally in this browser.
      </footer>
    </div>
  )
}
