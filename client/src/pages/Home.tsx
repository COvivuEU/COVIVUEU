import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VisaServiceSection from "@/components/VisaServiceSection";
import VietDriverSection from "@/components/VietDriverSection";
import ToursSection from "@/components/ToursSection";
import HomestaySection from "@/components/HomestaySection";
import GuidesTouristiquesSection from "@/components/GuidesTouristiquesSection";
import TourFromVNSection from "@/components/TourFromVNSection";
import EuropeanTourSection from "@/components/EuropeanTourSection";
import RestaurantsSection from "@/components/RestaurantsSection";
import PartnersSection from "@/components/PartnersSection";
import LandTourSection from "@/components/LandTourSection"; // Added import
import CityTourSection from "@/components/CityTourSection"; // Added import
import DayTourSection from "@/components/DayTourSection"; // Added import
import SpecialTourSection from "@/components/SpecialTourSection"; // Added import
import VietnameseRestaurantSection from "@/components/VietnameseRestaurantSection"; // Added import
import EuropeanRestaurantSection from "@/components/EuropeanRestaurantSection"; // Added import

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
        <VietDriverSection />
        <ToursSection />
        <div id="land-tour"><LandTourSection /></div>
        <div id="city-tour"><CityTourSection /></div>
        <div id="day-tour"><DayTourSection /></div>
        <div id="special-tour"><SpecialTourSection /></div>
        <HomestaySection />
        <GuidesTouristiquesSection />
        <CartesSimSection />
        <TourFromVNSection />
        <EuropeanTourSection />
        <RestaurantsSection />
        <div id="VietnameseRestaurant"><VietnameseRestaurantSection /></div>
        <div id="EuropeanRestaurant"><EuropeanRestaurantSection /></div>
        <PartnersSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;