import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, Upload, Palette, Truck, Shield, Clock, Heart, Star, CheckCircle } from "lucide-react";

interface LearnMorePageProps {
  onNavigate: (page: string) => void;
}

export function LearnMorePage({ onNavigate }: LearnMorePageProps) {
  const processSteps = [
    {
      step: 1,
      icon: Upload,
      title: "Upload Your Child's Artwork",
      description: "Simply take a clear photo of your child's drawing and upload it through our secure platform. We accept all types of artwork - crayon, marker, watercolor, pencil, or mixed media.",
      details: [
        "High-resolution photos work best",
        "Natural lighting produces optimal results",
        "We accept JPG, PNG, and HEIC formats",
        "Multiple angles can be helpful for complex artwork"
      ]
    },
    {
      step: 2,
      icon: Palette,
      title: "Professional Enhancement",
      description: "Our skilled artists carefully enhance your child's artwork while preserving its original charm and authenticity. We adjust colors, clean up backgrounds, and ensure the best possible print quality.",
      details: [
        "Color correction and enhancement",
        "Background cleanup and optimization",
        "Contrast and brightness adjustment",
        "Preservation of original artistic intent"
      ]
    },
    {
      step: 3,
      icon: Truck,
      title: "Premium Printing & Delivery",
      description: "Your enhanced artwork is printed on high-quality poster paper using professional-grade printers. Each poster is carefully packaged and shipped directly to your door.",
      details: [
        "Museum-quality poster paper",
        "Fade-resistant inks",
        "Protective packaging",
        "5-7 business day delivery"
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely happy with your poster, we'll make it right or provide a full refund."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "From upload to delivery, your poster will arrive within 5-7 business days."
    },
    {
      icon: Heart,
      title: "Preserve Precious Memories",
      description: "Transform fleeting childhood artwork into lasting keepsakes that families treasure forever."
    },
    {
      icon: Star,
      title: "Professional Quality",
      description: "Museum-grade materials and printing techniques ensure your poster will look beautiful for years to come."
    }
  ];

  const faqs = [
    {
      question: "What types of artwork work best?",
      answer: "We can work with virtually any type of children's artwork! Drawings made with crayons, markers, colored pencils, watercolors, and even mixed media all work wonderfully. The key is having a clear, well-lit photo of the artwork."
    },
    {
      question: "What size posters do you offer?",
      answer: "We currently offer standard poster sizes that work perfectly for framing and display. Our most popular size is 16x20 inches, but we can accommodate various sizes based on your needs."
    },
    {
      question: "How do you enhance the artwork without changing its character?",
      answer: "Our skilled artists use professional techniques to brighten colors, clean up backgrounds, and improve print quality while carefully preserving the original charm and authenticity of your child's artwork. We never alter the actual drawing itself."
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy with your poster, we'll work with you to make revisions or provide a full refund."
    },
    {
      question: "How should I photograph the artwork?",
      answer: "For best results, photograph the artwork in natural light, lay it flat, and ensure the entire drawing is visible and in focus. Avoid shadows and glare when possible."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-secondary/20 to-accent/30 py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('home')}
            className="mb-8 hover:bg-primary/5"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how we transform your child's precious artwork into beautiful, professional posters 
              that you'll treasure forever. Our process is simple, secure, and designed with love.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <Card key={step.step} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose The Little Prints?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your child's artwork into a beautiful keepsake for just $40, 
            including professional enhancement, premium printing, and shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('order')}
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-3 text-lg"
            >
              Start Your Poster - $40
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('examples')}
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-3 text-lg"
            >
              See Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}