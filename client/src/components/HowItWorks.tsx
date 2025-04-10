import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const steps = [
  {
    title: "Sign Up",
    description: "Create your account in seconds and start exploring the platform.",
    number: 1,
    alignment: "left"
  },
  {
    title: "Customize Your Workspace",
    description: "Tailor the platform to your specific needs with our flexible configuration options.",
    number: 2,
    alignment: "right"
  },
  {
    title: "Import Your Data",
    description: "Seamlessly bring your existing information into the platform with a few clicks.",
    number: 3,
    alignment: "left"
  },
  {
    title: "Experience the Difference",
    description: "Watch your productivity soar as our platform streamlines your workflow and automates repetitive tasks.",
    number: 4,
    alignment: "right"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple steps to transform your workflow
          </h2>
          <p className="text-lg text-gray-600">
            Getting started is easy. Our intuitive platform guides you through each step of the process.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-[19px] top-0 h-full w-[2px] bg-gray-200 md:left-1/2 md:-ml-[1px]"></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="mb-12 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`flex-1 order-2 ${step.alignment === 'left' ? 'md:order-1 md:text-right md:pr-12' : 'md:order-1 md:text-right md:pr-12'} mt-6 md:mt-0`}>
                    {step.alignment === 'left' ? (
                      <>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </>
                    ) : (
                      <div className="hidden md:block"></div>
                    )}
                  </div>
                  
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white order-1 md:order-2">
                    <span className="font-semibold">{step.number}</span>
                  </div>
                  
                  <div className={`flex-1 order-3 ${step.alignment === 'right' ? 'md:pl-12' : 'md:pl-12'} mt-6 md:mt-0`}>
                    {step.alignment === 'right' ? (
                      <>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </>
                    ) : (
                      <div className="hidden md:block"></div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#waitlist">
              <Button>Join the Waitlist</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
