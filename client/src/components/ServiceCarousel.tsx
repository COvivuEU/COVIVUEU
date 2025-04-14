import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCarouselProps {
  images: string[];
  alt: string;
}

const ServiceCarousel = ({ images, alt }: ServiceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
        <img 
          src={images[currentIndex]} 
          alt={`${alt} slide ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-all duration-300"
        />
        
        {/* Left Arrow */}
        <button 
          onClick={goToPrevious} 
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        
        {/* Right Arrow */}
        <button 
          onClick={goToNext} 
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>
      
      {/* Dots */}
      <div className="flex items-center justify-center mt-4 gap-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === slideIndex ? 'bg-teal-600 w-3' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;