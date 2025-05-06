
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

const esimServices = [
  {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "eSIM Châu Âu 30 ngày",
    rating: 4.8,
    bookings: "2K+ đã đặt",
    price: "30€",
    description: "Không giới hạn dữ liệu, tốc độ cao"
  },
  {
    image: "https://images.unsplash.com/photo-1585944672394-5485648bd9f6",
    title: "eSIM Châu Âu 15 ngày",
    rating: 4.7,
    bookings: "1.5K+ đã đặt",
    price: "20€",
    description: "Không giới hạn dữ liệu, tốc độ cao"
  },
  {
    image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa",
    title: "eSIM Châu Âu 7 ngày",
    rating: 4.6,
    bookings: "1K+ đã đặt",
    price: "15€",
    description: "Không giới hạn dữ liệu, tốc độ cao"
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

const CartesSimSection = () => {
  return (
    <section id="esim" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Sim Du lịch toàn cầu
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Đầy đủ các lựa chọn Sim Vật lí/eSim, Sim Data/Sim có thoại - với các đối tác Nhà mạng đa dạng trên toàn Thế giới
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
              {esimServices.map((service, index) => (
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
                      <div className="flex items-center mb-2">
                        {renderStars(service.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {service.rating} ({service.bookings})
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-teal-600">
                          {service.price}
                        </span>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                          Chi tiết
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

export default CartesSimSection;
