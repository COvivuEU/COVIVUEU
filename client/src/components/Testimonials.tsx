import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "This platform has completely transformed how I work. I've saved countless hours on tasks that used to take days to complete.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    avatarInitial: "SJ"
  },
  {
    quote: "The analytics feature is a game-changer. I can now easily track our performance and make data-driven decisions.",
    name: "Michael Chen",
    role: "Product Manager",
    avatarInitial: "MC"
  },
  {
    quote: "The automation features have reduced our manual work by 70%. This is exactly what our team needed to scale our operations.",
    name: "Alexandra Diaz",
    role: "Operations Manager",
    avatarInitial: "AD"
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

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What our beta testers are saying
          </h2>
          <p className="text-lg text-gray-600">
            Our early users are already experiencing the benefits of our platform.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
              variants={item}
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarFallback>{testimonial.avatarInitial}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
