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
    title: "Pacific Voyages",
    rating: 4.8,
    bookings: "5K+ reviews",
    price: "Paris - Pháp",
    description: "Đại lí chính thức của VietnamAirlines tại Châu Âu",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f",
    title: "Vé máy bay TP.HCM - Frankfurt",
    rating: 4.7,
    bookings: "3K+ đã đặt",
    price: "980€",
    description: "Chuyến bay của Vietnam Airlines với dịch vụ 5 sao",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
    title: "Vé máy bay Đà Nẵng - Amsterdam",
    rating: 4.6,
    bookings: "2K+ đã đặt",
    price: "1300€",
    description: "Bay cùng Emirates, transit tại Dubai",
    instant: false
  },
  {
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
    title: "Vé máy bay Hà Nội - Berlin",
    rating: 4.9,
    bookings: "4K+ đã đặt",
    price: "1250€",
    description: "Chuyến bay của Qatar Airways, transit tại Doha",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd",
    title: "Vé máy bay TP.HCM - Rome",
    rating: 4.7,
    bookings: "2.5K+ đã đặt",
    price: "1267€",
    description: "Bay cùng Turkish Airlines, transit tại Istanbul",
    instant: false
  },
  {
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
    title: "Vé máy bay Đà Nẵng - Brussels",
    rating: 4.8,
    bookings: "1.8K+ đã đặt",
    price: "1230€",
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
          className="text-2xl md:text-3xl font-bold text-center mb-4 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Vé máy bay
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6 text-center"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Cung cấp Vé máy bay tất cả các Hãng Hàng không tới mọi điểm đến trên toàn Thế giới
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
                    <div className="p-4 flex flex-col h-[200px]">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-[56px]">{service.title}</h3>
                      <div className="flex items-center mb-2">
                        {renderStars(service.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {service.rating} ({service.bookings})
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
                      <div className="mt-auto flex justify-between items-center">
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

export default BilletsAvionSection;