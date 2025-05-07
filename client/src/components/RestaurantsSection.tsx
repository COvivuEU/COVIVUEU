
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Link } from "wouter";

const restaurantTypes = [
  {
    title: "Nhà hàng Việt",
    description: "Khám phá hương vị quê nhà tại châu Âu",
    href: "#vietnamese-restaurant",
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
      <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
      </svg>
    </div>
  },
  {
    title: "Nhà hàng Âu",
    description: "Trải nghiệm ẩm thực đặc sắc châu Âu",
    href: "#european-restaurant",
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
      <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3L6 9h12l-6-6z" />
        <path d="M12 21l-6-6h12l-6 6z" />
        <path d="M12 3v18" />
      </svg>
    </div>
  }
];

const RestaurantsSection = () => {
  return (
    <section id="restaurants" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          NHÀ HÀNG
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {restaurantTypes.map((restaurant, index) => (
            <motion.a
              href={restaurant.href}
              key={index}
              className="flex flex-col items-center justify-center border border-gray-200 rounded-md p-6 hover:shadow-md transition-shadow cursor-pointer"
              variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
            >
              <div className="flex justify-center items-center mb-4">
                {restaurant.icon}
              </div>
              <h3 className="text-center text-gray-900 font-medium mb-2">
                {restaurant.title}
              </h3>
              <p className="text-center text-gray-600 text-sm">
                {restaurant.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
