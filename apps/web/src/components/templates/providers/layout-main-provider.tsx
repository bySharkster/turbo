import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from './theme-provider';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { Check } from 'lucide-react';
import { shadcn } from '@clerk/themes';
import { NavigationTracker } from '@/src/components/utils/navigation-tracker';
import { FixedCollaboration } from '../../organisms/indicators/fixed-collaboration';

export function LayoutMainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <ClerkProvider
    appearance={{ baseTheme: shadcn }}>
      {/* Track navigation history for analytics and 404 page */}
      <NavigationTracker />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <header className="flex flex-row items-center justify-between p-4 gap-4 h-16 ">
          <nav className="flex flex-row items-center gap-4">
            {/* Fixed Collaboration Indicator */}
            <FixedCollaboration />
            {/* Logo/Brand */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-background border-2 border-black shadow-[4px_4px_0px_black] p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-600 border-2 border-black shadow-[2px_2px_0px_black] flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" strokeWidth={3} />
                  </div>
                  <h1 className="text-2xl font-black tracking-tight">
                    TASKMEIN
                  </h1>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex flex-row items-center gap-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
