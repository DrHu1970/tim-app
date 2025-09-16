# TIM App (MVP)
Next.js + Supabase (Auth/DB) + Recharts

## Quickstart
1. Copy `.env.example` to `.env.local` and fill in:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
2. `npm install`
3. `npm run dev`

## Deploy (Vercel)
- Import this repo.
- Set the same env vars in Vercel Project Settings:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY

## Notes
- Login page uses Supabase Auth UI (Email magic link).
- RLS requires an authenticated user; most pages redirect to /login if not signed in.
