
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState } from "react";

const tourTypes = [
  {
    title: "Land Tour trọn gói",
    description: "Khám phá châu Âu với hành trình trọn gói",
    images: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077",
      "https://images.unsplash.com/photo-1534777367038-9404f45b869a"
    ]
  },
  {
    title: "City Tour Thành phố",
    description: "Khám phá các thành phố lớn châu Âu",
    images: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    ]
  },
  {
    title: "Day Tour vùng lân cận",
    description: "Khám phá vùng ngoại ô và làng mạc châu Âu",
    images: [
      "https://images.unsplash.com/photo-1513581166391-887a96ddeafd",
      "https://images.unsplash.com/photo-1465778893808-9b3d1b443be6",
      "https://images.unsplash.com/photo-1533591362725-979dfce672b5"
    ]
  },
  {
    title: "Tour Trải nghiệm đặc biệt",
    description: "Trải nghiệm độc đáo và khó quên tại châu Âu",
    images: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624",
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439"
    ]
  }
];

const ToursSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tours" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-6"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          TOURS Du Lịch
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tourTypes.map((tour, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 h-[200px] relative overflow-hidden">
                {hoveredIndex === index ? (
                  <Carousel className="absolute inset-0 w-full h-full">
                    <CarouselContent>
                      {tour.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex} className="w-full h-full">
                          <div className="relative w-full h-full">
                            <img
                              src={image}
                              alt={`${tour.title} ${imgIndex + 1}`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                              <div className="text-center text-white p-4">
                                <h3 className="text-lg font-bold mb-2">{tour.title}</h3>
                                <p className="text-sm">{tour.description}</p>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ) : (
                  <>
                    <div className="text-teal-600 mb-4">
                      {index === 0 ? (
                        // Land Tour icon - Globe with path
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      ) : index === 1 ? (
                        // City Tour icon - Buildings
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 20h16" />
                          <path d="M4 20V4h8v16" />
                          <path d="M12 4l8 4v12" />
                          <path d="M8 8h.01" />
                          <path d="M8 12h.01" />
                          <path d="M8 16h.01" />
                          <path d="M16 12h.01" />
                          <path d="M16 16h.01" />
                        </svg>
                      ) : index === 2 ? (
                        // Day Tour icon - Sun with path
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2v2" />
                          <path d="M12 20v2" />
                          <path d="M4.93 4.93l1.41 1.41" />
                          <path d="M17.66 17.66l1.41 1.41" />
                          <path d="M2 12h2" />
                          <path d="M20 12h2" />
                          <path d="M6.34 17.66l-1.41 1.41" />
                          <path d="M19.07 4.93l-1.41 1.41" />
                        </svg>
                      ) : (
                        // Special Experience icon - Star with sparkles
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          <path d="M18 2l1 2" />
                          <path d="M22 6l-2 1" />
                          <path d="M6 2L5 4" />
                          <path d="M2 6l2 1" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">{tour.title}</h3>
                    <p className="text-gray-600 text-center text-sm">{tour.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToursSection;
