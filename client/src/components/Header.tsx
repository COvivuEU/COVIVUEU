import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center text-2xl font-bold">
              <span className="text-gray-900">COvivu</span>
              <span className="text-teal-600">EU</span>
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 inline-flex items-center justify-center focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors">
              Trang chủ
            </a>
            <a href="#services" className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors">
              Dịch vụ
            </a>
            <a href="#devenir-partenaire" className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors">
              Trở thành đối tác
            </a>
            <a href="#contact" className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors">
              Liên hệ
            </a>
          </nav>
        </div>

        {/* Mobile navigation menu */}
        <div className={`md:hidden bg-white border-t border-gray-200 absolute w-full animate-fade-in ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Dịch vụ
            </a>
            <a 
              href="#devenir-partenaire" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Trở thành đối tác
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}