import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-xl">🧺</span>
              </div>
              <div>
                <span className="font-bold text-xl">Harvest</span>
                <span className="font-bold text-xl text-primary"> Bites</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Premium handcrafted baskets for every occasion. Eco-friendly, sustainable, and beautifully designed.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Shop Now</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>123 Artisan Lane, Craftville, India - 560001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>1800-HARVEST (427-8378)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>hello@harvestbites.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4">
          <p className="text-center text-sm text-primary-foreground/70">
            © 2025 HarvestBites. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
