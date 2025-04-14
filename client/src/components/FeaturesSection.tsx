import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { DollarSign, BookOpen, Users, Monitor, Flag, Shield } from "lucide-react";

const features = [
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "Smart Automation",
    description: "Automate repetitive tasks and focus on what truly matters. Save hours every week."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights into your productivity patterns and optimize your workflow."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team in real-time. Share tasks, projects, and ideas."
  },
  {
    icon: <Monitor className="h-6 w-6 text-primary" />,
    title: "Cross-Platform Access",
    description: "Access your data from any device. Work from anywhere, anytime without missing a beat."
  },
  {
    icon: <Flag className="h-6 w-6 text-primary" />,
    title: "Customizable Workflows",
    description: "Create workflows that match your unique needs. Adapt the tool to your process, not vice versa."
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with end-to-end encryption and advanced security protocols."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to boost your productivity and streamline your workflow.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              variants={fadeIn("up", "tween", 0.2 + (index * 0.1), 1)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
