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

const europeanTours = [
  {
    logo: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
    name: "COvivu",
    link: "#",
    rating: 4.5,
    description: ["Tour Thiết kế riêng", "Tour Thiết kế sẵn"],
    details: {
      dkkd: "Pháp",
      hq: "Trụ sở chính: Strasbourg",
      since: "2023",
      office: "Văn phòng: Paris, Hà Nội, TP.HCM"
    }
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "SmileTrip",
    link: "#",
    rating: 4.8,
    description: ["Tour Thiết kế riêng", "Tour Thiết kế sẵn"],
    details: {
      dkkd: "Pháp",
      hq: "Trụ sở chính: Paris",
      since: "2013",
      office: "Văn phòng: Hà Nội, Osaka (Nhật Bản), Paris (Pháp)"
    }
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "EuroCircle",
    link: "#",
    rating: 4.7,
    description: ["Tour ghép linh hoạt"],
    details: {
      dkkd: "Việt Nam",
      hq: "Trụ sở chính: TP.HCM",
      since: "2018",
      office: "Văn phòng: Paris"
    }
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "GoEUGo",
    link: "#",
    rating: 4.6,
    description: ["Tour ghép linh hoạt"],
    details: {
      dkkd: "Hà Lan",
      hq: "Trụ sở chính: Rotterdam",
      since: "1988",
      office: "Văn phòng: Rotterdam, Vancouver (Canada), Hong Kong, Đài Loan, Bắc Kinh, Thượng Hải, Quảng Châu, Hà Nội"
    }
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Babar Travel",
    link: "#",
    rating: 4.9,
    description: ["Tour ghép linh hoạt"],
    details: {
      dkkd: "Việt Nam",
      hq: "Trụ sở chính: Hà Nội",
      since: "2011",
      office: "Văn phòng: TP.HCM, Quảng Ninh, Phú Thọ, Hà Giang, Lạng Sơn, Karlsruhe (Đức)"
    }
  }
];

const EuropeanTourSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="EuropeanTourSection" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Land Tour tại Châu Âu
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6 text-center italic"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Các loại Tour xuất phát và kết thúc trong khu vực Schengen, KHÔNG BAO GỒM Vé máy bay và Visa
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
              {europeanTours.map((provider, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-4 min-h-[400px]">
                    <div className="relative h-40 overflow-hidden rounded-lg">
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-grow gap-4 mt-4">
                      <div>
                        <h3 className="font-semibold text-lg">{provider.name}</h3>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm leading-none mb-1">ĐKKD: {provider.details.dkkd}</p>
                        <p className="text-gray-600 text-sm leading-none mb-1">{provider.details.office}</p>
                        {provider.details.since && (
                          <p className="text-gray-600 text-sm leading-none">Since: {provider.details.since}</p>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2 flex-shrink-0 min-w-[120px]">
                          {renderStars(provider.rating)}
                          <span className="text-sm text-gray-600 whitespace-nowrap">
                            {provider.rating}
                          </span>
                        </div>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex-shrink-0">
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

export default EuropeanTourSection;