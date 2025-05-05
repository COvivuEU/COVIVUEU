
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { StarIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const visaServices = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    title: "Visa Du Lịch Châu Âu",
    price: "US$150",
    rating: 4.7,
    bookings: "3K+ đã đặt",
    description: "Dịch vụ visa trọn gói, hỗ trợ 24/7, tỷ lệ đậu cao",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Visa VIP Express",
    price: "US$295.37",
    rating: 4.9,
    bookings: "10K+ đã đặt",
    description: "Dịch vụ visa nhanh, ưu tiên xét duyệt",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Visa Doanh Nghiệp",
    price: "US$200",
    rating: 4.8,
    bookings: "5K+ đã đặt",
    description: "Chuyên visa thương mại và công tác",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1526151755583-8737f135a046?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    title: "Visa Du Học",
    price: "US$180",
    rating: 4.9,
    bookings: "2K+ đã đặt",
    description: "Hỗ trợ visa du học các nước châu Âu",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1521920592574-49e0b121c964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Visa Schengen",
    price: "US$165",
    rating: 4.8,
    bookings: "8K+ đã đặt",
    description: "Visa khối Schengen, đi lại tự do châu Âu",
    instant: true
  },
  {
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Visa Định Cư",
    price: "US$500",
    rating: 4.9,
    bookings: "1K+ đã đặt",
    description: "Tư vấn và hỗ trợ visa định cư châu Âu",
    instant: false
  }
];

const VisaServiceSection = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="visa-service" className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Dịch Vụ Visa
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Đồng hành cùng bạn trong mọi thủ tục visa
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
              {visaServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full mx-2">
                    <div className="relative h-48">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <div className="flex items-center mb-2">
                        {renderStars(service.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {service.rating} ({service.bookings})
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-teal-600">
                          từ {service.price}
                        </span>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors">
                          Đặt ngay
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

export default VisaServiceSection;
