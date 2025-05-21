
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
          className="text-3xl font-bold text-center mb-12 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Land Tour tại Châu Âu
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6 text-center"
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="relative pt-[56.25%] overflow-hidden">
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col h-full">
                      <h3 className="font-semibold text-lg mb-2">{provider.name}</h3>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-600 text-sm">ĐKKD: {provider.details.dkkd}</p>
                        <p className="text-gray-600 text-sm">{provider.details.hq}</p>
                        {provider.details.since && (
                          <p className="text-gray-600 text-sm">Since: {provider.details.since}</p>
                        )}
                        {provider.details.office && (
                          <p className="text-gray-600 text-sm">{provider.details.office}</p>
                        )}
                      </div>
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {provider.description.map((desc, i) => (
                            <span 
                              key={i}
                              className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                            >
                              {desc}
                            </span>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 pt-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {renderStars(provider.rating)}
                              <span className="text-sm text-gray-600">
                                {provider.rating}
                              </span>
                            </div>
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                              Chi tiết
                            </button>
                          </div>
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

export default EuropeanTourSection;
