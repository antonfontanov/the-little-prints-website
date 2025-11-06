import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, Star, Heart } from "lucide-react";

interface ExamplesPageProps {
  onNavigate: (page: string) => void;
}

export function ExamplesPage({ onNavigate }: ExamplesPageProps) {
  const examples = [
    {
      id: 1,
      title: "Rainbow Butterfly",
      childAge: "Age 6",
      childName: "Emma",
      description: "A vibrant butterfly with rainbow wings, beautifully transformed into a professional poster.",
      originalImage: "/examples/original-1.jpg", // You'll need to add these images
      posterImage: "/examples/poster-1.jpg",
      customerFeedback: {
        parentName: "Sarah M.",
        rating: 5,
        comment: "Emma was so excited to see her butterfly drawing turned into a real poster! The colors came out beautifully and it now has a special place in her bedroom. The quality exceeded our expectations."
      }
    },
    {
      id: 2,
      title: "Space Adventure",
      childAge: "Age 8",
      childName: "Jake",
      description: "An imaginative space scene with rockets and planets, perfectly preserved in poster format.",
      originalImage: "/examples/original-2.jpg",
      posterImage: "/examples/poster-2.jpg",
      customerFeedback: {
        parentName: "Mike T.",
        rating: 5,
        comment: "Jake's space drawing looks incredible as a poster! He tells everyone who visits about his 'real' artwork hanging on the wall. It's become such a confidence booster for him."
      }
    },
    {
      id: 3,
      title: "Family Portrait",
      childAge: "Age 5",
      childName: "Lily",
      description: "A sweet family drawing with stick figures, transformed into a cherished keepsake.",
      originalImage: "/examples/original-3.jpg",
      posterImage: "/examples/poster-3.jpg",
      customerFeedback: {
        parentName: "Lisa K.",
        rating: 5,
        comment: "This family portrait that Lily drew is now our favorite piece of art in the house. Grandparents love it too! The poster quality is amazing and really makes her artwork shine."
      }
    },
    {
      id: 4,
      title: "Ocean Scene",
      childAge: "Age 7",
      childName: "Alex",
      description: "An underwater adventure with fish and seahorses, beautifully enhanced with professional printing.",
      originalImage: "/examples/original-4.jpg",
      posterImage: "/examples/poster-4.jpg",
      customerFeedback: {
        parentName: "Jennifer R.",
        rating: 5,
        comment: "Alex's ocean drawing looks so professional now! The colors are vibrant and the poster material feels high-quality. It's the perfect way to showcase his creativity."
      }
    },
    {
      id: 5,
      title: "Flower Garden",
      childAge: "Age 4",
      childName: "Sophia",
      description: "A colorful garden scene filled with flowers and sunshine, preserved as a beautiful poster.",
      originalImage: "/examples/original-5.jpg",
      posterImage: "/examples/poster-5.jpg",
      customerFeedback: {
        parentName: "David L.",
        rating: 5,
        comment: "Sophia's flower garden drawing brings so much joy to our living room. The transformation from crayon drawing to professional poster is remarkable. Highly recommend!"
      }
    },
    {
      id: 6,
      title: "Dinosaur World",
      childAge: "Age 9",
      childName: "Connor",
      description: "An action-packed dinosaur scene, transformed into an impressive wall art piece.",
      originalImage: "/examples/original-6.jpg",
      posterImage: "/examples/poster-6.jpg",
      customerFeedback: {
        parentName: "Rachel H.",
        rating: 5,
        comment: "Connor's dinosaur drawing looks amazing as a poster! He's so proud to show it off to his friends. The quality is excellent and it really makes his artwork look professional."
      }
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
              See Examples
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we transform children's artwork into beautiful, professional posters. 
              See real examples and read what parents have to say about their experience.
            </p>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:gap-16">
            {examples.map((example, index) => (
              <Card key={example.id} className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    {/* Before/After Images */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-primary mb-2">{example.title}</h3>
                        <p className="text-muted-foreground">By {example.childName}, {example.childAge}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-muted-foreground mb-2">Original Drawing</p>
                          <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center border-2 border-dashed border-gray-300">
                            <div className="text-center p-4">
                              <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <p className="text-sm text-muted-foreground">Original<br/>Artwork</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-muted-foreground mb-2">Professional Poster</p>
                          <div className="bg-gradient-to-br from-primary/10 to-purple-100 rounded-lg aspect-square flex items-center justify-center border-2 border-primary/20">
                            <div className="text-center p-4">
                              <Star className="w-8 h-8 mx-auto mb-2 text-primary fill-current" />
                              <p className="text-sm text-primary font-medium">Beautiful<br/>Poster</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-center">
                        {example.description}
                      </p>
                    </div>

                    {/* Customer Feedback */}
                    <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="bg-gradient-to-br from-primary/5 to-purple-50 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="w-5 h-5 text-amber-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground ml-2">
                            {example.customerFeedback.rating}/5 stars
                          </span>
                        </div>
                        
                        <blockquote className="text-lg text-foreground mb-4 italic">
                          "{example.customerFeedback.comment}"
                        </blockquote>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-medium">
                              {example.customerFeedback.parentName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">
                              {example.customerFeedback.parentName}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Verified Customer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Child's Artwork?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of happy families who have turned their children's drawings into beautiful keepsakes.
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate('order')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg"
          >
            Start Your Poster - $40
          </Button>
        </div>
      </section>
    </div>
  );
}