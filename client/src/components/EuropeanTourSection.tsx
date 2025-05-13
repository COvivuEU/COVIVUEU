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
          className="text-3xl font-bold text-center mb-4 uppercase"
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
                <CarouselItem key={index} className="md:basis-1/3 p-2">
                  <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex flex-col p-5 min-h-[420px] border border-teal-100 hover:border-teal-200 transition-all">
                    <div className="relative h-48 overflow-hidden rounded-lg shadow-md">
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col flex-grow gap-4 mt-5">
                      <div>
                        <h3 className="font-semibold text-lg text-teal-700 hover:text-teal-600 transition-colors">
                          <a href={provider.link}>{provider.name}</a>
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {provider.description.map((desc, i) => (
                          <p key={i} className="text-gray-700 font-medium bg-teal-50/50 px-3 py-1 rounded-md">{desc}</p>
                        ))}
                      </div>
                      <div className="space-y-1.5 text-sm text-gray-600 bg-white/60 p-3 rounded-md">
                        <p className="flex items-center"><span className="w-16 text-teal-700">ĐKKD:</span> {provider.details.dkkd}</p>
                        <p className="flex items-center"><span className="w-16 text-teal-700">HQ:</span> {provider.details.hq.replace('Trụ sở chính: ', '')}</p>
                        {provider.details.since && <p className="flex items-center"><span className="w-16 text-teal-700">Since:</span> {provider.details.since}</p>}
                        <p className="flex items-center"><span className="w-16 text-teal-700">Office:</span> {provider.details.office.replace('Văn phòng: ', '')}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3 border-t border-teal-100">
                        <div className="flex items-center bg-teal-50/50 px-3 py-1 rounded-full">
                          {renderStars(provider.rating)}
                          <span className="ml-2 text-sm text-teal-700 font-medium">
                            {provider.rating}
                          </span>
                        </div>
                        <a 
                          href={provider.link}
                          className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm hover:bg-teal-700 transition-all hover:shadow-md"
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