import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Shirt, Home, Plane, Camera } from 'lucide-react';

export const WeddingDetails = () => {
  const details = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ceremony Venue",
      content: "Traditional Thai wedding ceremony\nat the Fountain Bar",
      time: "8:00 AM - 12:00 PM"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Dinner Reception",
      content: "Outdoor beach lawn\nInternational buffet",
      time: "6:00 PM - 10:00 PM"
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Dress Code",
      content: "Smart casual, comfort wear\nand western style dresses are all welcome",
      time: "Traditional Thai attire is not required "
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Accommodation",
      content: (
        <>
          Hyatt Regency Hua Hin<br />
          <br />
          2 Nights included for all guests<br />
          Daily hotel breakfast included
        </>
      ),
      time: (
        <>
          <div className="text-primary font-medium">Check-in: Friday 30 Oct, 1:00 - 3:00 PM</div>
          <div className="text-primary font-medium">Check-out: Sunday 1 Nov, 12:00 PM</div>
        </>
      )
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Travel",
      content: "From Bangkok (3 hours)\n\n 30-32°C daytime\n 24-26°C evenings\n Tropical humidity 80%",
      time: "Round trip shuttle from your Bangkok hotel to the wedding venue provided"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Other Info",
      content: (
        <>
          No gifts necessary<br />your presence is more than enough<br />
        </>
      ),
      time: "More details to come. Guests will be updated closer to the date"
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
              <div className="space-y-8 text-left">

                {/* Friday */}
                <div>
                  <div className="text-primary font-semibold text-lg mb-2">
                    Friday 30 October
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">Guest Arrival</span>
                    <span className="text-muted-foreground">From 1:00 PM</span>
                  </div>
                </div>

                {/* Saturday */}
                <div>
                  <div className="text-primary font-semibold text-lg mb-2">
                    Saturday 31 October
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">Breakfast</span>
                    <span className="text-muted-foreground">6:30–8:00 AM</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">Thai Wedding Ceremony</span>
                    <span className="text-muted-foreground">8:00–11:00 AM</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">High Tea</span>
                    <span className="text-muted-foreground">11:00 AM</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">Reception Dinner</span>
                    <span className="text-muted-foreground">6:00 PM</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Evening Celebration</span>
                    <span className="text-muted-foreground">10:00 PM</span>
                  </div>
                </div>

                {/* Sunday */}
                <div>
                  <div className="text-primary font-semibold text-lg mb-2">
                    Sunday 1 November
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Guest Departure</span>
                    <span className="text-muted-foreground">12:00 PM</span>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};