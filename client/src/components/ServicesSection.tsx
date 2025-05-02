import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { FileText, Plane, MapPin, Home, User, Smartphone, UtensilsCrossed } from "lucide-react";

const services = [
  {
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-teal-600">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="12" y1="4" x2="12" y2="20" />
              <line x1="4" y1="12" x2="20" y2="12" />
            </svg>
          </div>,
    title: "Visa"
  },
  {
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
            <FileText className="h-6 w-6 text-teal-600" />
          </div>,
    //title: "Assurance Voyage"
    title: "Bảo Hiểm"
  },
  {
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
            <Plane className="h-6 w-6 text-teal-600" />
          </div>,
    title: "Vé máy bay"
  },
  {
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
            <MapPin className="h-6 w-6 text-teal-600" />
          </div>,
    title: "Tours"
  },
  {
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
            <Home className="h-6 w-6 text-teal-600" />
          </div>,
    title: "Homestay"
  },
  {
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
            <User className="h-6 w-6 text-teal-600" />
          </div>,
    title: "Hướng dẫn viên"
  },
  {
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-teal-600">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          </div>,
    title: "eSIM du lịch"
  },
  {
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
            <UtensilsCrossed className="h-6 w-6 text-teal-600" />
          </div>,
    title: "Nhà hàng"
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
          Dịch vụ
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