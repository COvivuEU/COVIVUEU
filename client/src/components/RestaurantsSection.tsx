import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { UtensilsCrossed, BowlFood } from "lucide-react";

const RestaurantsSection = () => {
  return (
    <section id="restaurants" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-6"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          NHÀ HÀNG SCHENGEN
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-teal-600 mb-4">
              <UtensilsCrossed size={40} />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Đồ Âu - Đặc sản địa phương</h3>
            <p className="text-gray-600 text-center text-sm">Khám phá ẩm thực châu Âu đích thực và đặc sản địa phương</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-teal-600 mb-4">
              <BowlFood size={40} />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Đồ Á, Đồ Việt Nam</h3>
            <p className="text-gray-600 text-center text-sm">Thưởng thức hương vị quê nhà tại châu Âu</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantsSection;