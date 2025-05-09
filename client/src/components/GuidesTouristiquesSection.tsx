
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const guideServices = [
  {
    image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg",
    title: "Tour Guide Ý",
    rating: 4.8,
    bookings: "2K+ đã đặt",
    description: "Khám phá vẻ đẹp và văn hóa nước Ý cùng hướng dẫn viên người Việt",
    price: "từ 50€",
    link: "https://www.tubudd.com/locations/italy"
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    title: "Tour Guide Pháp",
    rating: 4.9,
    bookings: "3K+ đã đặt",
    description: "Trải nghiệm Paris và các thành phố của Pháp với buddy người Việt",
    price: "từ 45€",
    link: "https://www.tubudd.com/locations/france"
  },
  {
    image: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg",
    title: "Tour Guide Đức",
    rating: 4.7,
    bookings: "1.5K+ đã đặt",
    description: "Khám phá nước Đức cùng hướng dẫn viên bản địa người Việt",
    price: "từ 48€",
    link: "https://www.tubudd.com/locations/germany"
  },
  {
    image: "https://images.unsplash.com/photo-1513805959324-96eb66ca8713",
    title: "Tour Guide Đông Âu",
    rating: 4.8,
    bookings: "1K+ đã đặt",
    description: "Trải nghiệm các quốc gia Đông Âu với buddy người Việt",
    price: "từ 40€",
    link: "https://www.tubudd.com/locations/dong-au"
  }
];

const GuidesTouristiquesSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="guides" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour guide/Buddy Schengen
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Hướng dẫn viên/Bạn đồng hành bản địa người Việt tại các quốc gia Schengen
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
              {guideServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <div className="flex items-center mb-2">
                        {renderStars(service.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {service.rating} ({service.bookings})
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <div className="mt-auto">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-teal-600">
                            {service.price}
                          </span>
                          <a 
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors"
                          >
                            Chi tiết
                          </a>
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

export default GuidesTouristiquesSection;
