
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetClose, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger
} from "@/components/ui/sheet";
import { ShoppingCart, X, Plus, Minus, ShoppingBag } from "lucide-react";

interface CartItem {
  id: number;
  title: string;
  price: string;
  image: string;
  size: string;
  quantity: number;
}

const Cart = () => {
  // Demo cart items - in a real app, this would be managed with context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 2,
      title: "Silk Saree",
      price: "₹8,000",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      size: "Free Size",
      quantity: 1
    },
    {
      id: 5,
      title: "Cotton Kurta",
      price: "₹1,200",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      size: "M",
      quantity: 2
    }
  ]);

  const increaseQuantity = (id: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id && item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
      return total + price * item.quantity;
    }, 0).toLocaleString('en-IN');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-serif">Your Shopping Bag</SheetTitle>
        </SheetHeader>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-grow py-10">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Your shopping bag is empty</p>
            <SheetClose asChild>
              <Button className="mt-4 bg-primary hover:bg-primary/90">
                Continue Shopping
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-auto py-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 py-4 border-b">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.title}</h3>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-2">Size: {item.size}</p>
                    <p className="font-semibold text-primary">{item.price}</p>
                    
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="p-1 border rounded-l-md"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 py-1 border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="p-1 border rounded-r-md"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{calculateTotal()}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between py-2 text-lg font-bold">
                <span>Total</span>
                <span>₹{calculateTotal()}</span>
              </div>
              
              <Button className="w-full mt-4 py-6 bg-primary hover:bg-primary/90">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
