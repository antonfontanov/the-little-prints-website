import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, Star, Heart } from "lucide-react";

// Import the actual images from assets
import chatGptImage1 from '../assets/ChatGPT Image Nov 6, 2025, 10_32_12 PM.png';
import chatGptImage2 from '../assets/ChatGPT Image Nov 6, 2025, 10_32_14 PM.png';
import chatGptImage3 from '../assets/ChatGPT Image Nov 6, 2025, 10_32_25 PM.png';
import designerImage1 from '../assets/Designer.png';
import designerImage2 from '../assets/Designer (1).png';
import designerImage3 from '../assets/Designer (2).png';
import logoImage from '../assets/ae0cf63b379a9c48a9bc8b575fbffd4cb0aee8c6.png';

interface ExamplesPageProps {
  onNavigate: (page: string) => void;
}

export function ExamplesPage({ onNavigate }: ExamplesPageProps) {
  const examples = [
    {
      id: 1,
      title: "Living Room Gallery Wall",
      childAge: "Ages 5-8",
      childName: "Multiple Children",
      description: "Four beautifully framed children's artworks creating a stunning focal point in this cozy living room.",
      originalImage: chatGptImage1,
      posterImage: chatGptImage1,
      backgroundColor: "Professional Frames",
      customerFeedback: {
        parentName: "Sarah M.",
        rating: 5,
        comment: "We love having all four kids' artwork professionally framed and displayed together! It's become the centerpiece of our living room and everyone who visits comments on how beautiful they look."
      }
    },
    {
      id: 2,
      title: "Children's Bedroom Art Display",
      childAge: "Ages 6-9",
      childName: "Lucas & Emma",
      description: "A perfect bedroom gallery featuring rockets, rainbows, and family portraits in matching wooden frames.",
      originalImage: chatGptImage2,
      posterImage: chatGptImage2,
      backgroundColor: "Warm Wood Frames",
      customerFeedback: {
        parentName: "Lisa K.",
        rating: 5,
        comment: "The kids are so proud to see their artwork displayed like real art in their bedroom! The wooden frames give such a professional, gallery-quality look."
      }
    },
    {
      id: 3,
      title: "Cozy Reading Nook Display",
      childAge: "Ages 4-7",
      childName: "Sophie & Max",
      description: "Beautiful artwork displayed above a children's reading area, creating an inspiring and creative space.",
      originalImage: chatGptImage3,
      posterImage: chatGptImage3,
      backgroundColor: "Natural Wood",
      customerFeedback: {
        parentName: "Mike T.",
        rating: 5,
        comment: "This corner of the house has become so special! The framed artwork above the reading nook inspires creativity and makes the kids feel like real artists."
      }
    },
    {
      id: 4,
      title: "Modern Family Gallery",
      childAge: "Various Ages",
      childName: "Family Collection",
      description: "A sophisticated display of children's artwork in clean, modern frames that complement any home decor.",
      originalImage: designerImage1,
      posterImage: designerImage1,
      backgroundColor: "Contemporary Frames",
      customerFeedback: {
        parentName: "Jennifer R.",
        rating: 5,
        comment: "These frames are absolutely perfect! They make the children's artwork look so professional and fit beautifully with our modern home decor."
      }
    },
    {
      id: 5,
      title: "Playroom Art Wall",
      childAge: "Ages 3-9",
      childName: "Multiple Artists",
      description: "A vibrant collection of framed children's artwork that brings joy and color to any playroom or family space.",
      originalImage: designerImage2,
      posterImage: designerImage2,
      backgroundColor: "Colorful Display",
      customerFeedback: {
        parentName: "David L.",
        rating: 5,
        comment: "The playroom looks amazing with all the framed artwork! It's like having a private art gallery of our children's creativity."
      }
    },
    {
      id: 6,
      title: "Elegant Hallway Gallery",
      childAge: "Ages 5-10",
      childName: "Extended Family",
      description: "A beautiful hallway transformation featuring professionally framed children's artwork in matching frames.",
      originalImage: designerImage3,
      posterImage: designerImage3,
      backgroundColor: "Matching Set",
      customerFeedback: {
        parentName: "Rachel H.",
        rating: 5,
        comment: "Our hallway has been completely transformed! Guests always stop to admire the beautiful collection of framed children's artwork."
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
                <img 
                  src={chatGptImage1}
                  alt="Living room with framed children's artwork"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Living Room Gallery Wall</h3>
                  <p className="text-sm text-muted-foreground">Multiple beautifully framed children's artworks creating a stunning focal point</p>
                </div>
              </CardContent>
            </Card>

            {/* Children's Bedroom Display */}
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img 
                  src={chatGptImage2}
                  alt="Children's bedroom with framed artwork"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Child's Bedroom Showcase</h3>
                  <p className="text-sm text-muted-foreground">Personal artwork collection inspiring creativity and confidence</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {examples.slice(0, 6).map((example) => (
              <div key={example.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={example.originalImage}
                    alt={example.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-sm font-medium truncate">{example.title}</p>
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
                          <p className="text-sm font-medium text-muted-foreground mb-3">Real Customer Photos</p>
                          <div className="relative">
                            <img 
                              src={example.originalImage}
                              alt={`${example.title} - Real customer photo`}
                              className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-200/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                                <Star className="w-8 h-8 text-primary fill-current" />
                              </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                              <Heart className="w-4 h-4 fill-current" />
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 px-2">
                            Frame Style: {example.backgroundColor}
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