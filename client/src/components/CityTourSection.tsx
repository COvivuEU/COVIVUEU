
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
    price: "€150",
    rating: 4.8,
    reviews: "500+ reviews"
  },
  {
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    title: "Rome & Vatican",
    location: "Ý | Rome, Vatican",
    duration: "2 ngày x 8 giờ",
    transport: "Đi bộ + PTCC",
    buddy: "Buddy Việt",
    price: "€280",
    rating: 4.7,
    reviews: "450+ reviews"
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    title: "Capitale Européenne",
    location: "PHÁP | Strasbourg",
    duration: "1 ngày x 9 giờ",
    transport: "Đi bộ + PTCC",
    buddy: "Buddy Việt",
    price: "€160",
    rating: 4.9,
    reviews: "600+ reviews"
  },
  {
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6",
    title: "Hạ cánh Zurich",
    location: "THỤY SĨ | Zurich",
    duration: "1 ngày x 8 giờ",
    transport: "Đi bộ + PTCC",
    buddy: "Buddy Việt",
    price: "€190",
    rating: 4.8,
    reviews: "350+ reviews"
  }
];

const CityTourSection = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold uppercase mb-3"
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            CITY TOUR
          </motion.h2>
        </div>
        
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {cityTours.map((tour, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="h-full bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-[16/9] relative">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg">{tour.title}</h3>
                        <p className="text-gray-700">{tour.location}</p>
                        {tour.subtitle && (
                          <p className="text-gray-600 text-sm italic">{tour.subtitle}</p>
                        )}
                      </div>
                      
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>{tour.duration}</p>
                        <p>{tour.transport}</p>
                        <p>{tour.buddy}</p>
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-lg">{tour.price}</span>
                          <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                            Chi tiết
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="flex">
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
                          </div>
                          <span className="text-sm text-gray-600">
                            {tour.rating} ({tour.reviews})
                          </span>
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
