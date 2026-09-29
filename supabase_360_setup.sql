-- People Compound 360 Leadership Review — Supabase setup
-- Run this once in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.pc_360_sessions (
  id uuid primary key default gen_random_uuid(),
  inviter_name text not null,
  participant_name text not null,
  participant_email text not null,
  self_answers jsonb not null,
  invitation_message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.pc_360_reviewers (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.pc_360_sessions(id) on delete cascade,
  reviewer_name text,
  reviewer_email text not null,
  token text unique not null,
  answers jsonb,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists pc_360_reviewers_session_idx on public.pc_360_reviewers(session_id);
create index if not exists pc_360_reviewers_token_idx on public.pc_360_reviewers(token);

-- The website uses the Supabase Secret key only from Next.js server routes.
-- Keep these tables inaccessible to public browser roles.
alter table public.pc_360_sessions enable row level security;
alter table public.pc_360_reviewers enable row level security;
