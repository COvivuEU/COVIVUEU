
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const restaurantServices = [
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    title: "Le Petit Paris",
    rating: 4.8,
    bookings: "2K+ đã đặt",
    price: "€€€",
    description: "Nhà hàng Pháp sang trọng với view Eiffel"
  },
  {
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae",
    title: "La Piazza Roma",
    rating: 4.9,
    bookings: "3K+ đã đặt",
    price: "€€",
    description: "Ẩm thực Ý truyền thống giữa lòng Rome"
  },
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    title: "Barcelona Tapas",
    rating: 4.7,
    bookings: "1.5K+ đã đặt",
    price: "€€",
    description: "Tapas & Sangria đặc trưng Tây Ban Nha"
  }
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, index) => (
    <StarIcon
      key={index}
      className={`h-4 w-4 ${
        index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
      }`}
    />
  ));
};

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
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {restaurantServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative">
                    <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-2">{service.description}</p>
                      <p className="text-lg font-semibold text-teal-600 mb-2">
                        {service.price}
                      </p>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {renderStars(service.rating)}
                        </div>
                        <span className="text-gray-600">{service.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{service.bookings}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
