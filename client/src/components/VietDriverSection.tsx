
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

const driverServices = [
  {
    title: "CÔvivu",
    type: "Công ty",
    description: "Các loại xe: 5 chỗ, 7 chỗ, 9 chỗ",
    tags: ["Tài xế người Việt", "Hóa đơn: Có (tick xanh)"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&fit=crop",
    rating: 4.8,
    bookings: "500+ đã đặt",
  },
  {
    title: "Smile Trip",
    type: "Công ty",
    description: "Các loại xe: Từ 5 đến 55 chỗ",
    tags: ["Tài xế người Việt & người Nước ngoài", "Hóa đơn: Có (tick xanh)"],
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1472&fit=crop",
    rating: 4.9,
    bookings: "1K+ đã đặt",
  },
  {
    title: "Hạ Nguy Pha",
    type: "Cá nhân",
    description: "Các loại xe: 5 chỗ, 7 chỗ, 9 chỗ",
    tags: ["Tài xế người Việt", "Hóa đơn: Không"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&fit=crop",
    rating: 4.7,
    bookings: "300+ đã đặt",
  },
  {
    title: "Rvisa",
    type: "Cá nhân",
    description: "Các loại xe: Từ 5 đến 55 chỗ",
    tags: ["Tài xế người Việt & người Nước ngoài", "Hóa đơn: Không (X đỏ)"],
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1472&fit=crop",
    rating: 4.8,
    bookings: "800+ đã đặt",
  },
  {
    title: "Nhung Nguyen",
    type: "Cá nhân",
    description: "Các loại xe: Từ 5 đến 55 chỗ",
    tags: ["Tài xế người Việt & người Nước ngoài", "Hóa đơn: Không (X đỏ)"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&fit=crop",
    rating: 4.9,
    bookings: "400+ đã đặt",
  }
];

const VietDriverSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="transport" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center uppercase mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Ô tô Tài xế Việt
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 text-center mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Dịch vụ xe & tài xế người Việt tại các quốc gia Schengen
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
              {driverServices.map((service, index) => (
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
                      <span className="text-sm font-medium text-teal-600 mb-2">
                        {service.type}
                      </span>
                      <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                      <div className="mb-2">
                        {service.tags.map((tag, i) => (
                          <span key={i} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 mb-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center">
                          {renderStars(service.rating)}
                          <span className="ml-2 text-sm text-gray-600">
                            {service.rating} ({service.bookings})
                          </span>
                        </div>
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

export default VietDriverSection;
