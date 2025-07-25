import Link from 'next/link';
import * as motion from 'motion/react-client';
import { Button } from '@/src/components/atoms/button';

export function FinalCtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3, once: true }}
      className="bg-accent text-accent-foreground border-t-4 border-accent-foreground rounded-t-2xl"
    >
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
  );
}
