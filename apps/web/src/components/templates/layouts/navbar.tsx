'use client';
import React from 'react';
import {
  SignedOut,
  SignInButton,
  SignedIn,
  OrganizationSwitcher,
  UserButton,
  SignUpButton,
} from '@clerk/nextjs';
import { Check } from 'lucide-react';
import { FixedCollaboration } from '@/src/components/organisms/indicators/fixed-collaboration';
import { cn } from '@/src/lib/utils';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex flex-row items-start justify-start gap-4 w-full">
      {/* Fixed Collaboration Indicator */}
      <FixedCollaboration />
      {/* Logo/Brand */}
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center">
          <div className="bg-background border-2 border-black shadow-[4px_4px_0px_black] p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-600 border-2 border-black shadow-[2px_2px_0px_black] flex items-center justify-center">
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <h1 className="text-2xl font-black tracking-tight hidden md:block">
                TASKMEIN
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <SignedOut>
            <div className="hidden md:block">
              <SignInButton />
            </div>
            <SignUpButton>
              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up Now
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <div className={cn()}>
              <OrganizationSwitcher />
            </div>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
