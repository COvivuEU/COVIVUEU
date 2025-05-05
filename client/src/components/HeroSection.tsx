import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" 
          alt="European cityscape" 
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-[500px] flex flex-col justify-center">
        <motion.div 
          className="max-w-3xl text-white"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            Khám phá Châu Âu cùng COvivu
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
