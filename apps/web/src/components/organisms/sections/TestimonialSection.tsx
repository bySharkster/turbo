import * as motion from 'motion/react-client';
import {
  Card,
  CardContent,
} from '@/src/components/atoms/card';

export function TestimonialSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3, once: true }}
      className="grid grid-cols-12 gap-4 p-8 bg-transparent border-t-4 border-black"
    >
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
  );
}
