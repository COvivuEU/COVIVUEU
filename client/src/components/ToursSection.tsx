import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const tourServices = [
  {
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    title: "Tour Khám Phá Paris",
    rating: 4.8,
    bookings: "256 lượt đặt",
    price: "2.990.000đ",
    description: "Khám phá thành phố ánh sáng với tour trọn gói 3 ngày 2 đêm",
  },
  {
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    title: "Tour Châu Âu Cổ Điển",
    rating: 4.7,
    bookings: "189 lượt đặt",
    price: "15.990.000đ",
    description: "Hành trình 10 ngày qua 5 quốc gia châu Âu",
  },
  {
    image: "https://images.unsplash.com/photo-1534777367038-9404f45b869a",
    title: "Tour Rome - Venice",
    rating: 4.9,
    bookings: "312 lượt đặt",
    price: "8.990.000đ",
    description: "Khám phá vẻ đẹp của Ý trong 7 ngày",
  },
  {
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    title: "Tour Thụy Sĩ",
    rating: 4.6,
    bookings: "145 lượt đặt",
    price: "12.990.000đ",
    description: "Trải nghiệm mùa đông tuyết trắng tại Thụy Sĩ",
  },
  {
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    title: "Tour Barcelona",
    rating: 4.7,
    bookings: "203 lượt đặt",
    price: "6.990.000đ",
    description: "Khám phá kiến trúc độc đáo của Barcelona",
  }
];

const ToursSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="tours" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour Du Lịch
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Khám phá các tour du lịch với trải nghiệm có hướng dẫn của chúng tôi
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
              {tourServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col h-[200px]">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-[56px]">{service.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(service.rating)}
                        <span className="text-sm text-gray-600">
                          ({service.bookings})
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
                      <div className="mt-auto flex justify-between items-center">
                        <span className="text-lg font-bold text-teal-600">
                          {service.price}
                        </span>
                        <button className="bg-teal-600 text-white px-3 py-1.5 text-sm rounded-full hover:bg-teal-700 transition-colors">
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

export default ToursSection;