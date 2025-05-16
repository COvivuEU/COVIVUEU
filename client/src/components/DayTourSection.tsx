
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const dayTours = [
  {
    image: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg",
    title: "Tour làng cổ Pháp",
    price: "150€",
    rating: 4.7,
    bookings: "500+ đã đặt",
    description: "Khám phá những làng cổ xinh đẹp của Pháp",
  },
  {
    image: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg",
    title: "Vườn nho Bordeaux",
    price: "180€",
    rating: 4.8,
    bookings: "300+ đã đặt",
    description: "Tham quan và thưởng thức rượu vang",
  },
  {
    image: "https://images.unsplash.com/photo-1533591362725-979dfce672b5",
    title: "Tour sông Seine",
    price: "120€",
    rating: 4.9,
    bookings: "800+ đã đặt",
    description: "Du ngoạn trên dòng sông Seine thơ mộng",
  }
];

const DayTourSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          DAY TOUR VÙNG LÂN CẬN
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8 text-center"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Khám phá vùng ngoại ô và làng mạc châu Âu
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
              {dayTours.map((tour, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>
                      <div className="flex items-center mb-2">
                        {renderStars(tour.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {tour.rating} ({tour.bookings})
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{tour.description}</p>
                      <div className="mt-auto">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-teal-600">
                            từ {tour.price}
                          </span>
                          <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
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

export default DayTourSection;
