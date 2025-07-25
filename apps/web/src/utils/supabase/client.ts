import { createBrowserClient } from '@supabase/ssr';
import { getSupabaseEnv } from '@/src/lib/env';

const supabaseUrl = getSupabaseEnv().NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = getSupabaseEnv().NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = () => createBrowserClient(supabaseUrl, supabaseKey);
