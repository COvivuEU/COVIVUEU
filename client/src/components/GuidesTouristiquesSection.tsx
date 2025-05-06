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
            className="block relative group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624"
                alt="Tour Guide"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Khám phá thêm</span>
              </div>
            </div>
          </a>

          <div className="flex flex-col items-center mt-8">
            <div className="w-16 h-16 mb-6 text-teal-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
                <path d="M6 1v3" />
                <path d="M10 1v3" />
                <path d="M14 1v3" />
                <path d="M8 12h.01" />
                <path d="M12 12h.01" />
                <path d="M16 12h.01" />
              </svg>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
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