
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const CityTourSection = () => {
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
          City Tour Thành phố
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Khám phá các thành phố lớn châu Âu
        </motion.p>
        
        <motion.div 
          className="w-full"
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {["https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
                "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
                "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image}
                      alt={`City Tour ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default CityTourSection;
