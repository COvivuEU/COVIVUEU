import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const tourTypes = [
  {
    title: "Land Tour trọn gói",
    description: "Khám phá châu Âu với hành trình trọn gói",
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
      <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </div>
  },
  {
    title: "City Tour Thành phố",
    description: "Khám phá các thành phố lớn châu Âu",
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
      <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 20h16" />
        <path d="M4 20V4h8v16" />
        <path d="M12 4l8 4v12" />
        <path d="M8 8h.01" />
        <path d="M8 12h.01" />
        <path d="M8 16h.01" />
        <path d="M16 12h.01" />
        <path d="M16 16h.01" />
      </svg>
    </div>
  },
  {
    title: "Day Tour vùng lân cận",
    description: "Khám phá vùng ngoại ô và làng mạc châu Âu",
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
      <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
      </svg>
    </div>
  },
  {
    title: "Tour Trải nghiệm đặc biệt",
    description: "Trải nghiệm độc đáo và khó quên tại châu Âu",
    icon: <div className="flex justify-center items-center w-10 h-10 border border-teal-600 rounded-md">
      <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        <path d="M18 2l1 2" />
        <path d="M22 6l-2 1" />
        <path d="M6 2L5 4" />
        <path d="M2 6l2 1" />
      </svg>
    </div>
  }
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tour Du Lịch
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tourTypes.map((tour, index) => (
            <motion.div 
              key={index}
              className="group flex flex-col items-center justify-center border border-gray-200 rounded-md p-6 hover:shadow-md transition-shadow cursor-pointer"
              variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
              onClick={() => {
                const sectionMap = {
                  "Land Tour trọn gói": "land-tour",
                  "City Tour Thành phố": "city-tour",
                  "Day Tour vùng lân cận": "day-tour",
                  "Tour Trải nghiệm đặc biệt": "special-tour"
                };
                const element = document.getElementById(sectionMap[tour.title]);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="flex justify-center items-center mb-4">
                {tour.icon}
              </div>
              <h3 className="text-center text-gray-900 font-medium mb-2">
                {tour.title}
              </h3>
              <p className="text-center text-gray-600 text-sm">
                {tour.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToursSection;