import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CountdownProps {
  weddingDate: Date;
}

export const WeddingCountdown = ({ weddingDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Counting Down to Forever
          </h2>
          <p className="text-muted-foreground text-lg">
            Every moment brings us closer to our special day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit) => (
            <Card
              key={unit.label}
              className="wedding-shadow hover:shadow-glow romantic-transition"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl md:text-6xl font-display font-bold text-primary mb-2">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                  {unit.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};