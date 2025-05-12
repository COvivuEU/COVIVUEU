import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
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
    description: [
      "Tour Thiết kế riêng",
      "Tour Thiết kế sẵn"
    ],
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
    description: [
      "Tour Thiết kế riêng",
      "Tour Thiết kế sẵn"
    ],
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
    description: [
      "Tour ghép linh hoạt"
    ],
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
    description: [
      "Tour ghép linh hoạt"
    ],
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
    description: [
      "Tour ghép linh hoạt"
    ],
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
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Land Tour từ Châu Âu
        </motion.h2>

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
                        <h3 className="font-semibold text-lg text-blue-600">
                          <a href={provider.link}>{provider.name}</a>
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {provider.description.map((desc, i) => (
                          <p key={i} className="text-gray-800 font-medium">{desc}</p>
                        ))}
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>ĐKKD: {provider.details.dkkd}</p>
                        <p>{provider.details.hq}</p>
                        {provider.details.since && <p>Since: {provider.details.since}</p>}
                        <p>{provider.details.office}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center">
                          {renderStars(provider.rating)}
                          <span className="ml-2 text-sm text-gray-600">
                            {provider.rating}
                          </span>
                        </div>
                        <a 
                          href={provider.link}
                          className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors"
                        >
                          Chi tiết
                        </a>
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