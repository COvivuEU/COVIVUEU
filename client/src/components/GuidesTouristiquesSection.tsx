
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const guideServices = [
  {
    image: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624",
    title: "Hướng dẫn viên Paris",
    rating: 4.9,
    bookings: "5K+ đã đặt",
    price: "890.000đ/ngày",
    description: "HDV kinh nghiệm, thông thạo tiếng Việt và Pháp"
  },
  {
    image: "https://images.unsplash.com/photo-1516383607781-913a19294fd1",
    title: "Hướng dẫn viên Rome",
    rating: 4.8,
    bookings: "3K+ đã đặt",
    price: "790.000đ/ngày",
    description: "HDV chuyên tour văn hóa và ẩm thực Ý"
  },
  {
    image: "https://images.unsplash.com/photo-1524008279394-3aed4643b30b",
    title: "Hướng dẫn viên London",
    rating: 4.7,
    bookings: "2K+ đã đặt",
    price: "850.000đ/ngày",
    description: "HDV am hiểu lịch sử và văn hóa Anh"
  }
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, index) => (
    <StarIcon
      key={index}
      className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
    />
  ));
};

const GuidesTouristiquesSection = () => {
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
          Hướng Dẫn Viên Du Lịch
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tận hưởng chuyến tham quan với hướng dẫn viên địa phương của chúng tôi
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    {service.rating >= 4.8 && (
                      <div className="absolute top-4 right-4 z-10 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Phổ biến
                      </div>
                    )}
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{service.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-2">{service.description}</p>
                      <div className="mt-auto">
                        <p className="text-lg font-semibold text-teal-600 mb-3">
                          {service.price}
                        </p>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-0.5">
                              {renderStars(service.rating)}
                            </div>
                            <span className="text-gray-600 font-medium">{service.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">{service.bookings}</span>
                        </div>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                          Đặt ngay
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

export default GuidesTouristiquesSection;
