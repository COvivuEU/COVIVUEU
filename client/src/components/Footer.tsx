import { Link } from 'wouter';
import { Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                P
              </div>
              <span className="font-bold text-white text-xl">ProductName</span>
            </Link>
            <p className="mb-4">Building the future of productivity. Streamline your workflow and boost efficiency.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ProductName. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition mr-4">Privacy</a>
            <a href="#" className="text-sm hover:text-white transition mr-4">Terms</a>
            <a href="#" className="text-sm hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
