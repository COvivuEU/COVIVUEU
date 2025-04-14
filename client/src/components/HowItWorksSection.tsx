import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description: "Join our waitlist to be among the first to experience ProductX. We'll notify you as soon as it's available."
  },
  {
    number: 2,
    title: "Customize Your Experience",
    description: "Once you gain access, set up your workspace according to your specific needs and preferences."
  },
  {
    number: 3,
    title: "Boost Your Productivity",
    description: "Experience the full power of ProductX and watch your productivity soar. Collaborate, automate, and achieve more."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How ProductX Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Simple, intuitive, and designed for maximum productivity.
          </p>
        </motion.div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          
          <div className="relative flex justify-center">
            <span className="bg-slate-50 px-4 text-sm text-slate-500">
              Follow these simple steps
            </span>
          </div>
        </div>
        
        <motion.div 
          className="mt-16 grid gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100"
              variants={fadeIn("up", "tween", 0.2 + (index * 0.2), 1)}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
