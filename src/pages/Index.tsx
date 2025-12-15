import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Truck, Shield, Gift, ArrowRight, Star } from 'lucide-react';

const Index = () => {
  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders above ₹999' },
    { icon: Shield, title: '100% Authentic', description: 'Handcrafted with care' },
    { icon: Gift, title: 'Gift Wrapping', description: 'Available on request' },
  ];

  const testimonials = [
    { name: 'Priya S.', text: 'Beautiful baskets! Perfect for my home decor.', rating: 5 },
    { name: 'Rahul M.', text: 'Fast delivery and excellent quality.', rating: 5 },
    { name: 'Anita K.', text: 'Love the eco-friendly materials used.', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🧺</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Premium Quality</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Handcrafted <span className="text-gradient">Baskets</span> for Every Occasion
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our collection of beautifully woven baskets. From storage to gifting, find the perfect basket crafted with love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="gap-2 shadow-glow">
                  <ShoppingBag className="w-5 h-5" />
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="gap-2">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-md">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-card rounded-xl shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Find Your Perfect Basket?</h2>
          <Link to="/shop">
            <Button size="lg" variant="secondary" className="gap-2">
              <ShoppingBag className="w-5 h-5" />
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
