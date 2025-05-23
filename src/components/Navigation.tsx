
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Cart from "@/components/Cart";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-white">
              Pitara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#collections"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Collections
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Cart />
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden space-x-4">
            <Cart />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="px-4 py-2 space-y-1 divide-y divide-gray-800">
            <a
              href="#home"
              className="block py-2 text-gray-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#collections"
              className="block py-2 text-gray-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-300 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
