
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

const tourProviders = [
  {
    logo: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
    name: "COvivu",
    details: {
      dkkd: "Pháp",
      hq: "Trụ sở chính: Strasbourg",
      since: "2023",
      office: "Văn phòng: Paris, Hà Nội, TP.HCM"
    },
    rating: 4.8,
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "SmileTrip",
    details: {
      dkkd: "Pháp",
      hq: "Trụ sở chính: Paris",
      since: "2013",
      office: "Văn phòng: Hà Nội, Osaka (Nhật Bản), Paris (Pháp)"
    },
    rating: 4.7,
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Pacific Voyages",
    details: {
      dkkd: "Pháp",
      hq: "Trụ sở chính: Paris",
      since: "1992",
      office: "Văn phòng: Hà Nội, Paris (Pháp)"
    },
    rating: 4.9,
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Destino Việt Nam",
    details: {
      dkkd: "Tây Ban Nha",
      hq: "Trụ sở chính: Barcelona",
      since: "2020",
      office: ""
    },
    rating: 4.6,
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Dulich-Italia.com",
    details: {
      dkkd: "Ý",
      hq: "Trụ sở chính: Rome",
      since: "2023",
      office: ""
    },
    rating: 4.8,
    link: "#"
  }
];

const PrivateTourSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="private-tour" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour thiết kế/Private
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
                      <div className="space-y-0.5">
                        <p className="text-gray-600 text-sm">ĐKKD: {provider.details.dkkd}</p>
                        <p className="text-gray-600 text-sm">{provider.details.hq}</p>
                        {provider.details.since && (
                          <p className="text-gray-600 text-sm">Since: {provider.details.since}</p>
                        )}
                        {provider.details.office && (
                          <p className="text-gray-600 text-sm">{provider.details.office}</p>
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

export default PrivateTourSection;
