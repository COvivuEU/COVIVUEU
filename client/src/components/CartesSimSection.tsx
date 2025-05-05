import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ServiceCarousel from "./ServiceCarousel";

const cartesSimImages = [
  "https://images.unsplash.com/photo-1622612912568-11c4a18996ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1601972602288-3be527e7b5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  "https://images.unsplash.com/photo-1544866737-34f234586893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1598114615844-65f80204a705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1598327105854-c8674faddf79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
];

const CartesSimSection = () => {
  return (
    <section id="cartes-sim" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Thẻ SIM
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Luôn kết nối với thẻ SIM và các gói cước của chúng tôi
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {[
            {
              title: "eSIM Châu Âu",
              description: "Kết nối không giới hạn tại Châu Âu",
              price: "€29.99",
              image: cartesSimImages[0]
            },
            {
              title: "eSIM Châu Á",
              description: "Kết nối ổn định tại các nước Châu Á",
              price: "€24.99",
              image: cartesSimImages[1]
            },
            {
              title: "eSIM Toàn Cầu",
              description: "Kết nối toàn cầu với giá ưu đãi",
              price: "€39.99",
              image: cartesSimImages[2]
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

export default CartesSimSection;