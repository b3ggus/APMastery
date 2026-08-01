# Specimen — AP Study Arena

A gamified AP study app: unit trails, boss battles, survival mode, daily challenges,
spaced-repetition flashcards, a weakness tracker, analytics, ranked mode, and
self-graded FRQs. **10 subjects, 319 questions total:**
- **Complete (every real AP unit covered):** Biology (49), Chemistry (54),
  Statistics (54), Psychology (54)
- **In progress (multiple units each, more being added the same way):**
  US History (24, 3 of 9 periods), Computer Science A (24, 3 of 10 units),
  Calculus AB (18, 3 of 8 units), US Government & Politics (18, 3 of 5 units),
  Environmental Science (12, 2 of 9 units), Physics 1 (12, 2 of 7 units)

The rest of the AP catalog is stubbed as "coming soon" on the home page rather
than silently missing.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts (link or create a project). Vercel auto-detects Vite;
no extra config needed beyond the included `vercel.json`, which fixes
client-side routing so refreshing a page like `/subject/biology` doesn't 404.

**Option B — Git + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Build command `npm run build`, output dir `dist`
   (Vercel usually detects these automatically).
4. Deploy.

## How progress is stored

Everything (XP, coins, streaks, badges, flashcards, unit/boss progress,
question history for analytics) is stored in the browser's `localStorage`
under the key `ap-arena-state-v1`. There is no backend and no account system —
progress is per-browser, per-device. Clearing site data resets everything.

## What's real vs. what's a placeholder

**Fully functional today:**
- 6 subjects: Biology, Chemistry, Statistics, and Psychology (every real AP unit
  covered, 48-54 hand-written MCQs each with rich explanations), plus US History
  and Computer Science A (2 units/12 questions each so far). Every question's
  explanation covers why the correct answer is right, why each wrong choice is
  wrong, the most tempting distractor, a common mistake, and an AP scoring tip.
  Each subject also has FRQs with rubrics and sample full-credit responses.
- XP / coins / streak / rank tier system, badge achievements
- Unit practice mode, Unit Boss battles (20 questions, zero mistakes),
  Survival mode, Daily Challenge (seeded so it's the same set all day),
  Ranked mode (hard questions only)
- Spaced-repetition flashcards (missed questions auto-added, simplified SM-2)
- Analytics dashboard: accuracy over time, accuracy by difficulty, weakest
  topics, a rough "estimated AP score" heuristic

**Explicitly not built (needs real backend infrastructure):**
- Live 1v1 Study Arena — needs a websocket/realtime server
- Cross-device/cross-user leaderboards — needs a shared database + accounts
- AI Tutor and AI FRQ grading — needs a server-side route holding an API key;
  never embed an Anthropic/OpenAI key directly in client-side code
- Admin dashboard with real authentication and user management — needs a
  database and auth provider (e.g., Supabase, Clerk)
- 15,000-question bank across all 18 AP subjects — this is a large,
  ongoing content-writing effort, not a one-time build

## Extending the question bank

Each subject lives in `src/data/{biology,chemistry,statistics,psychology,usHistory,csa,calcAB,govPolitics,envSci,physics1}.js`.
Follow the existing shape (`units[].questions[]`, each with `explanation.correct`,
`explanation.wrong`, `explanation.tempting`, `explanation.commonMistake`,
`explanation.apTip`) and it will automatically show up in practice, boss
battles, survival, daily challenge, ranked, and analytics — nothing else
needs to change. To add a whole new subject, add a new file in `src/data/`
and register it in `src/data/subjects.js`.
