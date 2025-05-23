
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-primary rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6">
          Traditional Elegance
          <span className="block text-primary">Redefined</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the timeless beauty of traditional Indian clothing curated by Kajal and Prafula. 
          Each piece in our pitara tells a story of heritage, craftsmanship, and modern elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Explore Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg">
            Our Story
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto opacity-60">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary font-serif text-xl">✨</span>
            </div>
            <p className="text-sm text-gray-600">Handpicked</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-accent font-serif text-xl">🏆</span>
            </div>
            <p className="text-sm text-gray-600">Premium Quality</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary font-serif text-xl">❤️</span>
            </div>
            <p className="text-sm text-gray-600">Made with Love</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
