import { NextResponse, type NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { updateSession } from '@/src/utils/supabase/middleware';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, request: NextRequest) => {
  const { userId } = await auth();
  const { pathname } = request.nextUrl;

  // If user is authenticated and trying to access landing/auth pages, redirect to dashboard
  if (userId && pathname.startsWith('/sign-in')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If user is not authenticated and trying to access protected routes, redirect to sign-in
  if (!userId && isProtectedRoute(request)) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // For authenticated users accessing allowed routes, update session
  if (userId) {
    return await updateSession(request);
  }

  // For non-authenticated users accessing public routes, just continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
