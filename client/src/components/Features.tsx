import { CloudLightning, LockOpen, LayoutIcon, ClockIcon, MessageSquareIcon, BarChartIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Lightning Fast",
    description: "Experience blazing performance that saves you time and keeps your workflow smooth.",
    icon: CloudLightning
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security that protects your most sensitive data at every level.",
    icon: LockOpen
  },
  {
    title: "Intuitive Interface",
    description: "Clean, modern design that makes complex tasks simple and enjoyable to perform.",
    icon: LayoutIcon
  },
  {
    title: "Time-Saving Automation",
    description: "Automate repetitive tasks and focus on what truly matters to your business.",
    icon: ClockIcon
  },
  {
    title: "Smart Notifications",
    description: "Stay informed with intelligent alerts that keep you in the loop without overwhelming you.",
    icon: MessageSquareIcon
  },
  {
    title: "Powerful Analytics",
    description: "Gain insights with comprehensive data analysis and visualization tools.",
    icon: BarChartIcon
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything you need to boost productivity
          </h2>
          <p className="text-lg text-gray-600">
            Our platform comes packed with powerful features designed to transform your workflow and simplify your life.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary group"
              variants={item}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-5 transition group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
