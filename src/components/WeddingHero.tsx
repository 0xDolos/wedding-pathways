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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.04)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-subtle opacity-10" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="relative inline-block mx-auto mb-10">
            <Heart
              className="w-12 h-12 text-primary-glow animate-pulse absolute left-1/2 -translate-x-1/2 -top-[56px]"
            />

            <h1 className="font-display text-6xl md:text-8xl font-bold text-white tracking-wide text-center">
              <span className="inline-block mx-2">Anna</span>
              <span
                className="relative inline-block mx-2 left-[6px]"
              >
                &amp;
              </span>
              <span className="inline-block mx-2">Mike</span>
            </h1>
          </div>

          <div className="w-32 h-0.5 bg-gradient-romantic mx-auto mb-6" />
          
          <p className="text-xl md:text-2xl text-white mb-2 font-light">
            are getting married
          </p>
          
          <p className="text-xl md:text-2xl text-white mb-12 font-display italic">
            October 31, 2026 Hua Hin, Thailand
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
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};