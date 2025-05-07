
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const LandTourSection = () => {
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
          Land Tour trọn gói
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Khám phá châu Âu với hành trình trọn gói
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
              {["https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
                "https://images.unsplash.com/photo-1533105079780-92b9be482077",
                "https://images.unsplash.com/photo-1534777367038-9404f45b869a"].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image}
                      alt={`Land Tour ${index + 1}`}
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

export default LandTourSection;
