'use client';

import { useEffect } from 'react';
import CardComponent from '@/src/components/molecules/cards/error';
import Image from 'next/image';
import { Button } from '@/src/components/atoms/button';
import Link from 'next/link';
import posthog from 'posthog-js';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.captureException(error);
    }
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center w-full max-w-2xl h-screen mx-auto">
          <CardComponent
            cardTitle="OOPS!"
            cardDescription="Lost in space."
            cardContent={
              <div className="flex flex-col items-center justify-center gap-2">
                <Image
                  src="/assets/error_page.png"
                  alt="Logo"
                  width={500}
                  height={500}
                />
              </div>
            }
            cardFooter={
              <div className="flex flex-row items-center justify-center gap-2">
                <Button asChild variant="secondary">
                  <Link href="/">Go to home</Link>
                </Button>
              </div>
            }
          />
        </div>
      </body>
    </html>
  );
}
