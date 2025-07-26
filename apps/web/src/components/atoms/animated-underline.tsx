'use client';

import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
  underlineClassName?: string;
  disabled?: boolean;
  asChild?: boolean;
}

export function AnimatedUnderline({
  children,
  className,
  underlineClassName,
  disabled = false,
  asChild = false,
  ...props
}: AnimatedUnderlineProps & React.HTMLAttributes<HTMLDivElement>) {
  const Component = asChild ? React.Fragment : 'div';

  const content = (
    <div
      className={cn(
        'relative inline-block cursor-pointer group',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      {...props}
    >
      {children}
      {/* Animated underline */}
      <div
        className={cn(
          'absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out',
          'w-0 group-hover:w-full group-focus:w-full group-active:w-full',
          disabled && 'group-hover:w-0 group-focus:w-0 group-active:w-0',
          underlineClassName
        )}
      />
    </div>
  );

  return asChild ? content : <Component>{content}</Component>;
}

// Specialized version for links
interface AnimatedLinkProps extends AnimatedUnderlineProps {
  href: string;
}

export function AnimatedLink({
  href,
  children,
  className,
  underlineClassName,
  disabled = false,
  ...props
}: AnimatedLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'relative inline-block group text-inherit no-underline',
        disabled && 'cursor-not-allowed opacity-50 pointer-events-none',
        className
      )}
      {...props}
    >
      {children}
      {/* Animated underline */}
      <div
        className={cn(
          'absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out',
          'w-0 group-hover:w-full group-focus:w-full group-active:w-full',
          disabled && 'group-hover:w-0 group-focus:w-0 group-active:w-0',
          underlineClassName
        )}
      />
    </a>
  );
}

// Specialized version for buttons
interface AnimatedButtonProps extends AnimatedUnderlineProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function AnimatedButton({
  children,
  className,
  underlineClassName,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}: AnimatedButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative inline-block group bg-transparent border-none p-0 text-inherit cursor-pointer',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      {...props}
    >
      {children}
      {/* Animated underline */}
      <div
        className={cn(
          'absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out',
          'w-0 group-hover:w-full group-focus:w-full group-active:w-full',
          disabled && 'group-hover:w-0 group-focus:w-0 group-active:w-0',
          underlineClassName
        )}
      />
    </button>
  );
}
