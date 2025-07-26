'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const MAX_HISTORY_ITEMS = 10;

/**
 * Component that tracks navigation history and stores it in sessionStorage
 * This is useful for analytics and debugging, especially for 404 pages
 */
export function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    // Don't track 404 pages in history
    if (pathname === '/404' || pathname === '/not-found') return;

    try {
      // Get existing history from sessionStorage
      const historyData = sessionStorage.getItem('navigationHistory');
      let history: string[] = [];

      if (historyData) {
        try {
          history = JSON.parse(historyData);
          if (!Array.isArray(history)) {
            history = [];
          }
        } catch (e) {
          console.error('Error parsing navigation history:', e);
          history = [];
        }
      }

      // Only add the path if it's different from the last one
      if (history.length === 0 || history[history.length - 1] !== pathname) {
        // Add current path to history
        history.push(pathname);

        // Limit history size
        if (history.length > MAX_HISTORY_ITEMS) {
          history = history.slice(-MAX_HISTORY_ITEMS);
        }

        // Save back to sessionStorage
        sessionStorage.setItem('navigationHistory', JSON.stringify(history));
      }
    } catch (error) {
      // Handle cases where sessionStorage is not available (e.g., incognito mode)
      console.error('Error accessing sessionStorage:', error);
    }
  }, [pathname]);

  // This is a utility component that doesn't render anything
  return null;
}
