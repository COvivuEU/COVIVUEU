import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VisaServiceSection from "@/components/VisaServiceSection";
import AssuranceVoyageSection from "@/components/AssuranceVoyageSection";
import BilletsAvionSection from "@/components/BilletsAvionSection";
import ToursSection from "@/components/ToursSection";
import HomestaySection from "@/components/HomestaySection";
import GuidesTouristiquesSection from "@/components/GuidesTouristiquesSection";
import CartesSimSection from "@/components/CartesSimSection";
import RestaurantsSection from "@/components/RestaurantsSection";
import PartnersSection from "@/components/PartnersSection";

const Home = () => {
  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <VisaServiceSection />
        <AssuranceVoyageSection />
        <BilletsAvionSection />
        <ToursSection />
        <HomestaySection />
        <GuidesTouristiquesSection />
        <CartesSimSection />
        <RestaurantsSection />
        <PartnersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
