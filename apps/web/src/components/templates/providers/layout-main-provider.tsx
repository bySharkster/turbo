import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from './theme-provider';
import { shadcn } from '@clerk/themes';
import { NavigationTracker } from '@/src/components/utils/navigation-tracker';
import { Toaster } from '../../atoms/sonner';

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
        {children}
        <Toaster />
      </ThemeProvider>
    </ClerkProvider>
  );
}
