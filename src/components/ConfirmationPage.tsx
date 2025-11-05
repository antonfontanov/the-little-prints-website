import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Package, Clock, Mail, ArrowLeft } from "lucide-react";

interface ConfirmationPageProps {
  orderData: any;
  onNavigate: (page: string) => void;
}

export function ConfirmationPage({ orderData, onNavigate }: ConfirmationPageProps) {
  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h1 className="text-2xl text-foreground mb-4">Order not found</h1>
          <Button onClick={() => onNavigate('home')} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const backgroundOptions = {
    beige: "Warm Beige",
    terracotta: "Terracotta", 
    olive: "Muted Olive",
    amber: "Soft Amber",
    cream: "Pure Cream",
    sage: "Sage Green"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8">
          {/* Success Header */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl text-foreground">Order Confirmed!</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thank you for choosing The Little Prints. We can't wait to transform your child's artwork into beautiful posters!
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order Number</p>
                    <p className="text-lg text-foreground">{orderData.orderNumber}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Customer</p>
                    <p className="text-foreground">{orderData.customer.name}</p>
                    <p className="text-sm text-muted-foreground">{orderData.customer.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Background Selected</p>
                    <p className="text-foreground">{backgroundOptions[orderData.background as keyof typeof backgroundOptions]}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Number of Posters</p>
                    <p className="text-lg text-foreground">{orderData.files.length}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Total Amount</p>
                    <p className="text-xl text-primary">${orderData.total}.00</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="text-foreground">{orderData.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
              
              {orderData.notes && (
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">Personal Notes</p>
                  <p className="text-foreground mt-1">{orderData.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                What Happens Next
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">Confirmation Email Sent</h3>
                    <p className="text-sm text-muted-foreground">
                      We've sent a confirmation email to {orderData.customer.email} with your order details and receipt.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-primary">1-2</span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">Professional Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Our design team will carefully enhance and prepare your child's artwork for printing within 1-2 business days.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-primary">3-5</span>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">High-Quality Printing</h3>
                    <p className="text-sm text-muted-foreground">
                      Your posters will be printed on premium paper using professional-grade equipment, then carefully packaged.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">Delivered to Your Door</h3>
                    <p className="text-sm text-muted-foreground">
                      Your beautiful posters will arrive by {orderData.estimatedDelivery}, ready to display and treasure forever.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="border-border/50 bg-secondary/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg text-foreground">Need Help?</h3>
                <p className="text-muted-foreground">
                  If you have any questions about your order or need to make changes, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    📧 <span className="text-primary">hello@thelittleprints.com</span>
                  </p>
                  <p className="text-foreground">
                    📞 <span className="text-primary">1-800-ARTWORK</span>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Our customer service team is available Monday-Friday, 9 AM - 6 PM EST.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => onNavigate('home')}
              variant="outline"
              className="rounded-full px-8 py-3 border-primary/20 hover:bg-primary/5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return Home
            </Button>
            <Button
              onClick={() => onNavigate('order')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3"
            >
              Create Another Poster
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}