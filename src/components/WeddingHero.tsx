import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/wedding-hero.jpg";

interface WeddingHeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const WeddingHero = ({ onScrollToSection }: WeddingHeroProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-subtle opacity-20" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Heart className="w-12 h-12 mx-auto mb-6 text-primary-glow animate-pulse" />
          
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 tracking-wide">
            Sarah & Michael
          </h1>
          
          <div className="w-32 h-0.5 bg-gradient-romantic mx-auto mb-6" />
          
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light tracking-widest uppercase">
            Together Forever
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 font-display italic">
            June 15, 2024 • Sunset Gardens, Napa Valley
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="wedding" 
              size="lg"
              onClick={() => onScrollToSection('rsvp')}
              className="px-8 py-6 text-lg"
            >
              RSVP Now
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => onScrollToSection('details')}
              className="px-8 py-6 text-lg"
            >
              Wedding Details
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};