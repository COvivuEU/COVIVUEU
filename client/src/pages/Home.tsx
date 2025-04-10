import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ['/api/waitlist/count'],
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const waitlistCount = data?.count || 1200;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-16">
        <Hero waitlistCount={waitlistCount} />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
