
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const insuranceProviders = [
  {
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826",
    title: "Bảo hiểm Du lịch Cơ bản",
    rating: 4.7,
    bookings: "3K+ đã đặt",
    price: "100€",
    description: "Bảo hiểm cơ bản cho chuyến du lịch châu Âu",
    features: ["Tai nạn cá nhân", "Chi phí y tế", "Hủy chuyến"]
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    title: "Bảo hiểm Du lịch VIP",
    rating: 4.9,
    bookings: "1K+ đã đặt",
    price: "350€",
    description: "Bảo hiểm toàn diện với hỗ trợ y tế 24/7",
    features: ["Tai nạn cá nhân", "Chi phí y tế", "Hủy chuyến", "Mất hành lý", "Trách nhiệm cá nhân"]
  },
  {
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    title: "Bảo hiểm Gia đình",
    rating: 4.8,
    bookings: "2K+ đã đặt",
    price: "330€",
    description: "Bảo hiểm cho cả gia đình với ưu đãi đặc biệt",
    features: ["Bảo hiểm theo nhóm", "Chi phí y tế", "Hủy chuyến", "Mất hành lý"]
  }
];

const Insurance = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-r from-teal-600 to-teal-700">
          <div className="container mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
            >
              Bảo hiểm Du lịch
            </motion.h1>
            <motion.p 
              className="text-xl text-white text-center opacity-90"
              variants={fadeIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
            >
              An tâm tận hưởng chuyến du lịch với bảo hiểm toàn diện
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full"
            >
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {insuranceProviders.map((provider, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        <div className="relative pt-[56.25%] overflow-hidden">
                          <img
                            src={provider.image}
                            alt={provider.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="font-semibold text-lg mb-2">{provider.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{provider.description}</p>
                          
                          <div className="space-y-2 mb-4">
                            {provider.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-sm text-gray-600">
                                <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                                {feature}
                              </div>
                            ))}
                          </div>

                          <div className="mt-auto">
                            <p className="text-xl font-semibold text-teal-600 mb-4">{provider.price}</p>
                            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                              <div className="flex items-center gap-2">
                                {renderStars(provider.rating)}
                                <span className="text-sm text-gray-600">
                                  {provider.rating}
                                </span>
                              </div>
                              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                                Chi tiết
                              </button>
                            </div>
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
      </main>

      <Footer />
    </div>
  );
};

export default Insurance;
