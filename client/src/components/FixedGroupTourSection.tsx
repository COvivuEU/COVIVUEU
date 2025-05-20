
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
    name: "SmileTrip",
    details: {
      dkkd: "Pháp",
      hq: "Trụ sở chính: Paris",
      since: "2013",
      office: "Văn phòng: Hà Nội, Osaka (Nhật Bản), Paris (Pháp)"
    },
    rating: 4.8,
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Hermes Voyages",
    details: {
      dkkd: "Séc",
      hq: "Trụ sở chính: Praha",
      since: "2023",
      office: ""
    },
    rating: 4.7,
    link: "#"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Du lịch Paris",
    details: {
      dkkd: "Pháp",
      hq: "Trụ sở chính: Paris",
      since: "2022",
      office: ""
    },
    rating: 4.6,
    link: "#"
  }
];

const FixedGroupTourSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="fixed-group-tour" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour ghép cố định
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
                        <h3 className="font-semibold text-lg mb-1">{provider.name}</h3>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-0.5">ĐKKD: {provider.details.dkkd}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-0.5">{provider.details.hq}</p>
                        {provider.details.since && (
                          <p className="text-gray-600 text-sm leading-relaxed mb-0.5">Since: {provider.details.since}</p>
                        )}
                        {provider.details.office && (
                          <p className="text-gray-600 text-sm leading-relaxed">{provider.details.office}</p>
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

export default FixedGroupTourSection;
