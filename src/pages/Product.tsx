
import Navigation from "@/components/Navigation";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";

const Product = () => {
  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <Navigation />
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default Product;
