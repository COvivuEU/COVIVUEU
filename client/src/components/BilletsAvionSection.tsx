
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

const flightServices = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    title: "Vé máy bay Hà Nội - Paris",
    rating: 4.8,
    bookings: "5K+ đã đặt",
    price: "15.990.000đ",
    description: "Chuyến bay thẳng, bao gồm hành lý ký gửi",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f",
    title: "Vé máy bay TP.HCM - Frankfurt",
    rating: 4.7,
    bookings: "3K+ đã đặt",
    price: "18.590.000đ",
    description: "Chuyến bay của Vietnam Airlines với dịch vụ 5 sao",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1540339832862-474599557778",
    title: "Vé máy bay Đà Nẵng - Amsterdam",
    rating: 4.6,
    bookings: "2K+ đã đặt",
    price: "19.990.000đ",
    description: "Bay cùng Emirates, transit tại Dubai",
    instant: false
  },
  {
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
    title: "Vé máy bay Hà Nội - Berlin",
    rating: 4.9,
    bookings: "4K+ đã đặt",
    price: "17.890.000đ",
    description: "Chuyến bay của Qatar Airways, transit tại Doha",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd",
    title: "Vé máy bay TP.HCM - Rome",
    rating: 4.7,
    bookings: "2.5K+ đã đặt",
    price: "16.990.000đ",
    description: "Bay cùng Turkish Airlines, transit tại Istanbul",
    instant: false
  },
  {
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
    title: "Vé máy bay Đà Nẵng - Brussels",
    rating: 4.8,
    bookings: "1.8K+ đã đặt",
    price: "20.590.000đ",
    description: "Chuyến bay của Air France với dịch vụ cao cấp",
    instant: true
  }
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, index) => (
    <StarIcon
      key={index}
      className={`h-4 w-4 ${
        index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
      }`}
    />
  ));
};

const BilletsAvionSection = () => {
  return (
    <section id="billets-avion" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Vé Máy Bay
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Đặt vé máy bay với các đối tác hàng không uy tín của chúng tôi
        </motion.p>

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {flightServices.map((service, index) => (
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
                      <button 
                        className={`w-full text-center py-2 rounded-md text-sm transition-colors ${
                          service.instant 
                            ? 'bg-teal-600 text-white hover:bg-teal-700'
                            : 'border border-teal-600 text-teal-600 hover:bg-teal-50'
                        }`}
                      >
                        {service.instant ? 'Đặt ngay' : 'Gửi yêu cầu'}
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

export default BilletsAvionSection;
