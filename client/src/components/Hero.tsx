import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface HeroProps {
  waitlistCount: number;
}

export default function Hero({ waitlistCount = 1200 }: HeroProps) {
  return (
    <section className="pt-20 md:pt-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionize Your <span className="text-primary">Workflow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              A powerful new tool designed to streamline your process, boost productivity, and transform how you work. Be the first to know when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#waitlist">
                <Button size="lg">Join the Waitlist</Button>
              </a>
              <a href="#features">
                <Button variant="outline" size="lg">Learn More</Button>
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white w-8 h-8">
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-8 h-8">
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-8 h-8">
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-gray-600 text-sm">
                Join {waitlistCount.toLocaleString()}+ people on the waitlist
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <svg 
                viewBox="0 0 1120 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <rect width="1120" height="600" fill="#F8FAFC" />
                <rect x="40" y="40" width="1040" height="60" rx="8" fill="white" />
                <rect x="60" y="60" width="180" height="20" rx="4" fill="#E2E8F0" />
                <rect x="860" y="60" width="100" height="20" rx="4" fill="#E2E8F0" />
                <rect x="980" y="60" width="80" height="20" rx="4" fill="#3B82F6" />
                <rect x="40" y="120" width="320" height="440" rx="8" fill="white" />
                <rect x="60" y="140" width="280" height="20" rx="4" fill="#E2E8F0" />
                <rect x="60" y="180" width="280" height="60" rx="4" fill="#EFF6FF" />
                <rect x="80" y="200" width="180" height="10" rx="2" fill="#93C5FD" />
                <rect x="80" y="220" width="240" height="10" rx="2" fill="#93C5FD" />
                <rect x="60" y="260" width="280" height="60" rx="4" fill="white" />
                <rect x="80" y="280" width="180" height="10" rx="2" fill="#E2E8F0" />
                <rect x="80" y="300" width="240" height="10" rx="2" fill="#E2E8F0" />
                <rect x="60" y="340" width="280" height="60" rx="4" fill="white" />
                <rect x="80" y="360" width="180" height="10" rx="2" fill="#E2E8F0" />
                <rect x="80" y="380" width="240" height="10" rx="2" fill="#E2E8F0" />
                <rect x="60" y="420" width="280" height="60" rx="4" fill="white" />
                <rect x="80" y="440" width="180" height="10" rx="2" fill="#E2E8F0" />
                <rect x="80" y="460" width="240" height="10" rx="2" fill="#E2E8F0" />
                <rect x="60" y="500" width="280" height="40" rx="4" fill="#3B82F6" />
                <rect x="140" y="515" width="120" height="10" rx="2" fill="white" />
                <rect x="380" y="120" width="700" height="240" rx="8" fill="white" />
                <rect x="400" y="140" width="200" height="24" rx="4" fill="#E2E8F0" />
                <rect x="400" y="184" width="660" height="10" rx="2" fill="#E2E8F0" />
                <rect x="400" y="204" width="620" height="10" rx="2" fill="#E2E8F0" />
                <rect x="400" y="224" width="640" height="10" rx="2" fill="#E2E8F0" />
                <rect x="400" y="264" width="340" height="40" rx="4" fill="#EFF6FF" />
                <rect x="420" y="279" width="180" height="10" rx="2" fill="#3B82F6" />
                <rect x="380" y="380" width="340" height="180" rx="8" fill="white" />
                <rect x="400" y="400" width="160" height="24" rx="4" fill="#E2E8F0" />
                <path d="M400 454.5C400 450.91 402.91 448 406.5 448H693.5C697.09 448 700 450.91 700 454.5C700 458.09 697.09 461 693.5 461H406.5C402.91 461 400 458.09 400 454.5Z" fill="#E2E8F0" />
                <path d="M400 494.5C400 490.91 402.91 488 406.5 488H693.5C697.09 488 700 490.91 700 494.5C700 498.09 697.09 501 693.5 501H406.5C402.91 501 400 498.09 400 494.5Z" fill="#E2E8F0" />
                <path d="M400 534.5C400 530.91 402.91 528 406.5 528H693.5C697.09 528 700 530.91 700 534.5C700 538.09 697.09 541 693.5 541H406.5C402.91 541 400 538.09 400 534.5Z" fill="#E2E8F0" />
                <rect x="740" y="380" width="340" height="180" rx="8" fill="white" />
                <rect x="760" y="400" width="300" height="140" rx="4" fill="#EFF6FF" />
                <circle cx="810" cy="470" r="30" fill="#3B82F6" fillOpacity="0.4" />
                <circle cx="950" cy="470" r="60" fill="#3B82F6" fillOpacity="0.7" />
              </svg>
            </div>
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/3 -left-12 w-24 h-24 bg-primary rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
}
