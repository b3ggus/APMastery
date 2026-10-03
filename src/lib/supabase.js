import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseEnabled = Boolean(url && anonKey)

if (!supabaseEnabled) {
  // eslint-disable-next-line no-console
  console.warn(
    'Supabase env vars missing — accounts/leaderboard are disabled. ' +
      'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local to enable them.'
  )
}

// When env vars are absent we still export a client-shaped object so importing
// code doesn't have to null-check everywhere; every call will simply reject.
export const supabase = supabaseEnabled
  ? createClient(url, anonKey)
  : new Proxy(
      {},
      {
        get() {
          throw new Error('Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
        },
      }
    )
