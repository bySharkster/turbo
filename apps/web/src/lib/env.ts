export function getAuthEnv() {
  if (process.env.NODE_ENV === 'development') {
    console.log('development');
    if (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === undefined) {
      throw new Error('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not defined');
    }
    if (process.env.CLERK_SECRET_KEY === undefined) {
      throw new Error('CLERK_SECRET_KEY is not defined');
    }
    return {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    };
  }
  console.log('production');
  return {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  };
}

export function getSupabaseEnv() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl === undefined) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined');
  }
  if (supabaseKey === undefined) {
    throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined');
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('development');
    if (supabaseUrl === undefined) {
      throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined');
    }
    if (supabaseKey === undefined) {
      throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined');
    }
    return {
      NEXT_PUBLIC_SUPABASE_URL: supabaseUrl,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: supabaseKey,
    };
  }
  console.log('production');
  return {
    NEXT_PUBLIC_SUPABASE_URL: supabaseUrl,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: supabaseKey,
  };
}

export function getPosthogEnv() {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  if (posthogKey === undefined) {
    throw new Error('NEXT_PUBLIC_POSTHOG_KEY is not defined');
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('development');
    if (posthogKey === undefined) {
      throw new Error('NEXT_PUBLIC_POSTHOG_KEY is not defined');
    }
    return {
      NEXT_PUBLIC_POSTHOG_KEY: posthogKey,
    };
  }
  console.log('production');
  return {
    NEXT_PUBLIC_POSTHOG_KEY: posthogKey,
  };
}
