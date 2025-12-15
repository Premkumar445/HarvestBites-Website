import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Headphones } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Artisan Lane', 'Craftville, Karnataka', 'India - 560001'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['1800-HARVEST (427-8378)', '+91 80 1234 5678'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@harvestbites.com', 'support@harvestbites.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9 AM - 7 PM', 'Sunday: 10 AM - 5 PM'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container text-center">
            <Headphones className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold">Send us a Message</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours. 
                  We're here to help with any questions about our products, orders, or custom requests.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600" 
                  alt="Harvest Bites store"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-success rounded-2xl -z-10" />
                
                {/* Map placeholder */}
                <div className="mt-8 p-6 bg-muted rounded-xl">
                  <h3 className="font-semibold mb-2">Find Us</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Visit our showroom to see our full collection of handcrafted baskets.
                  </p>
                  <div className="aspect-video bg-card rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Map coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
