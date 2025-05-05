
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const restaurantServices = [
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    title: "Le Petit Paris",
    rating: 4.8,
    bookings: "2K+ đã đặt",
    price: "€€€",
    description: "Nhà hàng Pháp sang trọng với view Eiffel",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae",
    title: "La Piazza Roma",
    rating: 4.9,
    bookings: "3K+ đã đặt",
    price: "€€",
    description: "Ẩm thực Ý truyền thống giữa lòng Rome",
    instant: false
  },
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    title: "Barcelona Tapas",
    rating: 4.7,
    bookings: "1.5K+ đã đặt",
    price: "€€",
    description: "Tapas & Sangria đặc trưng Tây Ban Nha",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    title: "Vienna Café",
    rating: 4.6,
    bookings: "1K+ đã đặt",
    price: "€€",
    description: "Café truyền thống với bánh ngọt Áo",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31",
    title: "Amsterdam Bistro",
    rating: 4.8,
    bookings: "800+ đã đặt",
    price: "€€€",
    description: "Ẩm thực Hà Lan hiện đại",
    instant: false
  },
  {
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
    title: "Greek Taverna",
    rating: 4.7,
    bookings: "1.2K+ đã đặt",
    price: "€€",
    description: "Món ăn Hy Lạp đích thực",
    instant: true
  }
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, index) => (
    <StarIcon
      key={index}
      className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
    />
  ));
};

const RestaurantsSection = () => {
  return (
    <section id="restaurants" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Nhà Hàng
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
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
          className="w-full"
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {restaurantServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    {service.rating >= 4.8 && (
                      <div className="absolute top-4 right-4 z-10 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Phổ biến
                      </div>
                    )}
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{service.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-2">{service.description}</p>
                      <div className="mt-auto">
                        <p className="text-lg font-semibold text-teal-600 mb-3">
                          {service.price}
                        </p>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-0.5">
                              {renderStars(service.rating)}
                            </div>
                            <span className="text-gray-600 font-medium">{service.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">{service.bookings}</span>
                        </div>
                        <div className="flex justify-end">
                          <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                            Đặt bàn
                          </button>
                        </div>
                      </div>
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
