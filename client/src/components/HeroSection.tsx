import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <span className="block">Introducing</span>
            <span className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">ProductX</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-slate-600 max-w-xl mx-auto"
            variants={fadeIn("up", "tween", 0.4, 1)}
          >
            The next generation productivity tool that helps you achieve more with less effort. Streamline your workflow and boost efficiency.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={fadeIn("up", "tween", 0.6, 1)}
          >
            <a 
              href="#waitlist" 
              className="rounded-md bg-primary px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Join Waitlist
            </a>
            <a 
              href="#features" 
              className="text-md font-semibold leading-6 text-slate-900 hover:text-primary transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 sm:mt-24 relative max-w-4xl mx-auto"
          variants={fadeIn("up", "tween", 0.8, 1)}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="relative rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="ProductX dashboard preview" 
              className="w-full h-auto rounded-lg"
              width="1170"
              height="658"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-64 w-64 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 h-64 w-64 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
