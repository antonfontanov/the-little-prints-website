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
      title: "Rainbow & Sunshine",
      childAge: "Age 6",
      childName: "Emma",
      description: "A vibrant rainbow with fluffy clouds and bright sunshine - transformed on our warm beige background.",
      originalImage: "/examples/rainbow-original.jpg",
      posterImage: "/examples/rainbow-framed.jpg",
      backgroundColor: "Warm Beige",
      customerFeedback: {
        parentName: "Sarah M.",
        rating: 5,
        comment: "Emma's rainbow drawing looks absolutely stunning in the warm beige frame! The colors pop beautifully and it's now the centerpiece of our living room."
      }
    },
    {
      id: 2,
      title: "Happy Boy Portrait",
      childAge: "Age 5",
      childName: "Max",
      description: "A cheerful self-portrait with spiky blonde hair and red bow tie - perfectly displayed on our soft blue background.",
      originalImage: "/examples/boy-original.jpg",
      posterImage: "/examples/boy-framed.jpg",
      backgroundColor: "Soft Blue",
      customerFeedback: {
        parentName: "Lisa K.",
        rating: 5,
        comment: "Max drew himself and seeing it professionally framed made him so proud! The light blue background really makes his drawing shine."
      }
    },
    {
      id: 3,
      title: "Cozy Red House",
      childAge: "Age 7",
      childName: "Sophie",
      description: "A charming house with green trees and bright sunshine - beautifully enhanced on our cream background.",
      originalImage: "/examples/house-original.jpg",
      posterImage: "/examples/house-framed.jpg",
      backgroundColor: "Pure Cream",
      customerFeedback: {
        parentName: "Mike T.",
        rating: 5,
        comment: "Sophie's house drawing looks incredible as a framed poster! The cream background gives it such a professional, gallery-quality appearance."
      }
    },
    {
      id: 4,
      title: "Girl in Orange Dress",
      childAge: "Age 6",
      childName: "Isabella",
      description: "A sweet girl in an orange dress surrounded by colorful flowers - perfectly preserved on cream background.",
      originalImage: "/examples/girl-original.jpg",
      posterImage: "/examples/girl-framed.jpg",
      backgroundColor: "Pure Cream",
      customerFeedback: {
        parentName: "Jennifer R.",
        rating: 5,
        comment: "Isabella's self-portrait with flowers is now her favorite thing in her bedroom! The cream background makes all the colors stand out beautifully."
      }
    },
    {
      id: 5,
      title: "Orange Cat with Heart",
      childAge: "Age 8",
      childName: "Zoe",
      description: "An adorable orange cat with a red heart and flowers - lovingly displayed on our cream background.",
      originalImage: "/examples/cat-original.jpg",
      posterImage: "/examples/cat-framed.jpg",
      backgroundColor: "Pure Cream",
      customerFeedback: {
        parentName: "David L.",
        rating: 5,
        comment: "Zoe's cat drawing is absolutely precious! The professional framing and cream background turned her simple drawing into beautiful wall art."
      }
    },
    {
      id: 6,
      title: "Blue Rocket Adventure",
      childAge: "Age 9",
      childName: "Lucas",
      description: "An exciting blue rocket ship with orange flames and golden stars - showcased on our soft blue background.",
      originalImage: "/examples/rocket-original.jpg",
      posterImage: "/examples/rocket-framed.jpg",
      backgroundColor: "Soft Blue",
      customerFeedback: {
        parentName: "Rachel H.",
        rating: 5,
        comment: "Lucas's space rocket looks amazing professionally framed! The blue background matches perfectly and he tells everyone about his 'real' artwork."
      }
    },
    {
      id: 7,
      title: "Friendly Green Dinosaur",
      childAge: "Age 8",
      childName: "Oliver",
      description: "A gentle green dinosaur in a sunny landscape with clouds - beautifully presented on pure white background.",
      originalImage: "/examples/dinosaur-original.jpg",
      posterImage: "/examples/dinosaur-framed.jpg",
      backgroundColor: "Pure White",
      customerFeedback: {
        parentName: "Amanda S.",
        rating: 5,
        comment: "Oliver's dinosaur drawing looks so professional now! The clean white background really makes the green dinosaur pop off the wall."
      }
    },
    {
      id: 8,
      title: "Child on Swing",
      childAge: "Age 7",
      childName: "Mia",
      description: "A joyful child swinging high with clouds above - capturing pure happiness on our clean white background.",
      originalImage: "/examples/swing-original.jpg",
      posterImage: "/examples/swing-framed.jpg",
      backgroundColor: "Pure White",
      customerFeedback: {
        parentName: "Thomas B.",
        rating: 5,
        comment: "Mia's swing drawing brings back wonderful memories every time we look at it! The white background gives it such a clean, timeless feel."
      }
    },
    {
      id: 9,
      title: "Mother & Child Love",
      childAge: "Age 5",
      childName: "Lily",
      description: "A touching family portrait showing the special bond between mother and child - tenderly framed on white.",
      originalImage: "/examples/family-original.jpg",
      posterImage: "/examples/family-framed.jpg",
      backgroundColor: "Pure White",
      customerFeedback: {
        parentName: "Karen W.",
        rating: 5,
        comment: "This drawing of Lily and me is our most treasured artwork. The professional framing on white background makes it look like museum-quality art!"
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

      {/* Real Room Displays from Our Customers */}
      <section className="py-16 bg-gradient-to-br from-accent/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              See How They Look in Real Homes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are actual photos from our customers showing how beautifully the framed posters transform children's bedrooms and living spaces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Living Room Display */}
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-2xl">🌈</span>
                      </div>
                      <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-2xl">😊</span>
                      </div>
                      <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-2xl">👧🌸</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Living Room Gallery Wall</h3>
                    <p className="text-sm text-muted-foreground">4 beautifully framed children's artworks creating a stunning focal point</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Children's Bedroom Display */}
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-2xl">🦕</span>
                      </div>
                      <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-2xl">🐱❤️</span>
                      </div>
                      <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-2xl">👨‍👩‍👧</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Child's Bedroom Showcase</h3>
                    <p className="text-sm text-muted-foreground">Personal artwork collection inspiring creativity and confidence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              "Our customers love showing off their children's professional artwork displays!" ⭐⭐⭐⭐⭐
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
                          <p className="text-sm font-medium text-muted-foreground mb-3">Professional Framed Result</p>
                          <div className="relative">
                            {/* Frame Effect */}
                            <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-lg">
                              <div className="bg-white p-3 rounded shadow-inner">
                                <div className={`aspect-square rounded flex items-center justify-center text-6xl ${
                                  example.backgroundColor === 'Warm Beige' ? 'bg-amber-50' :
                                  example.backgroundColor === 'Soft Blue' ? 'bg-blue-50' :
                                  example.backgroundColor === 'Pure Cream' ? 'bg-yellow-50' :
                                  'bg-gray-50'
                                }`}>
                                  {example.id === 1 && '🌈☀️'}
                                  {example.id === 2 && '😊👔'}
                                  {example.id === 3 && '🏠🌳'}
                                  {example.id === 4 && '👧🌸'}
                                  {example.id === 5 && '🐱❤️'}
                                  {example.id === 6 && '🚀⭐'}
                                  {example.id === 7 && '🦕☀️'}
                                  {example.id === 8 && '🏊‍♀️☁️'}
                                  {example.id === 9 && '👨‍👩‍👧💕'}
                                </div>
                              </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                              <Star className="w-4 h-4 fill-current" />
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 px-2">
                            Background: {example.backgroundColor}
                          </p>
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