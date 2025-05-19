import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const tourProviders = [
  {
    logo: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
    name: "World Trip",
    hq: "TP.HCM",
    since: "",
    rating: 4.5,
    office: "Trụ sở chính: TP.HCM",
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Lữa Việt",
    hq: "TP.HCM",
    since: "1995",
    rating: 4.8,
    office: "Văn phòng: Hà Nội, Cần Thơ, Đà Nẵng",
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Inno Tour",
    hq: "TP.HCM",
    since: "2017",
    rating: 4.6,
    office: "",
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "TransViet",
    hq: "TP.HCM",
    since: "1996",
    rating: 4.7,
    office: "Văn phòng: Hà Nội",
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Tugo",
    hq: "TP.HCM",
    since: "2015",
    rating: 4.9,
    office: "Văn phòng: TP.HCM",
    link: "#"
  }
];

const TourFromVNSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="TourFromVNSection" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour từ Việt Nam
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-6 text-center"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Các loại Tour xuất phát từ Việt Nam và trở về Việt Nam, CÓ BAO GỒM cả Vé máy bay và Visa
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
              {tourProviders.map((provider, index) => (
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
                        <p className="text-gray-600 text-sm">ĐKKD: Việt Nam</p>
                        <p className="text-gray-600 text-sm">{provider.office}</p>
                        {provider.since && (
                          <p className="text-gray-600 text-sm">Since: {provider.since}</p>
                        )}
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center">
                          {renderStars(provider.rating)}
                          <span className="ml-2 text-sm text-gray-600">
                            {provider.rating} (500+ reviews)
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

export default TourFromVNSection;