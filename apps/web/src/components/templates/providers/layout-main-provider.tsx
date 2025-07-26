import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from './theme-provider';
import { shadcn } from '@clerk/themes';
import { NavigationTracker } from '@/src/components/utils/navigation-tracker';
import { Navbar } from '../layouts/navbar';

export function LayoutMainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: shadcn }}>
      {/* Track navigation history for analytics and 404 page */}
      <NavigationTracker />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <header className="flex flex-row items-center justify-between p-4 gap-4 h-16 ">
          <Navbar />
        </header>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
