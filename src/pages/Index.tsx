import { WeddingHero } from "@/components/WeddingHero";
import { WeddingNavigation } from "@/components/WeddingNavigation";
import { WeddingCountdown } from "@/components/WeddingCountdown";
import { WeddingDetails } from "@/components/WeddingDetails";
import { WeddingRSVP } from "@/components/WeddingRSVP";
import { Heart } from "lucide-react";

const Index = () => {
  const weddingDate = new Date('2026-10-31T16:00:00+07:00');

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
      
      <WeddingDetails />
      
      <WeddingRSVP />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-8 h-8 mx-auto mb-4 text-primary animate-pulse" />
          <h3 className="font-display text-2xl font-bold mb-2">Anna & Mike</h3>
          <p className="text-background/80 mb-4">October 31, 2026</p>
          <p className="text-sm text-background/60">
            Made with ♥ for our special day
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
