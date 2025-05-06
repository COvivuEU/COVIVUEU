import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">
                <span className="text-gray-900">COvivu</span>
                <span className="text-teal-600">EU</span>
              </span>
            </div>
            <p className="mt-4 text-gray-600">
              Đi châu Âu - Khó gì đâu!
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Truy cập nhanh</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-teal-600 transition-colors">Trang chủ</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">Dịch vụ</a></li>
              <li><a href="#devenir-partenaire" className="text-gray-600 hover:text-teal-600 transition-colors">Trở thành đối tác</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-teal-600" />
                <span>covivueu@covivu.com</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 text-teal-600" />
                <span>+33 (0)7 45 19 84 88</span>
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-teal-600" />
                <span>Strasbourg, Paris, Hà Nội</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} COvivuEU. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
