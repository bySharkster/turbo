"use client"
import Link from 'next/link';
import { Button } from '@/src/components/atoms/button';
import { Card, CardContent, CardFooter } from '@/src/components/atoms/card';
import { ArrowLeft, Search } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function NotFound() {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);
  
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
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4" role="main">
      <div className="w-full max-w-md  translate-y-4 transition-all duration-500 ease-out" ref={cardRef}>
        <Card className="border shadow-lg overflow-hidden">
          <CardContent className="pt-6 pb-2 flex flex-col items-center text-center space-y-4">
            <div 
              ref={iconContainerRef}
              className="relative w-24 h-24 mb-2 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full" />
              <Search className="w-12 h-12 text-primary" strokeWidth={1.5} />
            </div>
            
            <h1 className="text-4xl font-bold text-foreground font-[&apos;Bevellier&apos;]">404</h1>
            <h2 className="text-2xl font-semibold text-foreground font-[&apos;Bevellier&apos;]">Page Not Found</h2>
            
            <p className="text-muted-foreground font-[&apos;Satoshi&apos;]">
              We couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
            </p>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-3 pt-2 pb-6">
            <Button 
              asChild 
              className="w-full" 
              variant="default"
            >
              <Link href="/" className="flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Return to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}