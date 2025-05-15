
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const cityTours = [
  {
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    title: "Paris Quick check-in",
    location: "PHÁP | Paris",
    subtitle: "(nội thành)",
    duration: "1 ngày x 9 giờ",
    transport: "Đi bộ + PTCC",
    buddy: "Buddy Việt",
    price: "Giá:",
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    title: "Rome & Vatican",
    location: "Ý | Rome, Vatican",
    duration: "2 ngày x 8 giờ",
    transport: "Đi bộ + PTCC",
    buddy: "Buddy Việt",
    price: "Giá:",
    rating: 4.7,
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    title: "Capitale Européenne",
    location: "PHÁP | Strasbourg",
    duration: "1 ngày x 9 giờ",
    transport: "Đi bộ + PTCC",
    buddy: "Buddy Việt",
    price: "Giá:",
    rating: 4.9,
  },
  {
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6",
    title: "Hạ cánh Zurich",
    location: "THỤY SĨ | Zurich",
    duration: "1 ngày x 8 giờ",
    transport: "Đi bộ + PTCC",
    buddy: "Buddy Việt",
    price: "Giá:",
    rating: 4.8,
  }
];

const CityTourSection = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold uppercase mb-4"
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            CITY TOUR
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-700"
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Slide Sản phẩm: Hiển thị 3 mục (2 mục để trượt sang)
          </motion.p>
        </div>
        
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {cityTours.map((tour, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col m-2">
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>
                      <p className="font-medium text-gray-800 mb-1">{tour.location}</p>
                      {tour.subtitle && (
                        <p className="text-gray-600 italic mb-2">{tour.subtitle}</p>
                      )}
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>{tour.duration}</p>
                        <p>{tour.transport}</p>
                        <p>{tour.buddy}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-medium mb-3">{tour.price}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {Array(5).fill(0).map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(tour.rating)
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">
                              {tour.rating}
                            </span>
                          </div>
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

export default CityTourSection;
