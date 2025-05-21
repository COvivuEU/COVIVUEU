
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const dayTours = [
  {
    image: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg",
    title: "Mont-Saint-Michel",
    country: "PHÁP",
    destination: "#Mont-Saint-Michel",
    from: "#Paris",
    duration: "1 ngày x 12 giờ",
    transport: "Xe ô tô",
    driver: "Tài xế Việt",
    price: "từ 650€",
    rating: 4.8,
    office: "ĐKKD: PHÁP"
  },
  {
    image: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg",
    title: "Vùng Hạ cảnh nơi anh",
    country: "THỤY SĨ",
    destination: "#Iseltwald, #Interlaken, #Brienz Lake, #Zurich",
    from: "#Strasbourg, #Lucerne, #Bern",
    duration: "1 ngày x 12 giờ",
    transport: "Xe ô tô",
    driver: "Tài xế Việt",
    price: "từ 500€",
    rating: 4.7,
    office: "ĐKKD: THỤY SĨ"
  },
  {
    image: "https://images.unsplash.com/photo-1533591362725-979dfce672b5",
    title: "Làng cổ Alsace",
    country: "PHÁP",
    destination: "#Colmar, #Eguisheim, #Ribeauvillé",
    from: "#Strasbourg, #Bern, #Basel, #Frankfurt, Interlaken",
    duration: "1 ngày x 9 giờ",
    transport: "Xe ô tô",
    driver: "Tài xế Việt",
    price: "từ 320€",
    rating: 4.9,
    office: "ĐKKD: PHÁP"
  },
  {
    image: "https://images.unsplash.com/photo-1533591362725-979dfce672b5",
    title: "Làng cổ tích & Cối xay gió",
    country: "HÀ LAN",
    destination: "#Giethoorn, #Zaanse Schans",
    from: "#Amsterdam",
    duration: "1 ngày x 10 giờ",
    transport: "Xe ô tô",
    driver: "Tài xế Việt",
    price: "từ 420€",
    rating: 4.8,
    office: "ĐKKD: HÀ LAN"
  },
  {
    image: "https://images.unsplash.com/photo-1533591362725-979dfce672b5",
    title: "Quê hương đồng Hồ Cuckoo",
    country: "ĐỨC",
    destination: "#Triberg",
    from: "#Strasbourg",
    duration: "1 ngày x 8 giờ",
    transport: "Xe ô tô",
    driver: "Tài xế Việt",
    price: "từ 450€",
    rating: 4.7,
    office: "ĐKKD: ĐỨC"
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
    <section id="daytour" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 uppercase"
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
                      <p className="text-gray-600 text-sm mb-1">{tour.office}</p>
                      <p className="text-gray-600 text-sm mb-1">Điểm đến: {tour.destination}</p>
                      <p className="text-gray-600 text-sm mb-1">Từ: {tour.from}</p>
                      <p className="text-gray-600 text-sm mb-1">{tour.duration}</p>
                      <p className="text-gray-600 text-sm mb-1">{tour.transport}</p>
                      <p className="text-gray-600 text-sm mb-4">{tour.driver}</p>
                      
                      <div className="mt-auto">
                        <p className="text-xl font-semibold text-teal-600 mb-4">{tour.price}</p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                          <div className="flex items-center gap-2">
                            {renderStars(tour.rating)}
                            <span className="text-sm text-gray-600">
                              {tour.rating}
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

export default DayTourSection;
