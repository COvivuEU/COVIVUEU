import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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

        {tourTypes.map((tour, index) => (
          <motion.div 
            key={index}
            className="mb-16 last:mb-0"
            variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">{tour.title}</h3>
            <p className="text-gray-700 mb-6">{tour.description}</p>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {tour.images.map((image, imgIndex) => (
                  <CarouselItem key={imgIndex}>
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={image}
                        alt={`${tour.title} ${imgIndex + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToursSection;