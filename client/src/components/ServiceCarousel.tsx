import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCarouselProps {
  images: string[];
  alt: string;
}

// This component now displays 3 images in a row instead of a carousel
const ServiceCarousel = ({ images, alt }: ServiceCarouselProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.slice(0, 3).map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md aspect-square">
            <img 
              src={image} 
              alt={`${alt} image ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Dots for indication only, no longer interactive */}
      <div className="flex items-center justify-center mt-4 gap-2">
        {[0, 1, 2, 3, 4].map((dotIndex) => (
          <div
            key={dotIndex}
            className={`h-2 w-2 rounded-full ${
              dotIndex === 0 ? 'bg-teal-600 w-3' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;