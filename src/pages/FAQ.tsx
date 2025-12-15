import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronDown, HelpCircle, Search, Truck, CreditCard, Package, RotateCcw, Gift, Shield } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  icon: typeof HelpCircle;
  title: string;
  faqs: FAQItem[];
}

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const faqCategories: FAQCategory[] = [
    {
      icon: Truck,
      title: 'Ordering & Delivery',
      faqs: [
        {
          question: 'How long does delivery take?',
          answer: 'Standard delivery takes 5-7 business days across India. Express delivery (2-3 days) is available for select pin codes at an additional charge.',
        },
        {
          question: 'Do you offer free shipping?',
          answer: 'Yes! We offer free standard shipping on all orders above ₹999. For orders below ₹999, a flat shipping fee of ₹99 applies.',
        },
        {
          question: 'Can I track my order?',
          answer: 'Absolutely! Once your order is shipped, you will receive a tracking link via email and SMS. You can also track your order from your account dashboard.',
        },
        {
          question: 'Do you deliver internationally?',
          answer: 'Currently, we only deliver within India. We are working on expanding our delivery to other countries. Stay tuned for updates!',
        },
      ],
    },
    {
      icon: CreditCard,
      title: 'Payment & Pricing',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, UPI (Google Pay, PhonePe, Paytm), net banking, and Cash on Delivery (COD) for orders up to ₹5,000.',
        },
        {
          question: 'Is Cash on Delivery available?',
          answer: 'Yes, COD is available for orders up to ₹5,000 in most serviceable pin codes. A COD fee of ₹49 applies.',
        },
        {
          question: 'Are the prices inclusive of GST?',
          answer: 'Yes, all prices displayed on our website are inclusive of GST (5%). No additional taxes will be charged at checkout.',
        },
        {
          question: 'Do you offer EMI options?',
          answer: 'Yes! We offer No-Cost EMI on orders above ₹3,000 with select bank credit cards. EMI options are displayed at checkout.',
        },
      ],
    },
    {
      icon: Package,
      title: 'Products & Quality',
      faqs: [
        {
          question: 'What materials are your baskets made of?',
          answer: 'Our baskets are made from 100% natural materials including seagrass, rattan, bamboo, jute, and wicker. All materials are sustainably sourced and eco-friendly.',
        },
        {
          question: 'Are your products handmade?',
          answer: 'Yes, each basket is handwoven by skilled artisans using traditional techniques passed down through generations. This ensures unique quality and craftsmanship in every piece.',
        },
        {
          question: 'How do I care for my basket?',
          answer: 'Keep your basket dry and away from direct sunlight. Clean with a dry or slightly damp cloth. For storage baskets, occasional airing helps maintain freshness.',
        },
        {
          question: 'Can I customize a basket?',
          answer: 'Yes! We offer customization for bulk orders (minimum 10 pieces). Contact us for custom sizes, colors, or designs for corporate gifting or events.',
        },
      ],
    },
    {
      icon: RotateCcw,
      title: 'Returns & Refunds',
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We offer hassle-free returns within 7 days of delivery. Products must be unused, in original packaging, and with all tags intact.',
        },
        {
          question: 'How do I initiate a return?',
          answer: 'Log into your account, go to "My Orders", select the item, and click "Return". You can also contact our support team for assistance.',
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. Amount is credited to the original payment method.',
        },
        {
          question: 'Do you offer exchanges?',
          answer: 'Yes, exchanges are available for different sizes or variants of the same product. Contact us within 7 days of delivery to request an exchange.',
        },
      ],
    },
    {
      icon: Gift,
      title: 'Gifting & Corporate Orders',
      faqs: [
        {
          question: 'Do you offer gift wrapping?',
          answer: 'Yes! We offer premium gift wrapping for ₹49 per item. You can add gift wrapping during checkout. We also include a personalized message card.',
        },
        {
          question: 'Can I send a gift directly to someone?',
          answer: 'Absolutely! Just enter the recipient\'s address during checkout. We can include a gift message and ensure no price details are visible on the package.',
        },
        {
          question: 'Do you offer corporate gifting?',
          answer: 'Yes, we specialize in corporate gifting! We offer bulk discounts, custom branding, and dedicated account management for corporate orders of 20+ units.',
        },
        {
          question: 'How early should I order for events?',
          answer: 'For bulk or customized orders, we recommend ordering at least 2-3 weeks in advance. For standard products, 1 week is usually sufficient.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Account & Security',
      faqs: [
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard SSL encryption and secure payment gateways. We never store your complete card details on our servers.',
        },
        {
          question: 'How do I create an account?',
          answer: 'Click on "Sign Up" on the top right corner. You can register using your email or phone number. Account creation is optional for checkout.',
        },
        {
          question: 'I forgot my password. How do I reset it?',
          answer: 'Click "Login" and then "Forgot Password". Enter your registered email to receive a password reset link. The link expires in 24 hours.',
        },
        {
          question: 'How can I contact customer support?',
          answer: 'You can reach us via email at support@harvestbites.com, call us at 1800-HARVEST (toll-free), or use the live chat on our website (9 AM - 7 PM).',
        },
      ],
    },
  ];

  const filteredCategories = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(
          faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Find answers to common questions about our products, orders, and services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search your question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-card text-foreground rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-xl font-semibold mb-2">No results found</p>
                <p className="text-muted-foreground">Try a different search term</p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                    </div>
                    
                    <div className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => {
                        const itemId = `${categoryIndex}-${faqIndex}`;
                        const isOpen = openItems.includes(itemId);
                        
                        return (
                          <div
                            key={faqIndex}
                            className="bg-card rounded-xl shadow-md overflow-hidden"
                          >
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                            >
                              <span className="font-semibold pr-4">{faq.question}</span>
                              <ChevronDown 
                                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div className="px-5 pb-5 text-muted-foreground animate-fade-in">
                                <div className="pt-2 border-t border-border">
                                  {faq.answer}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Still have questions */}
            <div className="mt-16 text-center p-8 bg-muted rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:support@harvestbites.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <HelpCircle className="w-5 h-5" />
                  Contact Support
                </a>
                <a 
                  href="tel:1800-427-8378"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-border rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  Call: 1800-HARVEST
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
