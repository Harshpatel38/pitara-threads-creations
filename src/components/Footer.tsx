
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Pitara</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              By Kajal & Prafula - Your treasure chest of traditional Indian clothing. 
              Celebrating heritage through timeless fashion.
            </p>
            <p className="text-sm text-gray-500">
              Made with <Heart className="inline h-4 w-4 text-red-400" /> in India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Bridal Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Silk Sarees</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Festive Suits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pitara by Kajal & Prafula. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
