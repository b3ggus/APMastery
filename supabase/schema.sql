-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query)
-- for the project you point VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY at.
--
-- Before running this, also go to:
--   Authentication → Providers → Email → turn OFF "Confirm email"
-- so sign-ups are active immediately without a verification link.

create table if not exists public.profiles (
  id uuid references auth.users (id) on delete cascade primary key,
  username text unique not null check (char_length(username) between 3 and 20),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  xp int default 0,
  coins int default 0,
  best_streak int default 0,
  bosses_defeated int default 0,
  frq_completed int default 0
);

alter table public.profiles enable row level security;

-- Anyone (including signed-out visitors) can read the leaderboard.
create policy "Profiles are publicly readable"
  on public.profiles for select
  using (true);

-- A user can only create their own profile row, and only matching their own auth id.
create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- A user can only update their own row (used to push XP/coins/streak for the leaderboard).
create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);
