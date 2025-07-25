import { Users, Shield, Layers, Zap, Globe } from 'lucide-react';
import * as motion from 'motion/react-client';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/src/components/atoms/card';

export function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3, once: true }}
      className="grid grid-cols-12 gap-4 p-8 bg-transparent border-t-4 border-black"
    >
      <motion.div 
        className="col-span-12 text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Features that work
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          Everything you need to manage tasks and collaborate with your team.
        </p>
      </motion.div>

      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full hover:bg-muted/50 transition-colors">
          <CardContent className="p-8">
            <div className="mb-6">
              <Users className="w-12 h-12 stroke-2" />
            </div>
            <CardTitle className="text-2xl font-black mb-4">Team Collaboration</CardTitle>
            <CardDescription className="text-base">
              Work together seamlessly with real-time updates, comments, and shared workspaces.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full hover:bg-muted/50 transition-colors">
          <CardContent className="p-8">
            <div className="mb-6">
              <Shield className="w-12 h-12 stroke-2" />
            </div>
            <CardTitle className="text-2xl font-black mb-4">Secure & Private</CardTitle>
            <CardDescription className="text-base">
              Enterprise-grade security with end-to-end encryption and compliance standards.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full hover:bg-muted/50 transition-colors">
          <CardContent className="p-8">
            <div className="mb-6">
              <Layers className="w-12 h-12 stroke-2" />
            </div>
            <CardTitle className="text-2xl font-black mb-4">Project Organization</CardTitle>
            <CardDescription className="text-base">
              Organize tasks with projects, labels, and custom workflows that fit your team.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full hover:bg-muted/50 transition-colors">
          <CardContent className="p-8">
            <div className="mb-6">
              <Zap className="w-12 h-12 stroke-2" />
            </div>
            <CardTitle className="text-2xl font-black mb-4">Lightning Fast</CardTitle>
            <CardDescription className="text-base">
              Built for speed with instant sync, offline support, and blazing fast performance.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full hover:bg-muted/50 transition-colors">
          <CardContent className="p-8">
            <div className="mb-6">
              <Globe className="w-12 h-12 stroke-2" />
            </div>
            <CardTitle className="text-2xl font-black mb-4">Global Access</CardTitle>
            <CardDescription className="text-base">
              Access your tasks anywhere with cross-platform apps and web interface.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full hover:bg-muted/50 transition-colors">
          <CardContent className="p-8">
            <div className="mb-6">
              <Users className="w-12 h-12 stroke-2" />
            </div>
            <CardTitle className="text-2xl font-black mb-4">Smart Automation</CardTitle>
            <CardDescription className="text-base">
              Automate repetitive tasks with smart rules, templates, and workflow automation.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
