
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
    name: "World Trip",
    description: "Chuyên tổ chức các tour du lịch khám phá châu Âu từ Việt Nam",
    rating: 4.5,
    reviews: "500+",
    features: ["Chuyên nghiệp", "Nhiều kinh nghiệm", "Dịch vụ tận tâm"],
    since: "2010"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Lữ Việt",
    description: "Đồng hành cùng bạn trong mọi hành trình khám phá châu Âu",
    rating: 4.8,
    reviews: "1K+",
    features: ["Đa dạng tour", "Giá cả hợp lý", "Hướng dẫn viên chuyên nghiệp"],
    since: "1995"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Inno Tour",
    description: "Tour du lịch châu Âu chất lượng cao với trải nghiệm độc đáo",
    rating: 4.6,
    reviews: "300+",
    features: ["Sáng tạo", "Linh hoạt", "Chi phí tốt"],
    since: "2017"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "TransViet",
    description: "Khám phá châu Âu với dịch vụ du lịch đẳng cấp 5 sao",
    rating: 4.7,
    reviews: "800+",
    features: ["Sang trọng", "An toàn", "Tiện nghi"],
    since: "1996"
  },
  {
    logo: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    name: "Tugo",
    description: "Tour du lịch châu Âu theo phong cách trẻ trung, năng động",
    rating: 4.9,
    reviews: "1K+",
    features: ["Hiện đại", "Năng động", "Giá tốt"],
    since: "2015"
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
    <section id="TourFromVNSection" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4 uppercase"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour từ Việt Nam
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto leading-relaxed"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Khám phá châu Âu với các tour trọn gói từ Việt Nam, bao gồm vé máy bay và visa
        </motion.p>
        
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {tourProviders.map((provider, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden mx-2 h-full flex flex-col transition-all hover:shadow-lg">
                    <div className="relative h-52">
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                        <p className="text-sm font-medium">Since {provider.since}</p>
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold">{provider.name}</h3>
                      <p className="text-gray-600 text-sm mt-2">{provider.description}</p>
                      
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-2">
                          {renderStars(provider.rating)}
                          <span className="text-sm text-gray-600">
                            {provider.rating} ({provider.reviews} đánh giá)
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {provider.features.map((feature, i) => (
                            <span 
                              key={i}
                              className="px-2.5 py-0.5 bg-teal-50 text-teal-700 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full mt-auto bg-teal-600 text-white py-2.5 rounded-lg hover:bg-teal-700 transition-colors">
                        Xem chi tiết
                      </button>
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
