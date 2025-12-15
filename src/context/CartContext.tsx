import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';
import { toast } from '@/hooks/use-toast';

interface CartItem {
  product: Product;
  quantity: number;
  selectedFlavor?: string;
  selectedSize?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, flavor?: string, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartSubtotal: () => number;
  getGST: () => number;
  getItemCount: () => number;
  hkCash: number;
  useHkCash: boolean;
  setUseHkCash: (use: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const GST_RATE = 0.05; // 5% GST
const HK_CASH_AVAILABLE = 150; // Demo HK Cash balance

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [useHkCash, setUseHkCash] = useState(false);
  const hkCash = HK_CASH_AVAILABLE;

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('healthkart-cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem('healthkart-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity = 1, flavor?: string, size?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => 
          item.product.id === product.id && 
          item.selectedFlavor === flavor && 
          item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [...prev, { product, quantity, selectedFlavor: flavor, selectedSize: size }];
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setUseHkCash(false);
  };

  const getCartSubtotal = () => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getGST = () => {
    return Math.round(getCartSubtotal() * GST_RATE);
  };

  const getCartTotal = () => {
    let total = getCartSubtotal() + getGST();
    if (useHkCash) {
      total = Math.max(0, total - hkCash);
    }
    return total;
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartSubtotal,
        getGST,
        getItemCount,
        hkCash,
        useHkCash,
        setUseHkCash,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
