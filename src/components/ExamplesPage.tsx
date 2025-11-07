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
      title: "Rainbow & Sun",
      childAge: "Age 6",
      childName: "Emma",
      description: "A beautiful rainbow with clouds and bright sun, perfectly transformed into a vibrant poster.",
      originalImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop",
      posterImage: "/examples/rainbow-poster.jpg",
      customerFeedback: {
        parentName: "Sarah M.",
        rating: 5,
        comment: "Emma was so excited to see her rainbow drawing turned into a real poster! The colors came out beautifully and it now has a special place in her bedroom."
      }
    },
    {
      id: 2,
      title: "Happy Boy Portrait",
      childAge: "Age 5",
      childName: "Max",
      description: "A cheerful boy portrait with spiky hair and bow tie, transformed into an adorable keepsake.",
      originalImage: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=500&h=500&fit=crop",
      posterImage: "/examples/boy-poster.jpg",
      customerFeedback: {
        parentName: "Lisa K.",
        rating: 5,
        comment: "Max drew himself and seeing it as a professional poster made him so proud! It's hanging in our living room and everyone loves it."
      }
    },
    {
      id: 3,
      title: "Cozy House Scene",
      childAge: "Age 7",
      childName: "Sophie",
      description: "A charming house with trees and sunshine, beautifully enhanced with professional framing.",
      originalImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&h=500&fit=crop",
      posterImage: "/examples/house-poster.jpg",
      customerFeedback: {
        parentName: "Mike T.",
        rating: 5,
        comment: "Sophie's house drawing looks incredible as a poster! The warm colors and professional quality make it a centerpiece in our home."
      }
    },
    {
      id: 4,
      title: "Girl with Flowers",
      childAge: "Age 8",
      childName: "Isabella",
      description: "A sweet girl surrounded by colorful flowers, preserved as a beautiful wall art piece.",
      originalImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=500&fit=crop",
      posterImage: "/examples/girl-poster.jpg",
      customerFeedback: {
        parentName: "Jennifer R.",
        rating: 5,
        comment: "Isabella's flower garden drawing brings so much joy to her room. The transformation from crayon to poster is remarkable!"
      }
    },
    {
      id: 5,
      title: "Space Rocket Adventure",
      childAge: "Age 9",
      childName: "Lucas",
      description: "An exciting rocket ship with stars, perfectly capturing a child's space dreams.",
      originalImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=500&fit=crop",
      posterImage: "/examples/rocket-poster.jpg",
      customerFeedback: {
        parentName: "David L.",
        rating: 5,
        comment: "Lucas's space adventure looks amazing as a poster! He tells everyone about his 'real' artwork. It's been a huge confidence booster."
      }
    },
    {
      id: 6,
      title: "Friendly Cat",
      childAge: "Age 6",
      childName: "Zoe",
      description: "An adorable orange cat with a heart, transformed into a heartwarming poster.",
      originalImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=500&fit=crop",
      posterImage: "/examples/cat-poster.jpg",
      customerFeedback: {
        parentName: "Rachel H.",
        rating: 5,
        comment: "Zoe's cat drawing is now her favorite thing in her bedroom! The poster quality exceeded our expectations."
      }
    },
    {
      id: 7,
      title: "Dinosaur Discovery",
      childAge: "Age 8",
      childName: "Oliver",
      description: "A friendly green dinosaur in a sunny landscape, perfectly preserved as professional wall art.",
      originalImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop",
      posterImage: "/examples/dinosaur-poster.jpg",
      customerFeedback: {
        parentName: "Amanda S.",
        rating: 5,
        comment: "Oliver's dinosaur drawing looks so professional now! He's incredibly proud and shows it off to everyone who visits."
      }
    },
    {
      id: 8,
      title: "Playground Fun",
      childAge: "Age 7",
      childName: "Mia",
      description: "A joyful child on a swing with clouds above, capturing pure childhood happiness.",
      originalImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=500&fit=crop",
      posterImage: "/examples/playground-poster.jpg",
      customerFeedback: {
        parentName: "Thomas B.",
        rating: 5,
        comment: "Mia's playground drawing brings back wonderful memories. The poster quality is fantastic and it's become a family treasure."
      }
    },
    {
      id: 9,
      title: "Mother & Child",
      childAge: "Age 5",
      childName: "Lily",
      description: "A touching family portrait showing the special bond between mother and child.",
      originalImage: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=500&h=500&fit=crop",
      posterImage: "/examples/family-poster.jpg",
      customerFeedback: {
        parentName: "Karen W.",
        rating: 5,
        comment: "This drawing of Lily and me is our most treasured artwork. Seeing it as a professional poster makes it even more special."
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

      {/* Quick Gallery Preview */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Popular Artwork Styles We Transform
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {examples.slice(0, 10).map((example, index) => (
              <div key={example.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={example.originalImage}
                    alt={example.title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-medium truncate">{example.title}</p>
                      <p className="text-white/80 text-xs">{example.childAge}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              From rainbows to rockets, houses to hearts - we transform every masterpiece! ✨
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
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-muted-foreground mb-3">From Drawing to Beautiful Poster</p>
                          <div className="relative">
                            <img 
                              src={example.originalImage}
                              alt={`${example.title} - Original artwork by ${example.childName}`}
                              className="w-full aspect-square object-cover rounded-lg shadow-md border-4 border-white"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-200/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                                <Star className="w-8 h-8 text-primary fill-current" />
                              </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                              <Heart className="w-4 h-4 fill-current" />
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