import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold">
                <span className="text-gray-900">COvivu</span>
                <span className="text-teal-600">EU</span>
              </a>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-8">
              <a href="/" className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors">
                Accueil
              </a>
              <a href="#services" className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors">
                Services
              </a>
              <a href="#devenir-partenaire" className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors">
                Devenir Partenaire
              </a>
              <a href="#contact" className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors">
                Contact
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              type="button" 
              className="inline-flex items-center justify-center md:hidden" 
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        <div className={`md:hidden bg-white border-t border-gray-200 absolute w-full animate-fade-in ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#devenir-partenaire" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Devenir Partenaire
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
