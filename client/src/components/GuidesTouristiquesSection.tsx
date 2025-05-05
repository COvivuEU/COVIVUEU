import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ServiceCarousel from "./ServiceCarousel";

const guidesImages = [
  "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  "https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  "https://images.unsplash.com/photo-1524008279394-3aed4643b30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
];

const GuidesTouristiquesSection = () => {
  return (
    <section id="guides-touristiques" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Hướng Dẫn Viên Du Lịch
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tận hưởng chuyến tham quan với hướng dẫn viên địa phương của chúng tôi
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {[
            {
              title: "Tour Paris",
              description: "Khám phá thành phố ánh sáng với HDV chuyên nghiệp",
              price: "€149/người",
              image: guidesImages[0]
            },
            {
              title: "Tour Rome",
              description: "Tham quan các di tích lịch sử La Mã cổ đại",
              price: "€129/người",
              image: guidesImages[1]
            },
            {
              title: "Tour Barcelona",
              description: "Khám phá kiến trúc và ẩm thực Barcelona",
              price: "€139/người",
              image: guidesImages[2]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-teal-600 mb-4">{service.price}</p>
                <a 
                  href="#services"
                  className="block text-center bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors"
                >
                  Xem Thêm Dịch Vụ
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GuidesTouristiquesSection;