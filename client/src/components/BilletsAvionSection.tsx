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
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
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
      className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
    />
  ));
};

const BilletsAvionSection = () => {
  return (
    <section id="billets-avion" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Vé Máy Bay
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6"
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
          className="w-full"
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {flightServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    {/* Badge for best value */}
                    {service.rating >= 4.8 && (
                      <div className="absolute top-4 right-4 z-10 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Phổ biến
                      </div>
                    )}

                    {/* Image with 16:9 aspect ratio */}
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
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

export default BilletsAvionSection;