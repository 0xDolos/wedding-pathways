import { WeddingHero } from "@/components/WeddingHero";
import { WeddingNavigation } from "@/components/WeddingNavigation";
import { WeddingCountdown } from "@/components/WeddingCountdown";
import { WeddingDetails } from "@/components/WeddingDetails";
import { WeddingRSVP } from "@/components/WeddingRSVP";
import { WeddingRegistry } from "@/components/WeddingRegistry";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MapPin } from "lucide-react";

const Index = () => {
  const weddingDate = new Date('2024-06-15T16:00:00');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <WeddingNavigation onScrollToSection={scrollToSection} />
      
      <WeddingHero onScrollToSection={scrollToSection} />
      
      <WeddingCountdown weddingDate={weddingDate} />
      
      {/* Our Story Section */}
      <section id="story" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Love Story
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every love story is beautiful, but ours is our favorite
            </p>
            <div className="w-24 h-0.5 bg-gradient-romantic mx-auto mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="wedding-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-xl font-bold text-primary">How We Met</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We first met at a coffee shop in downtown San Francisco in the spring of 2019. 
                    Sarah was reading her favorite book, and Michael couldn't help but notice her 
                    beautiful smile. One conversation about literature turned into hours of talking, 
                    and we both knew something special was beginning.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="wedding-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-xl font-bold text-primary">The Proposal</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Four years later, Michael surprised Sarah with a romantic picnic in Golden Gate Park, 
                    complete with her favorite flowers and a photographer hiding in the bushes. 
                    As the sun set over the city, he got down on one knee and asked the question 
                    that would change our lives forever.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="wedding-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-xl font-bold text-primary">Why Napa Valley</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Napa Valley holds a special place in our hearts. It's where we had our first 
                    weekend getaway, where we celebrated our engagement, and where we've made 
                    countless memories together. We couldn't imagine saying "I do" anywhere else 
                    than among the rolling hills and vineyards that have witnessed our love grow.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="wedding-shadow border-0 bg-gradient-subtle">
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 mx-auto mb-4 text-primary animate-pulse" />
                  <p className="font-display text-lg italic text-primary">
                    "In all the world, there is no heart for me like yours. 
                    In all the world, there is no love for you like mine."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">- Maya Angelou</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <WeddingDetails />
      
      <WeddingRSVP />
      
      <WeddingRegistry />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-8 h-8 mx-auto mb-4 text-primary animate-pulse" />
          <h3 className="font-display text-2xl font-bold mb-2">Sarah & Michael</h3>
          <p className="text-background/80 mb-4">June 15, 2024</p>
          <p className="text-sm text-background/60">
            Made with ♥ for our special day
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
