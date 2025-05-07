
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const SpecialTourSection = () => {
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
          Tour Trải nghiệm đặc biệt
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Trải nghiệm độc đáo và khó quên tại châu Âu
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
              {["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
                "https://images.unsplash.com/photo-1504150558240-0b4fd8946624",
                "https://images.unsplash.com/photo-1519677100203-a0e668c92439"].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image}
                      alt={`Special Tour ${index + 1}`}
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

export default SpecialTourSection;
