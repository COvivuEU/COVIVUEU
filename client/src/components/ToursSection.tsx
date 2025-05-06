
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
                      {index === 0 && (
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 21V12m0 9l-3-3m3 3l3-3M3 4h18M4 4h16v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 21h18M3 18h18M8 21v-3m4 3v-3m4 3v-3M12 3L2 12h20L12 3z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 18H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-3m-6 0v3m0-3h6m-6 0v3m6-3v3M3 6l18 0M9 3v3m6-3v3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" strokeLinecap="round" strokeLinejoin="round"/>
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
