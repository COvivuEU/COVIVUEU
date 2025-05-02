
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const steps = [
  {
    number: 1,
    title: "Đăng ký",
    description: "Tham gia danh sách chờ để trở thành một trong những người đầu tiên trải nghiệm dịch vụ của chúng tôi. Chúng tôi sẽ thông báo cho bạn ngay khi có sẵn."
  },
  {
    number: 2,
    title: "Tùy chỉnh trải nghiệm của bạn",
    description: "Khi bạn có quyền truy cập, hãy thiết lập không gian làm việc của bạn theo nhu cầu và sở thích cụ thể."
  },
  {
    number: 3,
    title: "Nâng cao hiệu suất",
    description: "Trải nghiệm sức mạnh đầy đủ của dịch vụ và xem hiệu suất của bạn tăng vọt. Hợp tác, tự động hóa và đạt được nhiều hơn."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cách thức hoạt động
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Đơn giản, trực quan và được thiết kế để đạt hiệu quả tối đa.
          </p>
        </motion.div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          
          <div className="relative flex justify-center">
            <span className="bg-slate-50 px-4 text-sm text-slate-500">
              Thực hiện theo các bước đơn giản sau
            </span>
          </div>
        </div>
        
        <motion.div 
          className="mt-16 grid gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100"
              variants={fadeIn("up", "tween", 0.2 + (index * 0.2), 1)}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
