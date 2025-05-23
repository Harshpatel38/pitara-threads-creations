
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ChevronLeft, Check } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  sizes: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [addedToCart, setAddedToCart] = useState(false);
  
  // This would normally come from an API or database
  const products = [
    {
      id: 1,
      title: "Bridal Lehengas",
      description: "Exquisite bridal wear for your special day. Crafted with premium fabrics and intricate handwork, our bridal lehengas represent the pinnacle of traditional craftsmanship blended with contemporary designs.",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹25,000",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      title: "Silk Sarees",
      description: "Timeless silk sarees for every occasion. Our collection features authentic silk sarees from various regions of India, each telling a unique story through its weave and motifs.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹8,000",
      sizes: ["Free Size"]
    },
    {
      id: 3,
      title: "Festive Suits",
      description: "Designer suits for festive celebrations. These meticulously crafted suits combine traditional aesthetics with modern silhouettes, perfect for making a statement at any festive gathering.",
      image: "https://images.unsplash.com/photo-1594736797933-d0a9ba14ae7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹5,000",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 4,
      title: "Indo-Western",
      description: "Modern fusion wear with traditional touch. Our Indo-Western collection bridges the gap between traditional elegance and contemporary fashion, offering versatile pieces for the modern woman.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹3,500",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 5,
      title: "Cotton Kurtas",
      description: "Comfortable everyday traditional wear. Made from the finest cotton, these kurtas offer breathable comfort without compromising on style, making them perfect for daily wear.",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹1,200",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      title: "Accessories",
      description: "Traditional jewelry and accessories. Complete your look with our curated selection of traditional jewelry and accessories that add the perfect finishing touch to any outfit.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹500",
      sizes: ["One Size"]
    }
  ];

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold">Product Not Found</h2>
          <Button variant="outline" className="mt-4" onClick={() => navigate('/')}>
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    // For now, we'll just show a success message
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center text-gray-600" 
        onClick={() => navigate('/')}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Collections
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-[500px] object-cover"
          />
          <Button 
            size="icon" 
            variant="secondary" 
            className="absolute top-4 right-4 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-serif font-bold text-gray-900">{product.title}</h1>
          <p className="text-2xl font-semibold text-primary">{product.price}</p>
          
          <div className="border-t border-b py-4 my-6">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Select Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <Button 
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className={`rounded-md ${selectedSize === size ? 'bg-primary text-white' : 'border-gray-300'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <div className="pt-6">
            <Button 
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90 transition-all"
              onClick={handleAddToCart}
              disabled={!selectedSize && product.sizes[0] !== "Free Size" && product.sizes[0] !== "One Size"}
            >
              {addedToCart ? (
                <span className="flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  Added to Cart
                </span>
              ) : (
                <span className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </span>
              )}
            </Button>
          </div>
          
          {/* Delivery Info */}
          <div className="bg-gray-50 p-4 rounded-md mt-6">
            <p className="text-sm text-gray-600">
              Free delivery on orders above ₹2,500. 7-day return policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
