import * as motion from 'motion/react-client';
import {
  Card,
  CardContent,
  CardTitle,
} from '@/src/components/atoms/card';

export function PricingSection() {
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
          Simple pricing
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          Choose the plan that works best for your team.
        </p>
      </motion.div>

      <motion.div 
        className="col-span-12 md:col-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full">
          <CardContent className="p-8">
            <CardTitle className="text-2xl font-black mb-4">Free</CardTitle>
            <div className="text-4xl font-black mb-2">$0</div>
            <div className="text-sm mb-6">forever</div>
            <ul className="space-y-2 text-sm mb-8">
              <li>• Up to 3 users</li>
              <li>• Basic features</li>
              <li>• Community support</li>
            </ul>
            <button className="w-full bg-white text-black border-2 border-black shadow-[2px_2px_0px_black] py-3 font-black hover:shadow-[4px_4px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150">
              Get Started
            </button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="col-span-12 md:col-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="border-2 border-black shadow-[4px_4px_0px_black] h-full">
          <CardContent className="p-8">
            <CardTitle className="text-2xl font-black mb-4">Pro</CardTitle>
            <div className="text-4xl font-black mb-2">$12</div>
            <div className="text-sm mb-6">per user</div>
            <ul className="space-y-2 text-sm mb-8">
              <li>• Unlimited users</li>
              <li>• Advanced features</li>
              <li>• Priority support</li>
            </ul>
            <button className="w-full bg-purple-600 text-white border-2 border-black shadow-[2px_2px_0px_black] py-3 font-black hover:shadow-[4px_4px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150">
              Start Trial
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
  );
}
