import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ServiceCarousel from "./ServiceCarousel";

const restaurantsImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
];

const RestaurantsSection = () => {
  return (
    <section id="restaurants" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Nhà Hàng
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Khám phá các nhà hàng đối tác để thưởng thức ẩm thực châu Âu theo sở thích của bạn
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {[
            {
              title: "Nhà Hàng Le Petit Paris",
              description: "Thưởng thức ẩm thực Pháp đẳng cấp",
              price: "€€€",
              image: restaurantsImages[0]
            },
            {
              title: "Bistrot Chez Marie",
              description: "Hương vị truyền thống Pháp",
              price: "€€",
              image: restaurantsImages[1]
            },
            {
              title: "Le Café des Arts",
              description: "Không gian nghệ thuật và ẩm thực",
              price: "€€",
              image: restaurantsImages[2]
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

export default RestaurantsSection;