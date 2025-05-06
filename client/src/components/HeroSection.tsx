
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerImages = [
  "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0 h-[400px] md:h-[500px]">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={image} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 h-[400px] md:h-[500px]">
        <button 
          onClick={goToPrev} 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={goToNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
