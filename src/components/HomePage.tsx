import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Upload, Palette, Truck, Star, Heart, Frame } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Share your child's artwork by uploading a photo of their drawing"
    },
    {
      icon: Palette,
      title: "Customize",
      description: "Choose from beautiful autumn-inspired backgrounds and add personal touches"
    },
    {
      icon: Truck,
      title: "Receive",
      description: "Get your professionally printed poster delivered to your door in 5-7 days"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "My daughter's crayon masterpiece now hangs proudly in our living room. The quality is incredible!",
      rating: 5
    },
    {
      name: "Mike T.",
      text: "What a wonderful way to preserve those precious childhood memories. Our family loves it.",
      rating: 5
    },
    {
      name: "Lisa K.",
      text: "The kids are so proud to see their art displayed like real gallery pieces. Absolutely magical.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                  Turn your child's art into{" "}
                  <span className="text-primary">timeless posters</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Transform those precious crayon masterpieces into professionally crafted posters that celebrate your child's creativity and preserve memories forever.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => onNavigate('order')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg"
                >
                  Start Your Poster
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-8 py-3 text-lg border-primary/20 hover:bg-primary/5"
                >
                  See Examples
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-soft-amber fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5 from 1,200+ parents</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1727768351795-2390d19b2b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRyYXdpbmclMjBhcnR3b3JrJTIwY3JlYXRpdmUlMjBraWRzfGVufDF8fHx8MTc1OTA5NTA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Child creating artwork"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-border/10">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary fill-current" />
                  <div>
                    <p className="text-sm text-foreground">Over 10,000 memories</p>
                    <p className="text-xs text-muted-foreground">preserved and counting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your child's artwork into a beautiful poster that will last a lifetime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-8 h-1 bg-primary/20 rounded-full">
                      <div className="w-full h-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl text-foreground">
              From Crayon to Canvas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we transform children's drawings into stunning wall art that families treasure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609140070027-e721c67234b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjAyMGhvbWUlMjB3YWxsJTIwYXJ0JTIwY2hpbGRyZW4lMjBhcnR3b3JrfGVufDF8fHx8MTc1OTA5NTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Transformed child artwork displayed on wall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1570737488040-fddfd0eac49c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHN8d2FybSUyMGNvenklaG9tZSUyMGludGVyaW9yJTIwYXV0dW1uJTIwY29sb3JzfGVufDF8fHx8MTc1OTA5NTA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cozy home interior with child art"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="relative group md:col-span-2 lg:col-span-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-accent to-soft-amber flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <Frame className="w-16 h-16 text-primary mx-auto" />
                    <h3 className="text-xl text-foreground">Your Art Here</h3>
                    <p className="text-muted-foreground text-sm">Ready to see your child's masterpiece transformed?</p>
                    <Button 
                      onClick={() => onNavigate('order')}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl text-foreground">
              What Parents Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of families who have transformed their children's art into cherished keepsakes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-soft-amber fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <p className="text-sm text-foreground">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/5 via-accent/20 to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl text-foreground">
              Ready to Preserve Their Masterpiece?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't let those precious drawings fade away in a box. Transform them into beautiful posters that will bring joy for years to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                onClick={() => onNavigate('order')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg"
              >
                Start Your Poster - $40
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-3 text-lg border-primary/20 hover:bg-primary/5"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}