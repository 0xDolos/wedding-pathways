import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Shirt, Home, Plane, Camera } from 'lucide-react';

export const WeddingDetails = () => {
  const details = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ceremony Venue",
      content: "Sunset Gardens\n123 Vineyard Lane\nNapa Valley, CA 94558",
      time: "4:00 PM"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reception",
      content: "Immediately following ceremony\nSame location",
      time: "6:00 PM - 12:00 AM"
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Dress Code",
      content: "Formal Attire\nEarth tones preferred\nComfortable shoes recommended",
      time: ""
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Accommodation",
      content: "Napa Valley Lodge\n(Special rate available)\nCall: (707) 555-0123",
      time: "Mention 'Sarah & Michael'"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Travel",
      content: "Nearest Airport: SFO (1.5 hours)\nShuttle service available\nContact us for details",
      time: ""
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography",
      content: "Unplugged ceremony\nPlease keep phones away\nProfessional photos to follow",
      time: ""
    }
  ];

  return (
    <section id="details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wedding Details
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our special day
          </p>
          <div className="w-24 h-0.5 bg-gradient-romantic mx-auto mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <Card key={index} className="wedding-shadow hover:shadow-romantic romantic-transition border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-primary">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {detail.icon}
                  </div>
                  <span className="font-display text-xl">{detail.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-line text-muted-foreground mb-3">
                  {detail.content}
                </div>
                {detail.time && (
                  <div className="text-primary font-medium">{detail.time}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto wedding-shadow">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Wedding Timeline
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium">Guest Arrival</span>
                  <span className="text-muted-foreground">3:30 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium">Ceremony Begins</span>
                  <span className="text-muted-foreground">4:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium">Cocktail Hour</span>
                  <span className="text-muted-foreground">5:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium">Reception & Dinner</span>
                  <span className="text-muted-foreground">6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Dancing & Celebration</span>
                  <span className="text-muted-foreground">8:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};