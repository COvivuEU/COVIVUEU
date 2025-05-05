import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ServiceCarousel from "./ServiceCarousel";

const homestayImages = [
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1630350489488-3d80c86fc909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
];

const HomestaySection = () => {
  return (
    <section id="homestay" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Homestay
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Trải nghiệm lưu trú tại nhà dân với các lựa chọn chỗ ở của chúng tôi
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {[
            {
              title: "Homestay Paris",
              description: "Trải nghiệm cuộc sống thường ngày tại Paris",
              price: "€89/đêm",
              image: homestayImages[0]
            },
            {
              title: "Homestay Lyon",
              description: "Ở cùng gia đình bản địa tại Lyon",
              price: "€79/đêm",
              image: homestayImages[1]
            },
            {
              title: "Homestay Marseille",
              description: "Khám phá văn hóa Marseille",
              price: "€69/đêm",
              image: homestayImages[2]
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

export default HomestaySection;