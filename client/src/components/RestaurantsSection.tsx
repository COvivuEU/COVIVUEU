
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const cities = [
  {
    name: "Paris",
    //country: "PHÁP",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    link: "/restaurants"
  },
  {
    name: "Venice",
    //country: "Ý",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
    link: "/restaurants"
  },
  {
    name: "Zurich",
    //country: "THỤY SĨ",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
    link: "/restaurants"
  },
  {
    name: "Interlaken",
    //country: "THỤY SĨ", 
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
    link: "/restaurants"
  },
  {
    name: "Frankfurt",
    //country: "ĐỨC",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    link: "/restaurants"
  }
];

const RestaurantsSection = () => {
  return (
    <section id="restaurants" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-4 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Nhà Hàng
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 text-center mb-8 italic"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Khám phá ẩm thực tại các thành phố nổi tiếng châu Âu
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
              {cities.map((city, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <a 
                    href={city.link}
                    className="block p-4 text-center transition-transform hover:scale-105"
                  >
                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <div className="relative pt-[56.25%] overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-16 flex items-center justify-center">
                            <img
                              src={city.flag}
                              alt={`Flag of ${city.country}`}
                              className="w-full h-full object-contain shadow-[2px_4px_12px_rgba(0,0,0,0.2)] rounded-sm transform hover:scale-105 transition-transform duration-300 animate-[wave_6s_ease-in-out_infinite]"
                              style={{
                                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-semibold text-lg text-teal-600">{city.name}</h3>
                        <p className="text-sm text-gray-600">{city.country}</p>
                      </div>
                    </div>
                  </a>
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

export default RestaurantsSection;
