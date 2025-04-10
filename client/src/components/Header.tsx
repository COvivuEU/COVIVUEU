import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold">
            P
          </div>
          <span className="font-bold text-gray-900 text-xl">ProductName</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-gray-600">
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition">How it works</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </nav>
        
        <a href="#waitlist">
          <Button size="sm">Join Waitlist</Button>
        </a>
        
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-gray-700"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-in slide-in-from-top">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="py-2 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="py-2 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </a>
            <a 
              href="#faq" 
              className="py-2 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
