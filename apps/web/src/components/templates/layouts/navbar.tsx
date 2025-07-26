'use client';

import React, { useState } from 'react';
import {
  SignedOut,
  SignInButton,
  SignedIn,
  OrganizationSwitcher,
  UserButton,
  SignUpButton,
} from '@clerk/nextjs';
import { Check, Menu, X } from 'lucide-react';
import { FixedCollaboration } from '@/src/components/organisms/indicators/fixed-collaboration';
import { usePathname } from 'next/navigation';
import { AnimatedLink } from '@/src/components/atoms/animated-underline';
import Link from 'next/link';
import { Button } from '@/src/components/atoms/button';
import { cn } from '@/src/lib/utils';

// Navigation links configuration
const navigationLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/features', label: 'Features' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide navbar on auth and dashboard pages
  if (path === '/sign-in' || path === '/dashboard') {
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Collaboration Indicator */}
      <FixedCollaboration />
      
      <nav className="relative w-full bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 border-2 border-black shadow-[2px_2px_0px_black] flex items-center justify-center rounded-md">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <h1 className="text-xl font-black tracking-tight text-foreground">
                  TASKMEIN
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {navigationLinks.map((link) => (
                  <AnimatedLink
                    key={link.href}
                    href={link.href}
                    className="text-foreground/80 hover:text-foreground font-medium text-sm transition-colors"
                    underlineClassName="bg-primary"
                  >
                    {link.label}
                  </AnimatedLink>
                ))}
              </div>

              {/* Auth Section */}
              <div className="flex items-center space-x-4">
                <SignedOut>
                  <SignInButton>
                    <Button variant="ghost" size="sm">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <AnimatedLink
                    href="/dashboard"
                    className="text-foreground font-medium text-sm transition-colors hover:text-primary"
                    underlineClassName="bg-primary"
                  >
                    Dashboard
                  </AnimatedLink>
                  <div className={cn("flex items-center gap-2", path === "/dashboard" ? "" : "hidden")}>
                    <OrganizationSwitcher />
                  </div>
                    <UserButton />
                </SignedIn>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              {/* Navigation Links */}
              <div className="space-y-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block text-foreground/80 hover:text-foreground font-medium text-base py-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-border space-y-3">
                <SignedOut>
                  <div className="space-y-3">
                    <SignInButton>
                      <Button variant="outline" className="w-full" onClick={closeMobileMenu}>
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton>
                      <Button className="w-full bg-primary hover:bg-primary/90" onClick={closeMobileMenu}>
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="space-y-3">
                    <Link
                      href="/dashboard"
                      onClick={closeMobileMenu}
                      className="block text-foreground font-medium text-base py-2 transition-colors hover:text-primary"
                    >
                      Dashboard
                    </Link>
                    <div className="flex items-center justify-between">
                      <div className={cn("flex items-center gap-2", path === "/dashboard" ? "" : "hidden")}>
                        <OrganizationSwitcher />
                      </div>
                      <UserButton />
                    </div>
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
