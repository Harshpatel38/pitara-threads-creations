
import { Users, Award, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              About Pitara
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded by <span className="font-semibold text-primary">Kajal and Prafula</span>, 
              Pitara is more than just a clothing brand – it's a celebration of India's rich textile heritage. 
              Our name "Pitara" means treasure chest, and that's exactly what we offer – 
              a treasure trove of beautiful traditional clothing.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every piece in our collection is carefully selected to represent the finest craftsmanship, 
              ensuring that modern women can embrace their cultural roots while expressing their individual style.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Unique Designs</div>
              </div>
            </div>
          </div>

          {/* Image and Values */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Traditional Indian clothing"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>

            {/* Our Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-gray-900">Our Values</h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Authenticity</h4>
                  <p className="text-gray-600 text-sm">Preserving traditional craftsmanship and techniques</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality</h4>
                  <p className="text-gray-600 text-sm">Using only the finest fabrics and materials</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community</h4>
                  <p className="text-gray-600 text-sm">Supporting local artisans and their families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
