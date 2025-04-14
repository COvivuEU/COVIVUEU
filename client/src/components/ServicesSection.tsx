import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { FileText, Plane, MapPin, Home, User, Calendar, Smartphone, UtensilsCrossed } from "lucide-react";

const services = [
  {
    icon: <div className="flex justify-center items-center w-12 h-12 border-2 border-teal-600 rounded-md p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-teal-600">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M7 10h3V7" />
              <path d="M14 10h3V7" />
              <path d="M7 17h3v-3" />
              <path d="M14 17h3v-3" />
            </svg>
          </div>,
    title: "Visa"
  },
  {
    icon: <FileText className="h-10 w-10 text-teal-600" />,
    title: "Assurance Voyage"
  },
  {
    icon: <Plane className="h-10 w-10 text-teal-600" />,
    title: "Billets d'Avion"
  },
  {
    icon: <MapPin className="h-10 w-10 text-teal-600" />,
    title: "Tours"
  },
  {
    icon: <Home className="h-10 w-10 text-teal-600" />,
    title: "Homestay"
  },
  {
    icon: <User className="h-10 w-10 text-teal-600" />,
    title: "Guides Touristiques"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-teal-600" />,
    title: "Cartes/SIM"
  },
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-teal-600" />,
    title: "Restaurants"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group flex flex-col items-center justify-center border border-gray-200 rounded-md p-6 hover:shadow-md transition-shadow"
              variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
            >
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-center text-gray-900 font-medium">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;