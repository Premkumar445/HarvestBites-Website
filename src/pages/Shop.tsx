import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, CreditCard, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product as any);
    navigate('/cart');
  };

  const handleBuyNow = (product: typeof products[0]) => {
    addToCart(product as any);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Shop Our <span className="text-gradient">Basket Collection</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted baskets perfect for storage, gifting, and home decor
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {product.discount > 0 && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded">{product.discount}% OFF</span>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-medium">4.5</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </Button>
                  <Button size="sm" className="flex-1 gap-1" onClick={() => handleBuyNow(product)}>
                    <CreditCard className="w-4 h-4" /> Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
