import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check, Heart, Leaf, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Leaf, title: 'Sustainability', description: 'We use only eco-friendly, renewable materials in all our products.' },
    { icon: Heart, title: 'Craftsmanship', description: 'Each basket is handwoven with love and attention to detail.' },
    { icon: Users, title: 'Community', description: 'We support local artisan communities across India.' },
    { icon: Award, title: 'Quality', description: 'Premium quality products that last for years.' },
  ];

  const benefits = [
    '100% Natural Materials',
    'Handcrafted by Skilled Artisans',
    'Eco-Friendly & Sustainable',
    'Fair Trade Practices',
    'Unique Designs',
    'Durable & Long-lasting',
    'Perfect for Gifting',
    'Support Local Communities',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl mb-4 block">🧺</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Harvest Bites
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                We're passionate about bringing you the finest handcrafted baskets that combine 
                tradition with modern design. Our journey began with a simple mission: to celebrate 
                artisan craftsmanship while promoting sustainable living.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Harvest Bites was born from a deep appreciation for traditional basket weaving 
                    and a commitment to sustainable living. Founded in 2020, we started as a small 
                    venture connecting skilled artisans with conscious consumers.
                  </p>
                  <p>
                    Today, we work with over 200 artisan families across rural India, preserving 
                    age-old weaving techniques while providing fair wages and sustainable livelihoods.
                  </p>
                  <p>
                    Every basket you purchase tells a story – of skilled hands, natural materials, 
                    and a shared commitment to a greener planet.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" 
                  alt="Artisan weaving basket"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-success rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do at Harvest Bites
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600" 
                  alt="Natural basket materials"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-hero rounded-2xl -z-10" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-dark text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Globe className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-primary-foreground/70">Cities Served</p>
              </div>
              <div>
                <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-primary-foreground/70">Artisan Families</p>
              </div>
              <div>
                <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold mb-2">10K+</div>
                <p className="text-primary-foreground/70">Happy Customers</p>
              </div>
              <div>
                <Heart className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold mb-2">25K+</div>
                <p className="text-primary-foreground/70">Baskets Delivered</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
