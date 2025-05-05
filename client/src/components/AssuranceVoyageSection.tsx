
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

const insuranceServices = [
  {
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826",
    title: "Bảo hiểm Du lịch Cơ bản",
    rating: 4.7,
    bookings: "3K+ đã đặt",
    price: "890.000đ",
    description: "Bảo hiểm cơ bản cho chuyến du lịch châu Âu"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    title: "Bảo hiểm Du lịch VIP",
    rating: 4.9,
    bookings: "1K+ đã đặt",
    price: "2.890.000đ",
    description: "Bảo hiểm toàn diện với hỗ trợ y tế 24/7"
  },
  {
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    title: "Bảo hiểm Gia đình",
    rating: 4.8,
    bookings: "2K+ đã đặt",
    price: "3.590.000đ",
    description: "Bảo hiểm cho cả gia đình với ưu đãi đặc biệt"
  },
  {
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
    title: "Bảo hiểm Dài hạn",
    rating: 4.6,
    bookings: "500+ đã đặt",
    price: "5.990.000đ",
    description: "Bảo hiểm du lịch dài hạn lên đến 1 năm"
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    title: "Bảo hiểm Premium",
    rating: 4.9,
    bookings: "800+ đã đặt",
    price: "4.290.000đ",
    description: "Bảo hiểm cao cấp với quyền lợi tối đa"
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    title: "Bảo hiểm Du học",
    rating: 4.7,
    bookings: "1.5K+ đã đặt",
    price: "6.990.000đ",
    description: "Bảo hiểm chuyên biệt cho du học sinh"
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

const AssuranceVoyageSection = () => {
  return (
    <section id="assurance-voyage" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Bảo hiểm Du lịch
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Bảo vệ chuyến đi của bạn với các gói bảo hiểm của chúng tôi
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
              {insuranceServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative">
                    <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-2">{service.description}</p>
                      <p className="text-lg font-semibold text-teal-600 mb-2">
                        {service.price}
                      </p>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {renderStars(service.rating)}
                        </div>
                        <span className="text-gray-600">{service.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{service.bookings}</p>
                      <button className="w-full text-center py-2 rounded-md text-sm bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                        Đặt ngay
                      </button>
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

export default AssuranceVoyageSection;
