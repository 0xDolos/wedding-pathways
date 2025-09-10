import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Gift, Heart } from 'lucide-react';

export const WeddingRegistry = () => {
  const registryLinks = [
    {
      name: "Williams Sonoma",
      description: "Kitchen essentials and home goods",
      url: "https://williamssonoma.com",
      color: "bg-gradient-romantic"
    },
    {
      name: "Crate & Barrel", 
      description: "Furniture and home decor",
      url: "https://crateandbarrel.com",
      color: "bg-secondary"
    },
    {
      name: "Amazon",
      description: "Everyday essentials and more",
      url: "https://amazon.com",
      color: "bg-gradient-gold"
    }
  ];

  return (
    <section id="registry" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Gift className="w-12 h-12 mx-auto mb-6 text-primary animate-pulse" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wedding Registry
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you'd like to help us start our new home together, 
            we've registered at a few of our favorite places.
          </p>
          <div className="w-24 h-0.5 bg-gradient-romantic mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {registryLinks.map((registry, index) => (
            <Card key={index} className="wedding-shadow hover:shadow-romantic romantic-transition border-0 overflow-hidden">
              <div className={`h-2 ${registry.color}`} />
              <CardHeader>
                <CardTitle className="font-display text-xl text-primary">
                  {registry.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-muted-foreground mb-6">
                  {registry.description}
                </p>
                <Button 
                  variant="elegant" 
                  className="w-full"
                  onClick={() => window.open(registry.url, '_blank')}
                >
                  View Registry
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto wedding-shadow">
            <CardContent className="p-8">
              <Heart className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Honeymoon Fund
              </h3>
              <p className="text-muted-foreground mb-6">
                We're also saving for our dream honeymoon to Italy! If you'd prefer to contribute 
                to our travel fund, you can send a gift via Venmo or Zelle.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Venmo:</strong> @AnnaMichael</p>
                <p><strong>Zelle:</strong> annaandmichael@email.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};