
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Insurance = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold mb-8"
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
          >
            Bảo hiểm Du lịch
          </motion.h1>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Chọn gói bảo hiểm</h2>
              {/* Add insurance package selection here */}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insurance;
