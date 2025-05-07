import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const GuidesTouristiquesSection = () => {
  return (
    <section id="guides" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour guide/Buddy Schengen
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Hướng dẫn viên/Bạn đồng hành bản địa người Việt tại các quốc gia Schengen
        </motion.p>

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <a 
            href="https://tubudd.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative group max-w-2xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[3/2]">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
                alt="Tour Guide"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Khám phá thêm</span>
              </div>
            </div>
          </a>

          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tìm kiếm và đặt hướng dẫn viên du lịch địa phương tại Châu Âu. 
              Khám phá những trải nghiệm độc đáo và cá nhân hóa với các hướng dẫn viên chuyên nghiệp của chúng tôi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuidesTouristiquesSection;