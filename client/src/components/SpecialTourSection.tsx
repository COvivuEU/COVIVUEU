import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const specialTours = [
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    title: "Tour Lễ hội Hoa tulip",
    price: "250€",
    rating: 4.9,
    bookings: "300+ đã đặt",
    description: "Trải nghiệm lễ hội hoa tulip Hà Lan",
  },
  {
    image: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624",
    title: "Tour Lễ hội Bia",
    price: "280€",
    rating: 4.8,
    bookings: "500+ đã đặt",
    description: "Tham gia lễ hội bia Oktoberfest",
  },
  {
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
    title: "Tour Giáng sinh",
    price: "300€",
    rating: 4.9,
    bookings: "400+ đã đặt",
    description: "Khám phá chợ Giáng sinh châu Âu",
  }
];

const SpecialTourSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          TRẢI NGHIỆM ĐẶC BIỆT
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-700 mb-8 text-center"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Trải nghiệm độc đáo và khó quên tại châu Âu
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
              {specialTours.map((tour, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>
                      <div className="flex items-center mb-2">
                        {renderStars(tour.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {tour.rating} ({tour.bookings})
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
                      
                      <div className="mt-auto">
                        <p className="text-xl font-semibold text-teal-600 mb-4">{tour.price}</p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                          <div className="flex items-center gap-2">
                            {renderStars(tour.rating)}
                            <span className="text-sm text-gray-600">
                              {tour.rating}
                            </span>
                          </div>
                          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
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

export default SpecialTourSection;