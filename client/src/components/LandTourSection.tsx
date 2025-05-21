
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const landTours = [
  {
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    title: "Tour Châu Âu 7 ngày",
    price: "1500€",
    rating: 4.8,
    bookings: "1K+ đã đặt",
    description: "Khám phá 4 quốc gia châu Âu trong 7 ngày",
    office: "ĐKKD: Việt Nam",
    since: "2020"
  },
  {
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    title: "Tour Pháp - Ý",
    price: "1800€",
    rating: 4.9,
    bookings: "800+ đã đặt",
    description: "Hành trình 10 ngày qua 2 quốc gia",
    office: "ĐKKD: Việt Nam",
    since: "2019"
  },
  {
    image: "https://images.unsplash.com/photo-1534777367038-9404f45b869a",
    title: "Tour Đông Âu",
    price: "1300€",
    rating: 4.7,
    bookings: "500+ đã đặt",
    description: "Khám phá vẻ đẹp Đông Âu trong 8 ngày",
    office: "ĐKKD: Việt Nam",
    since: "2021"
  }
];

const LandTourSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="landtour" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Land Tour trọn gói
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6 text-center"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Khám phá châu Âu với hành trình trọn gói
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
              {landTours.map((tour, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-4 min-h-[400px]">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-grow gap-2 mt-2">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{tour.title}</h3>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-0.5">{tour.office}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-0.5">{tour.description}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">Since: {tour.since}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">Giá từ: {tour.price}</p>
                      </div>
                      <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2 flex-shrink-0 min-w-[120px]">
                          {renderStars(tour.rating)}
                          <span className="text-sm text-gray-600 whitespace-nowrap">
                            {tour.rating}
                          </span>
                        </div>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex-shrink-0">
                          Chi tiết
                        </button>
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

export default LandTourSection;
