import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { FileText, Volume2 } from "lucide-react";

const PartnersSection = () => {
  return (
    <section id="devenir-partenaire" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Espace Partenaires
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-teal-600 mb-4">
              <FileText size={40} />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Consulter nos offres</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-teal-600 mb-4">
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                <path d="M16.5 18H21a1 1 0 001-1v-5a1 1 0 00-1-1h-3l-4-4H8L4 11H3a1 1 0 00-1 1v5a1 1 0 001 1h4.5M5.5 15.5h13M16 17v1.5a3 3 0 01-3 3h-2a3 3 0 01-3-3V17"/>
                <path d="M12.8 11v4.2M9.2 13l7 1.5"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Rejoignez-nous</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-teal-600 mb-4">
              <Volume2 size={40} />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Support & Marketing</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;