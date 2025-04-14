import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const VisaSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Visa
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Facilitez vos démarches avec nos partenaires visa.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" 
              alt="Airplane" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
              alt="Mobile app" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
              alt="Airport" 
              className="w-full h-48 object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a 
            href="#services" 
            className="inline-block rounded-md bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-teal-700 transition-colors"
          >
            Découvrez Nos Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaSection;