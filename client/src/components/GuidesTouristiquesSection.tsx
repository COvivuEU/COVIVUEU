
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const countries = [
  {
    name: "PHÁP",
    flag: "https://flagcdn.com/fr.svg",
    link: "https://www.tubudd.com/locations/france"
  },
  {
    name: "Ý",
    flag: "https://flagcdn.com/it.svg",
    link: "https://www.tubudd.com/locations/italy"
  },
  {
    name: "ĐỨC",
    flag: "https://flagcdn.com/de.svg",
    link: "https://www.tubudd.com/locations/germany"
  },
  {
    name: "THỤY SĨ",
    flag: "https://flagcdn.com/ch.svg",
    link: "https://www.tubudd.com/locations/switzerland"
  },
  {
    name: "HÀ LAN",
    flag: "https://flagcdn.com/nl.svg",
    link: "https://www.tubudd.com/locations/netherlands"
  }
];

const GuidesTouristiquesSection = () => {
  return (
    <section id="guides" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-4 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour guide/Buddy Schengen
        </motion.h2>

        <motion.p 
          className="text-base md:text-lg text-gray-700 text-center mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Hướng dẫn viên/Bạn đồng hành bản địa người Việt tại các quốc gia Schengen
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
              {countries.map((country, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <a 
                    href={country.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 text-center transition-transform hover:scale-105"
                  >
                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <div className="relative pt-[56.25%] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1/4 h-auto">
                            <img
                              src={country.flag}
                              alt={`Flag of ${country.name}`}
                              className="w-full h-full object-contain shadow-lg rounded-md border-2 border-gray-200"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-semibold text-lg text-teal-600">{country.name}</h3>
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

export default GuidesTouristiquesSection;
