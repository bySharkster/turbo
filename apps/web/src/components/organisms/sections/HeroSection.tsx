import Link from 'next/link';
import * as motion from 'motion/react-client';
import { Button } from '@/src/components/atoms/button';

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 py-8 min-h-[calc(100vh-8rem)] items-center justify-center max-w-7xl mx-auto overflow-hidden"
    >
      {/* Main Hero Content */}
      <motion.div
        className="flex flex-col gap-8 p-8"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
      >
        <div className="flex flex-col gap-8 py-8 justify-start items-start">
          {/* Animated Title with Letter Reveal */}
          <motion.div className="overflow-hidden">
            <motion.h1
              className="text-7xl font-black leading-none mb-6 lg:mb-8 text-start"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5,
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              >
                Conquer tasks.
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
                className="text-purple-600"
              >
                Together.
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-12 max-w-2xl font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 1.1,
            }}
          >
            Collaborative task lists for remote teams who get things done.
          </motion.p>
        </div>

        {/* Animated CTA Buttons */}
        <motion.div
          className="flex flex-row gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: 1.3,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '6px 6px 0px black',
              x: -2,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-purple-600 text-white border-2 border-black shadow-[4px_4px_0px_black] px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg"
            >
              <Link href="/dashboard">Start Free Trial</Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '6px 6px 0px black',
              x: -2,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className=" border-2 border-black shadow-[4px_4px_0px_black] px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg"
            >
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Checkmarks SVG with Advanced Animations */}
      <motion.div
        className="flex items-center justify-center lg:justify-end w-full lg:w-auto"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.8,
        }}
      >
        <motion.div
          className="relative w-full max-w-sm lg:max-w-lg h-80 lg:h-[450px] overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
          >
            {/* Animated Background Grid */}
            <defs>
              <motion.pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <motion.path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
              </motion.pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid)" />

            {/* Large Central Checkmark with Sophisticated Animation */}
            <motion.g
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.68, -0.55, 0.265, 1.55],
                delay: 1.5,
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
            >
              <motion.rect
                x="160"
                y="160"
                width="80"
                height="80"
                fill="#673ab7"
                stroke="#000"
                strokeWidth="3"
                className="drop-shadow-[4px_4px_0px_black]"
                whileHover={{ fill: '#7c3aed' }}
              />
              <motion.path
                d="M 185 200 L 195 210 L 215 190"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              />
            </motion.g>

            {/* Floating Checkmarks with Orchestrated Animations */}
            <motion.g
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 0.7, 1],
                y: [20, 0, -5, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                delay: 2.2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            >
              <g transform="translate(80, 80)">
                <rect
                  width="24"
                  height="24"
                  fill="#673ab7"
                  stroke="#000"
                  strokeWidth="2"
                />
                <path
                  d="M 6 12 L 10 16 L 18 8"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </motion.g>

            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.8, 1],
                scale: [0, 1.2, 0.9, 1],
                x: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2.5,
                delay: 2.7,
                repeat: Infinity,
                repeatDelay: 4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <g transform="translate(320, 120)">
                <rect
                  width="20"
                  height="20"
                  fill="#673ab7"
                  stroke="#000"
                  strokeWidth="2"
                />
                <path
                  d="M 5 10 L 8 13 L 15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </motion.g>

            <motion.g
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: [0, 1, 0.6, 1],
                x: [-30, 0, 10, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 3,
                delay: 3.2,
                repeat: Infinity,
                repeatDelay: 5,
                ease: 'easeInOut',
              }}
            >
              <g transform="translate(60, 280)">
                <rect
                  width="28"
                  height="28"
                  fill="#673ab7"
                  stroke="#000"
                  strokeWidth="2"
                />
                <path
                  d="M 7 14 L 12 19 L 21 10"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </motion.g>

            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0.7, 1],
                scale: [0.5, 1.3, 0.8, 1],
                y: [0, -10, 5, 0],
              }}
              transition={{
                duration: 2.2,
                delay: 3.7,
                repeat: Infinity,
                repeatDelay: 6,
                ease: [0.68, -0.55, 0.265, 1.55],
              }}
            >
              <g transform="translate(340, 300)">
                <rect
                  width="22"
                  height="22"
                  fill="#673ab7"
                  stroke="#000"
                  strokeWidth="2"
                />
                <path
                  d="M 5 11 L 9 15 L 17 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </motion.g>

            <motion.g
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: [0, 1, 0.8, 1],
                y: [-20, 0, 8, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2.8,
                delay: 4.2,
                repeat: Infinity,
                repeatDelay: 7,
                ease: 'easeInOut',
              }}
            >
              <g transform="translate(140, 50)">
                <rect
                  width="18"
                  height="18"
                  fill="#673ab7"
                  stroke="#000"
                  strokeWidth="2"
                />
                <path
                  d="M 4 9 L 7 12 L 14 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </motion.g>

            <motion.g
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: [0, 1, 0.9, 1],
                scale: [0.3, 1.4, 0.7, 1],
                x: [0, -8, 8, 0],
              }}
              transition={{
                duration: 3.5,
                delay: 4.7,
                repeat: Infinity,
                repeatDelay: 8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <g transform="translate(280, 60)">
                <rect
                  width="16"
                  height="16"
                  fill="#673ab7"
                  stroke="#000"
                  strokeWidth="2"
                />
                <path
                  d="M 3 8 L 6 11 L 13 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </motion.g>
          </motion.svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
