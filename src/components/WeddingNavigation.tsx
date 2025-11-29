import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { useTranslation } from "react-i18next";

interface WeddingNavigationProps {
  onScrollToSection: (sectionId: string) => void;
}

export const WeddingNavigation = ({ onScrollToSection }: WeddingNavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { i18n } = useTranslation();
  const currentLang = (i18n.language || "en").toLowerCase();
  const isThai = currentLang.startsWith("th");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Details', id: 'details' },
    { label: 'RSVP', id: 'rsvp' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md wedding-shadow'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-xl font-display font-bold"
          >
            <Heart
              className={`w-6 h-6 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            />
            <span className={isScrolled ? 'text-foreground' : 'text-white'}>
              A &amp; M
            </span>
          </button>

          {/* Right side: desktop nav + mobile lang + menu */}
          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-primary ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Desktop Language Switcher */}
              <div className="flex items-center gap-1 text-xs md:text-sm">
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage('en')}
                  className={`px-2 py-1 rounded-md border transition ${
                    !isThai
                      ? `${
                          isScrolled
                            ? 'bg-foreground text-background border-foreground/80'
                            : 'bg-white text-black border-white/80'
                        }`
                      : `${
                          isScrolled
                            ? 'bg-transparent text-foreground border-foreground/40'
                            : 'bg-black/40 text-white/80 border-white/30'
                        }`
                  }`}
                >
                  EN
                </button>
                <span
                  className={
                    isScrolled ? 'text-foreground/60' : 'text-white/70'
                  }
                >
                  /
                </span>
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage('th')}
                  className={`px-2 py-1 rounded-md border transition ${
                    isThai
                      ? `${
                          isScrolled
                            ? 'bg-foreground text-background border-foreground/80'
                            : 'bg-white text-black border-white/80'
                        }`
                      : `${
                          isScrolled
                            ? 'bg-transparent text-foreground border-foreground/40'
                            : 'bg-black/40 text-white/80 border-white/30'
                        }`
                  }`}
                >
                  ไทย
                </button>
              </div>
            </div>

            {/* Mobile: language pill + menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <div className="flex items-center gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage('en')}
                  className={`px-2 py-1 rounded-md border transition ${
                    !isThai
                      ? `${
                          isScrolled
                            ? 'bg-foreground text-background border-foreground/80'
                            : 'bg-white text-black border-white/80'
                        }`
                      : `${
                          isScrolled
                            ? 'bg-transparent text-foreground border-foreground/40'
                            : 'bg-black/40 text-white/80 border-white/30'
                        }`
                  }`}
                >
                  EN
                </button>
                <span
                  className={
                    isScrolled ? 'text-foreground/60' : 'text-white/70'
                  }
                >
                  /
                </span>
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage('th')}
                  className={`px-2 py-1 rounded-md border transition ${
                    isThai
                      ? `${
                          isScrolled
                            ? 'bg-foreground text-background border-foreground/80'
                            : 'bg-white text-black border-white/80'
                        }`
                      : `${
                          isScrolled
                            ? 'bg-transparent text-foreground border-foreground/40'
                            : 'bg-black/40 text-white/80 border-white/30'
                        }`
                  }`}
                >
                  ไทย
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X
                    className={`w-6 h-6 ${
                      isScrolled ? 'text-foreground' : 'text-white'
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${
                      isScrolled ? 'text-foreground' : 'text-white'
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg mt-2 py-4 wedding-shadow">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="mt-2 px-4 flex items-center gap-2 text-sm">
              <span className="text-muted-foreground mr-2">
                Language:
              </span>
              <button
                type="button"
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
                className={`px-2 py-1 rounded-md border text-xs transition ${
                  !isThai
                    ? "bg-foreground text-background border-foreground/80"
                    : "bg-transparent text-foreground border-foreground/40"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => {
                  i18n.changeLanguage("th");
                }}
                className={`px-2 py-1 rounded-md border text-xs transition ${
                  isThai
                    ? "bg-foreground text-background border-foreground/80"
                    : "bg-transparent text-foreground border-foreground/40"
                }`}
              >
                ไทย
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};