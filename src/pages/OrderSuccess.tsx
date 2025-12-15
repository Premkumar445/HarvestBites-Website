import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
  const orderId = `HK${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <CheckCircle className="w-16 h-16 text-success" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Placed!</h1>
          <p className="text-muted-foreground">
            Thank you for shopping with HarvestBites
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-md mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Package className="w-6 h-6 text-primary" />
            <span className="font-semibold">Order ID: {orderId}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            We've sent a confirmation email with your order details. You can track your order using the order ID.
          </p>
        </div>

        <div className="space-y-3">
          <Link to="/orders">
            <Button className="w-full">
              Track Your Order
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
