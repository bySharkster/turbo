'use client';
import Link from 'next/link';
import { Button } from '@/src/components/atoms/button';
import { Card, CardContent, CardFooter } from '@/src/components/atoms/card';
import { ArrowLeft, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import posthog from 'posthog-js';
import { usePathname } from 'next/navigation';

interface BrowserData {
  referrer: string;
  userAgent: string;
  path: string;
  previousPages: string[];
  timestamp: string;
  screenSize: {
    width: number;
    height: number;
  };
}

export default function NotFound() {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [browserData, setBrowserData] = useState<BrowserData | null>(null);

  useEffect(() => {
    // Simple CSS-based animation is more reliable than JS animation libraries
    // Animation is handled by CSS classes
    if (cardRef.current) {
      cardRef.current.classList.add('animate-in');
    }

    if (iconContainerRef.current) {
      iconContainerRef.current.classList.add('animate-pulse');
    }
  }, []);

  useEffect(() => {
    // Collect browser data
    const data: BrowserData = {
      referrer: document.referrer || 'Direct navigation',
      userAgent: navigator.userAgent,
      path: pathname,
      previousPages: getPreviousPages(),
      timestamp: new Date().toISOString(),
      screenSize: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };

    setBrowserData(data);

    // Send to analytics
    posthog.captureException('not-found', {
      properties: data,
    });

    // Log for debugging
    console.log('404 Page Not Found - Browser Data:', data);
  }, [pathname]);

  // Helper function to get previous pages from history API if available
  const getPreviousPages = (): string[] => {
    const pages: string[] = [];

    // Try to get history from sessionStorage
    try {
      const historyData = sessionStorage.getItem('navigationHistory');
      if (historyData) {
        const history = JSON.parse(historyData);
        if (Array.isArray(history)) {
          return history.slice(-5); // Return last 5 pages
        }
      }
    } catch (error) {
      console.error('Error accessing session storage:', error);
    }

    return pages;
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      role="main"
    >
      <div
        className="w-full max-w-md opacity-0 translate-y-4 transition-all duration-500 ease-out"
        ref={cardRef}
      >
        <Card>
          <CardContent className="pt-6 pb-2 flex flex-col items-center text-center space-y-4">
            <div
              ref={iconContainerRef}
              className="relative w-24 h-24 mb-2 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full" />
              <Search className="w-12 h-12 text-primary" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-bold text-foreground font-['Bevellier']">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-foreground font-['Bevellier']">
              Page Not Found
            </h2>
            <p className="text-muted-foreground font-['Satoshi']">
              We couldn&apos;t find the page you&apos;re looking for.
            </p>

            {/* Display some of the browser data we collected */}
            {browserData && (
              <div className="w-full mt-4 text-left text-xs text-muted-foreground border-t pt-4">
                <p className="mb-1">
                  <span className="font-semibold">Requested URL:</span>{' '}
                  {browserData.path}
                </p>
                {browserData.referrer &&
                  browserData.referrer !== 'Direct navigation' && (
                    <p className="mb-1">
                      <span className="font-semibold">Referred from:</span>{' '}
                      {browserData.referrer}
                    </p>
                  )}
                {browserData.previousPages.length > 0 && (
                  <details className="mt-2">
                    <summary className="cursor-pointer font-semibold">
                      Navigation history
                    </summary>
                    <ul className="mt-1 pl-4 list-disc">
                      {browserData.previousPages.map((page, i) => (
                        <li key={i}>{page}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 pt-0">
            <Button asChild className="w-full" variant="default">
              <Link href="/" className="flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go back home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
