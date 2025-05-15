
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
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold uppercase mb-4">
            CITY TOUR
          </h2>
          <p className="text-lg text-gray-700">
            Slide Sản phẩm: Hiển thị 3 mục (2 mục để trượt sang)
          </p>
        </motion.div>
        
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
                      <p className="font-medium text-gray-800 mb-1">{tour.location}</p>
                      {tour.subtitle && (
                        <p className="text-gray-600 italic mb-2">{tour.subtitle}</p>
                      )}
                      <div className="space-y-1 mb-4">
                        <p className="text-gray-700">{tour.duration}</p>
                        <p className="text-gray-700">{tour.transport}</p>
                        <p className="text-gray-700">{tour.buddy}</p>
                      </div>
                      <div className="mt-auto">
                        <p className="font-medium mb-2">{tour.price}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <p className="mr-2">Rating:</p>
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                              Chi tiết
                            </button>
                          </div>
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
