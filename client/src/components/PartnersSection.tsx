import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { HandshakeIcon, HeartHandshakeIcon, MegaphoneIcon } from "lucide-react";

const PartnersSection = () => {
  return (
    <section id="devenir-partenaire" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-6 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          KHU VỰC ĐỐI TÁC
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
              <HandshakeIcon size={40} />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Hợp tác cùng phát triển</h3>
            <p className="text-gray-600 text-center text-sm">Mở rộng kinh doanh của bạn với đối tác tin cậy</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-teal-600 mb-4">
              <HeartHandshakeIcon size={40} />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Quyền lợi hấp dẫn</h3>
            <p className="text-gray-600 text-center text-sm">Tận hưởng các ưu đãi và hỗ trợ đặc biệt</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-teal-600 mb-4">
              <MegaphoneIcon size={40} />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Quảng bá thương hiệu</h3>
            <p className="text-gray-600 text-center text-sm">Tiếp cận khách hàng tiềm năng qua nền tảng của chúng tôi</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;