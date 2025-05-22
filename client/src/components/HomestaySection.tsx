import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const homestayServices = [
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    title: "Homestay Paris",
    rating: 4.9,
    bookings: "230 lượt đặt",
    price: "210€/đêm",
    description: "Căn hộ trung tâm Paris với view tháp Eiffel",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0",
    title: "Villa Rome",
    rating: 4.8,
    bookings: "180 lượt đặt",
    price: "325€/đêm",
    description: "Villa sang trọng gần Vatican",
    instant: false
  },
  {
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2",
    title: "Studio Barcelona",
    rating: 4.7,
    bookings: "156 lượt đặt",
    price: "90€/đêm",
    description: "Studio hiện đại tại trung tâm Barcelona",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1630350489488-3d80c86fc909",
    title: "Căn hộ Amsterdam",
    rating: 4.8,
    bookings: "203 lượt đặt",
    price: "140€/đêm",
    description: "Căn hộ view kênh đào Amsterdam",
    instant: false
  },
  {
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    title: "Homestay Berlin",
    rating: 4.6,
    bookings: "145 lượt đặt",
    price: "110€/đêm",
    description: "Phòng riêng tại khu phố cổ Berlin",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    title: "Penthouse Vienna",
    rating: 4.9,
    bookings: "167 lượt đặt",
    price: "255€/đêm",
    description: "Penthouse sang trọng tại Vienna",
    instant: false
  }
];

const HomestaySection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="homestay" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-4 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Homestay
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6 text-center italic"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Trải nghiệm lưu trú tại nhà dân với các lựa chọn chỗ ở của chúng tôi
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
              {homestayServices.map((service, index) => (
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
                    <div className="p-4 flex flex-col h-full">
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <div className="mt-auto">
                          <p className="text-xl font-semibold text-teal-600 mb-4">{service.price}</p>
                          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                            <div className="flex items-center gap-2">
                              {renderStars(service.rating)}
                              <span className="text-sm text-gray-600">
                                {service.rating}
                              </span>
                            </div>
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                              Chi tiết
                            </button>
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

export default HomestaySection;