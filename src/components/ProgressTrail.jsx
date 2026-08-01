import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'

export default function ProgressTrail({ subject }) {
  const { state, isUnitUnlocked } = useUser()

  const nodes = []
  subject.units.forEach((unit, i) => {
    const unlocked = isUnitUnlocked(subject.id, subject.units, i)
    const key = `${subject.id}:${unit.id}`
    const progress = state.unitProgress[key] || {}
    nodes.push({ type: 'unit', unit, unlocked, progress })
    nodes.push({ type: 'boss', unit, unlocked: progress.completed, progress })
  })

  return (
    <div className="relative py-4">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink-line -translate-x-1/2 hidden sm:block" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 6px, #2A3438 6px, #2A3438 12px)' }} />
      <ol className="space-y-6 relative">
        {nodes.map((node, idx) => {
          const side = idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
          if (node.type === 'unit') {
            const done = node.progress.completed
            return (
              <li key={`u-${node.unit.id}`} className={`flex ${side}`}>
                <Link
                  to={node.unlocked ? `/subject/${subject.id}/unit/${node.unit.id}` : '#'}
                  onClick={(e) => !node.unlocked && e.preventDefault()}
                  className={`focus-ring w-full sm:w-[46%] rounded-lg border-2 px-5 py-4 transition-transform ${
                    node.unlocked ? 'border-ink-line bg-ink-soft hover:-translate-y-0.5 cursor-pointer' : 'border-ink-line/40 bg-ink-soft/30 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg">{node.unit.name}</span>
                    <span>{!node.unlocked ? '🔒' : done ? '✅' : '📗'}</span>
                  </div>
                  <p className="text-xs text-paper/50 mt-1 font-mono">{node.unit.questions.length} practice questions</p>
                </Link>
              </li>
            )
          }
          const bossDone = node.progress.bossDefeated
          return (
            <li key={`b-${node.unit.id}`} className={`flex ${side}`}>
              <Link
                to={node.unlocked ? `/subject/${subject.id}/unit/${node.unit.id}/boss` : '#'}
                onClick={(e) => !node.unlocked && e.preventDefault()}
                className={`focus-ring w-full sm:w-[46%] rounded-lg border-2 px-5 py-4 transition-transform ${
                  node.unlocked
                    ? bossDone
                      ? 'border-gold/50 bg-gold/10 hover:-translate-y-0.5 cursor-pointer'
                      : 'border-danger/50 bg-danger/10 hover:-translate-y-0.5 cursor-pointer'
                    : 'border-ink-line/40 bg-ink-soft/20 opacity-40 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg">{node.unit.name.split(':')[0]} Boss</span>
                  <span>{!node.unlocked ? '🔒' : bossDone ? '🏆' : '👹'}</span>
                </div>
                <p className="text-xs text-paper/50 mt-1 font-mono">20 questions · zero mistakes to unlock next unit</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
