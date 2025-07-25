'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      {/* Fixed background video */}
      <video
        src="/assets/starfield.mp4"
        autoPlay
        loop
        muted
        playsInline
        
        className="fixed inset-0 h-full w-full object-cover -z-10"
      />
      {/* Sign-in component with higher z-index */}
      <div className="relative z-10">
        <SignIn
          routing="path"
          path="/sign-in"
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
        />
      </div>
    </div>
  );
}
