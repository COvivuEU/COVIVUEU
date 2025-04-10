import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "When will the product be launched?",
    answer: "We're planning to launch in Q1 2023. Join our waitlist to be the first to know when we go live and to receive exclusive early access."
  },
  {
    question: "Will there be a free trial?",
    answer: "Yes, we'll offer a 14-day free trial for all new users. No credit card required to start your trial."
  },
  {
    question: "What platforms will be supported?",
    answer: "Our platform will be available as a web application at launch, with iOS and Android mobile apps following shortly after."
  },
  {
    question: "Will there be an API available?",
    answer: "Yes, we'll provide a comprehensive API for developers to integrate with our platform. Documentation will be available at launch."
  },
  {
    question: "What kind of support will be available?",
    answer: "All users will have access to our knowledge base, community forums, and email support. Premium plans will include priority support with faster response times."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="w-full text-left px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-100 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white border border-gray-100 border-t-0 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
