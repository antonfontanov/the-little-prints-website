import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CreditCard, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

// Load Stripe with publishable key from environment variables
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_YOUR_PUBLISHABLE_KEY_HERE'
);

interface PaymentFormProps {
  orderData: {
    uploadedFiles: File[];
    selectedBackground: string;
    personalNotes: string;
    customerInfo: {
      name: string;
      email: string;
      address: string;
      city: string;
      zip: string;
      country: string;
    };
    total: number;
  };
  onSuccess: () => void;
  onCancel: () => void;
}

function CheckoutForm({ orderData, onSuccess, onCancel }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setIsProcessing(false);
      return;
    }

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: orderData.customerInfo.name,
          email: orderData.customerInfo.email,
          address: {
            line1: orderData.customerInfo.address,
            city: orderData.customerInfo.city,
            postal_code: orderData.customerInfo.zip,
            country: orderData.customerInfo.country,
          },
        },
      });

      if (error) {
        console.error('Error creating payment method:', error);
        toast.error(error.message || 'Payment failed');
        setIsProcessing(false);
        return;
      }

      // In a real app, you'd send the paymentMethod.id to your server
      // For now, we'll simulate a successful payment
      console.log('Payment method created:', paymentMethod);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Payment successful! Your order has been placed.');
      onSuccess();
      
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        fontFamily: 'system-ui, -apple-system, sans-serif',
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Details
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          <p>Total: <span className="font-semibold text-primary">${orderData.total}.00</span></p>
          <p>{orderData.uploadedFiles.length} poster{orderData.uploadedFiles.length > 1 ? 's' : ''} × $40</p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-4 border rounded-lg bg-muted/50">
            <CardElement options={cardElementOptions} />
          </div>
          
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isProcessing}
              className="flex-1"
            >
              Back to Order
            </Button>
            <Button
              type="submit"
              disabled={!stripe || isProcessing}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                `Pay $${orderData.total}.00`
              )}
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            Your payment is secure and encrypted. We never store your card details.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export function StripePayment({ orderData, onSuccess, onCancel }: PaymentFormProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Order</h1>
          <p className="text-muted-foreground">Secure payment powered by Stripe</p>
        </div>
        
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            orderData={orderData} 
            onSuccess={onSuccess} 
            onCancel={onCancel} 
          />
        </Elements>
      </div>
    </div>
  );
}