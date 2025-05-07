
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const europeanRestaurants = [
  {
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    title: "Le Petit Paris",
    rating: 4.9,
    bookings: "3K+ đã đặt",
    price: "€€€",
    description: "Ẩm thực Pháp đẳng cấp Michelin"
  },
  {
    image: "https://images.unsplash.com/photo-1523568129082-a8d6c095638e",
    title: "La Pasta",
    rating: 4.7,
    bookings: "2.5K+ đã đặt",
    price: "€€",
    description: "Nhà hàng Ý truyền thống"
  },
  {
    image: "https://images.unsplash.com/photo-1515669097368-22e68427d265",
    title: "Madrid Tapas",
    rating: 4.8,
    bookings: "2K+ đã đặt",
    price: "€€",
    description: "Tapas và ẩm thực Tây Ban Nha"
  }
];

const EuropeanRestaurantSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="european-restaurant" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Nhà hàng Âu
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Trải nghiệm ẩm thực châu Âu đích thực
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
              {europeanRestaurants.map((restaurant, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-2">{restaurant.title}</h3>
                      <div className="flex items-center mb-2">
                        {renderStars(restaurant.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {restaurant.rating} ({restaurant.bookings})
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{restaurant.description}</p>
                      <div className="mt-auto">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-teal-600">
                            {restaurant.price}
                          </span>
                          <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                            Chi tiết
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

export default EuropeanRestaurantSection;
