import Link from 'next/link';
import { Users, Shield, Layers, Zap, Globe } from 'lucide-react';
import * as motion from 'motion/react-client';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/src/components/atoms/card';
import { Button } from '@/src/components/atoms/button';

export default async function Home() {
  return (
    <div className="min-h-screen  font-mono relative overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
            delay: 0.2
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
                  delay: 0.5
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                >
                  Conquer tasks.
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
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
                ease: "easeOut",
                delay: 1.1
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
              ease: "easeOut",
              delay: 1.3
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "6px 6px 0px black",
                x: -2,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="bg-purple-600 text-white border-2 border-black shadow-[4px_4px_0px_black] px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg">
                <Link href="/dashboard">
                  Start Free Trial
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "6px 6px 0px black",
                x: -2,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild variant="outline" size="lg" className=" border-2 border-black shadow-[4px_4px_0px_black] px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg">
                <Link href="/pricing">
                  See Pricing
                </Link>
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
            delay: 0.8
          }}
        >
          <motion.div 
            className="relative w-full max-w-sm lg:max-w-lg h-80 lg:h-[450px] overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
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
                  delay: 1.5
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
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
                  whileHover={{ fill: "#7c3aed" }}
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
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: 2.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
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
                  x: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  delay: 2.7,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: [0.25, 0.46, 0.45, 0.94]
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
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ 
                  duration: 3,
                  delay: 3.2,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
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
                  y: [0, -10, 5, 0]
                }}
                transition={{ 
                  duration: 2.2,
                  delay: 3.7,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: [0.68, -0.55, 0.265, 1.55]
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
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 2.8,
                  delay: 4.2,
                  repeat: Infinity,
                  repeatDelay: 7,
                  ease: "easeInOut"
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
                  x: [0, -8, 8, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  delay: 4.7,
                  repeat: Infinity,
                  repeatDelay: 8,
                  ease: [0.25, 0.46, 0.45, 0.94]
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

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3, once: true }}
        className="grid grid-cols-12 gap-4 p-8 bg-transparent border-t-4 border-black">
        
        <motion.div 
          className="col-span-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-black mb-4">
            Built for teams that ship
          </h3>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="hover:bg-card/10 transition-all duration-150">
            <CardContent className="pt-6">
              <Zap className="w-8 h-8 mb-4" strokeWidth={3} />
              <CardTitle className="font-black text-lg mb-2">Real-time sync</CardTitle>
              <CardDescription className="text-sm text-foreground">
                Changes appear instantly across all devices
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="hover:bg-card/10 transition-all duration-150">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 mb-4" strokeWidth={3} />
              <CardTitle className="font-black text-lg mb-2">Multi-user boards</CardTitle>
              <CardDescription className="text-sm text-foreground">
                Collaborate seamlessly with your entire team
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Card className="hover:bg-card/10 transition-all duration-150">
            <CardContent className="pt-6">
              <Shield className="w-8 h-8 mb-4" strokeWidth={3} />
              <CardTitle className="font-black text-lg mb-2">RLS-level security</CardTitle>
              <CardDescription className="text-sm text-foreground">Enterprise-grade row-level security</CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <Card className="hover:bg-card/10 transition-all duration-150">
            <CardContent className="pt-6">
              <Layers className="w-8 h-8 mb-4" strokeWidth={3} />
              <CardTitle className="font-black text-lg mb-2">Custom roles</CardTitle>
              <CardDescription className="text-sm text-foreground">
                Fine-grained permissions and access control
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <Card className="hover:bg-card/10 transition-all duration-150">
            <CardContent className="pt-6">
              <Globe className="w-8 h-8 mb-4" strokeWidth={3} />
              <CardTitle className="font-black text-lg mb-2">Global access</CardTitle>
              <CardDescription className="text-sm text-foreground">Work from anywhere, anytime</CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-purple-600 text-white hover:bg-purple-800 hover:text-white transition-all duration-150">
            <CardContent className="pt-6">
              <div className="w-8 h-8 bg-white text-purple-600  flex items-center justify-center mb-4">
                <span className="font-black text-lg">∞</span>
              </div>
              <CardTitle className="font-black text-lg mb-2 text-white">Unlimited tasks</CardTitle>
              <CardDescription className="text-sm text-white/90">No limits on your productivity</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3, once: true }}
        className="grid grid-cols-12 gap-4 p-8 bg-transparent">
        
        <motion.div 
          className="col-span-12 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-black mb-4">Pricing</h3>
          <p className="text-xl">Choose your plan. Scale as you grow.</p>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full">
            <CardContent className="p-8">
              <CardTitle className="text-2xl font-black mb-4">Starter</CardTitle>
              <div className="text-4xl font-black mb-2">$8</div>
              <div className="text-sm mb-6">per user</div>
              <ul className="space-y-2 text-sm mb-8">
                <li>• Up to 5 users</li>
                <li>• Basic task management</li>
                <li>• Email support</li>
              </ul>
              <button className="w-full bg-gray-800 text-white border-2 border-black shadow-[2px_2px_0px_black] py-3 font-black hover:shadow-[4px_4px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150">
                Get Started
              </button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full">
            <CardContent className="p-8">
              <CardTitle className="text-2xl font-black mb-4">Pro</CardTitle>
              <div className="text-4xl font-black mb-2">$15</div>
              <div className="text-sm mb-6">per user</div>
              <ul className="space-y-2 text-sm mb-8">
                <li>• Up to 25 users</li>
                <li>• Advanced features</li>
                <li>• Priority support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white border-2 border-black shadow-[2px_2px_0px_black] py-3 font-black hover:shadow-[4px_4px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150">
                Get Started
              </button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full">
            <CardContent className="p-8">
              <CardTitle className="text-2xl font-black mb-4">Team</CardTitle>
              <div className="text-4xl font-black mb-2">$29</div>
              <div className="text-sm mb-6">per user</div>
              <ul className="space-y-2 text-sm mb-8">
                <li>• Unlimited users</li>
                <li>• Enterprise features</li>
                <li>• 24/7 support</li>
              </ul>
              <button className="w-full bg-gray-800 text-white border-2 border-black shadow-[2px_2px_0px_black] py-3 font-black hover:shadow-[4px_4px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150">
                Get Started
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Testimonial */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3, once: true }}
        className="grid grid-cols-12 gap-4 p-8 bg-transparent border-t-4 border-black">
        
        <motion.div 
          className="col-span-12 lg:col-span-8 lg:col-start-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-black shadow-[4px_4px_0px_black]">
            <CardContent className="p-12 text-center">
              <blockquote className="text-2xl md:text-3xl font-black leading-tight mb-6">
                &ldquo;With its simplicity, we saw a surge in team
                productivity.&rdquo;
              </blockquote>
              <cite className="text-sm font-mono">
                — Fernando Aponte, Engineering Lead
              </cite>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Final CTA - Dark Mode */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3, once: true }}
        className="bg-accent text-accent-foreground border-t-4 border-accent-foreground rounded-t-2xl">
        
        <motion.div 
          className="flex flex-col items-center w-full justify-center gap-8 p-8 py-24 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center w-full justify-center text-center gap-8">
            <div className="flex flex-col items-center w-full justify-center text-center gap-2">
              <h3 className="text-5xl md:text-6xl font-black">
                Ready to ship faster?
              </h3>
            <p className="text-xl mx-auto w-full">
              Join thousands of teams already using TaskMeIn to get things done.
            </p>
            </div>
            <Button asChild variant="default" size="lg">
              <Link
                href="/dashboard"
                className="inline-block bg-accent/80 text-accent-foreground border-2 border-accent-foreground shadow-[4px_4px_0px_white] px-12 py-6 font-black text-xl hover:shadow-[6px_6px_0px_white] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
              >
                Start Free Trial
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
