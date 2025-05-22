
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon, ShieldCheck, Clock, HeartPulse, Plane, Briefcase, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const insuranceProviders = [
  {
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826",
    title: "Bảo hiểm Du lịch Cơ bản",
    provider: "Liberty Insurance",
    rating: 4.7,
    bookings: "3K+ đã đặt",
    price: "100€",
    duration: "Tối đa 180 ngày",
    description: "Bảo hiểm cơ bản cho chuyến du lịch châu Âu",
    coverage: "30.000€",
    features: [
      "Tai nạn cá nhân đến 30.000€",
      "Chi phí y tế khẩn cấp",
      "Hủy chuyến đi",
      "Mất hành lý & giấy tờ",
      "Trợ giúp 24/7"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    title: "Bảo hiểm Du lịch VIP",
    provider: "Bảo Việt Insurance",
    rating: 4.9,
    bookings: "1K+ đã đặt",
    price: "350€",
    duration: "Tối đa 365 ngày",
    description: "Bảo hiểm toàn diện với hỗ trợ y tế 24/7",
    coverage: "100.000€",
    features: [
      "Tai nạn cá nhân đến 100.000€",
      "Chi phí y tế & Nha khoa khẩn cấp",
      "Hủy & Gián đoạn chuyến đi",
      "Mất hành lý & Giấy tờ cá nhân",
      "Trách nhiệm cá nhân",
      "Hỗ trợ y tế & Du lịch 24/7"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    title: "Bảo hiểm Gia đình",
    provider: "PVI Insurance",
    rating: 4.8,
    bookings: "2K+ đã đặt",
    price: "330€",
    duration: "Tối đa 90 ngày",
    description: "Bảo hiểm cho cả gia đình với ưu đãi đặc biệt",
    coverage: "50.000€",
    features: [
      "Bảo hiểm cho cả gia đình (4 người)",
      "Chi phí y tế khẩn cấp",
      "Hủy chuyến đi",
      "Mất hành lý",
      "Tai nạn cá nhân",
      "Hỗ trợ đa ngôn ngữ 24/7"
    ]
  }
];

const benefits = [
  {
    icon: HeartPulse,
    title: "Chăm sóc Y tế",
    description: "Chi trả chi phí y tế, nha khoa khẩn cấp trong suốt chuyến đi"
  },
  {
    icon: Plane,
    title: "Hủy chuyến",
    description: "Bồi thường khi phải hủy hoặc gián đoạn chuyến đi"
  },
  {
    icon: Briefcase,
    title: "Hành lý",
    description: "Bảo vệ hành lý, tư trang và giấy tờ cá nhân"
  },
  {
    icon: Phone,
    title: "Hỗ trợ 24/7",
    description: "Đường dây nóng hỗ trợ khẩn cấp 24/7 đa ngôn ngữ"
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
              Bảo hiểm Du lịch Châu Âu
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

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-2xl font-bold text-center mb-8"
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
            >
              Quyền lợi bảo hiểm
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <benefit.icon className="h-10 w-10 text-teal-600 mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-2xl font-bold text-center mb-8"
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
            >
              Gói bảo hiểm phổ biến
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
                          <p className="text-teal-600 font-medium text-sm mb-2">{provider.provider}</p>
                          <div className="flex items-center gap-2 mb-3">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{provider.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Bảo hiểm tối đa: {provider.coverage}</span>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            {provider.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-sm text-gray-600">
                                <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                                {feature}
                              </div>
                            ))}
                          </div>

                          <div className="mt-auto">
                            <p className="text-xl font-semibold text-teal-600 mb-4">Từ {provider.price}</p>
                            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                              <div className="flex items-center gap-2">
                                {renderStars(provider.rating)}
                                <span className="text-sm text-gray-600">
                                  {provider.rating}
                                </span>
                              </div>
                              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                                Đặt ngay
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
