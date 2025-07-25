import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';
import { getSupabaseEnv } from '@/src/lib/env';

export function createServerSupabaseClient() {
  return createClient(
    getSupabaseEnv().NEXT_PUBLIC_SUPABASE_URL!,
    getSupabaseEnv().NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      async accessToken() {
        return (await auth()).getToken();
      },
    }
  );
}
