
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Bridal Lehengas",
      description: "Exquisite bridal wear for your special day",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹25,000 onwards"
    },
    {
      id: 2,
      title: "Silk Sarees",
      description: "Timeless silk sarees for every occasion",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹8,000 onwards"
    },
    {
      id: 3,
      title: "Festive Suits",
      description: "Designer suits for festive celebrations",
      image: "https://images.unsplash.com/photo-1594736797933-d0a9ba14ae7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹5,000 onwards"
    },
    {
      id: 4,
      title: "Indo-Western",
      description: "Modern fusion wear with traditional touch",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹3,500 onwards"
    },
    {
      id: 5,
      title: "Cotton Kurtas",
      description: "Comfortable everyday traditional wear",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹1,200 onwards"
    },
    {
      id: 6,
      title: "Accessories",
      description: "Traditional jewelry and accessories",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹500 onwards"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From timeless classics to contemporary designs, explore our carefully curated collection of traditional Indian wear
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">
                    {item.price}
                  </span>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    View Collection
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
