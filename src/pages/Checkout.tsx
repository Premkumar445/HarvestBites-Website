import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import { CreditCard, Wallet, Building, ArrowLeft, Shield, Lock, Package } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartSubtotal, getGST, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deliveryCharge = getCartSubtotal() >= 999 ? 0 : 99;
  const finalTotal = getCartTotal() + deliveryCharge;

  const handlePlaceOrder = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.pincode) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order Placed Successfully! 🎉",
      description: "Your order has been confirmed. You will receive a confirmation email shortly.",
    });

    clearCart();
    navigate('/order-success');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <Package className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link to="/shop">
            <Button>Browse Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-card rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your full address"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="Pincode"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-card rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <label className="flex items-center gap-4 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="card" />
                    <CreditCard className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <p className="font-semibold">Credit/Debit Card</p>
                      <p className="text-sm text-muted-foreground">
                        Visa, Mastercard, Rupay
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="upi" />
                    <Wallet className="w-6 h-6 text-success" />
                    <div className="flex-1">
                      <p className="font-semibold">UPI</p>
                      <p className="text-sm text-muted-foreground">GPay, PhonePe, Paytm</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="cod" />
                    <Building className="w-6 h-6 text-accent" />
                    <div className="flex-1">
                      <p className="font-semibold">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">Pay when you receive (₹49 extra)</p>
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 pb-3 border-b border-border"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-medium">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{getCartSubtotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (5%)</span>
                  <span>₹{getGST().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className={deliveryCharge === 0 ? 'text-success font-medium' : ''}>
                    {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>
                {paymentMethod === 'cod' && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">COD Charges</span>
                    <span>₹49</span>
                  </div>
                )}
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{(finalTotal + (paymentMethod === 'cod' ? 49 : 0)).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full gap-2" onClick={handlePlaceOrder}>
                <Lock className="w-4 h-4" />
                Place Order
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>100% Secure Payments</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
