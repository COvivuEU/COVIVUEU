import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCarouselProps {
  images: string[];
  alt: string;
}

const ServiceCarousel = ({ images, alt }: ServiceCarouselProps) => {
  // Create groups of 3 images for the carousel
  const imageGroups = [];
  
  // Ensure we have enough images to fill multiple slides
  const extendedImages = [...images];
  while (extendedImages.length < 9) {
    extendedImages.push(...images);
  }
  
  // Group images in sets of 3 for carousel
  for (let i = 0; i < extendedImages.length; i += 3) {
    if (i + 3 <= extendedImages.length) {
      imageGroups.push(extendedImages.slice(i, i + 3));
    }
  }
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === 0 ? imageGroups.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [imageGroups.length, isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev === imageGroups.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [imageGroups.length, isTransitioning]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(slideIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {imageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="min-w-full px-1">
              <div className="grid grid-cols-3 gap-4">
                {group.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md aspect-square">
                    <img 
                      src={image} 
                      alt={`${alt} image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Left Arrow */}
        <button 
          onClick={goToPrevious} 
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow-md z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        
        {/* Right Arrow */}
        <button 
          onClick={goToNext} 
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow-md z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>
      
      {/* Dots */}
      <div className="flex items-center justify-center mt-4 gap-2">
        {imageGroups.map((_, slideIndex) => (
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