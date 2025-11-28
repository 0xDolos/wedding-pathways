import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const WeddingRSVP = () => {
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    attending: "",
    guestCount: "1",
    childrenCount: "0",
    childrenNames: "",
    plusOneName: "",
    dietaryRestrictions: "",
    transportDetails: "",
    specialRequests: "",
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "rsvps"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      toast({
        title: "RSVP Received! 💕",
        description:
          "Thank you for your response. We can't wait to celebrate with you!",
      });

      // Reset form
      setFormData({
        guestName: "",
        email: "",
        phone: "",
        attending: "",
        guestCount: "1",
        childrenCount: "0",
        childrenNames: "",
        plusOneName: "",
        dietaryRestrictions: "",
        transportDetails: "",
        specialRequests: "",
      });
    } catch (error) {
      console.error("Error saving RSVP:", error);
      toast({
        title: "Something went wrong",
        description:
          "We couldn't save your RSVP. Please try again in a moment.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 mx-auto mb-6 text-primary animate-pulse" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Please let us know if you'll be joining us on our special day. We
            can't wait to celebrate with you!
          </p>
          <div className="w-24 h-0.5 bg-gradient-romantic mx-auto mt-6" />
        </div>

        <Card className="max-w-2xl mx-auto wedding-shadow">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-center text-primary">
              Reserve Your Spot
            </CardTitle>
            <p className="text-center text-sm text-muted-foreground mt-1">
              Please RSVP by <span className="font-medium">28 February 2026</span>.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guestName">Full Name *</Label>
                  <Input
                    id="guestName"
                    value={formData.guestName}
                    onChange={(e) =>
                      handleInputChange("guestName", e.target.value)
                    }
                    required
                    className="romantic-transition"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="romantic-transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="romantic-transition"
                />
              </div>

              {/* Attendance */}
              <div className="space-y-3">
                <Label className="text-base">Will you be attending? *</Label>
                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) =>
                    handleInputChange("attending", value)
                  }
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Joyfully Accept</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">Regretfully Decline</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.attending === "yes" && (
                <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <Label className="text-base">Guest Information</Label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Number of Guests</Label>
                      <Select
                        value={formData.guestCount}
                        onValueChange={(value) => handleInputChange("guestCount", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childrenCount">Number of Children</Label>
                      <Select
                        value={formData.childrenCount}
                        onValueChange={(value) => handleInputChange("childrenCount", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="0" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Plus one block FIRST */}
                  {formData.guestCount === "2" && (
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="plusOneName">Plus One Name</Label>
                      <Input
                        id="plusOneName"
                        value={formData.plusOneName}
                        onChange={(e) => handleInputChange("plusOneName", e.target.value)}
                        className="romantic-transition"
                      />
                    </div>
                  )}

                  {/* Children names block after plus one */}
                  {formData.childrenCount !== "0" && (
                    <div className="space-y-2">
                      <Label htmlFor="childrenNames">Children’s Names</Label>
                      <Input
                        id="childrenNames"
                        value={formData.childrenNames}
                        onChange={(e) => handleInputChange("childrenNames", e.target.value)}
                        placeholder=""
                        className="romantic-transition"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="dietaryRestrictions">
                      Dietary Restrictions or Allergies
                    </Label>
                    <Textarea
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) =>
                        handleInputChange("dietaryRestrictions", e.target.value)
                      }
                      placeholder="Let us know about any dietary needs..."
                      className="romantic-transition"
                    />
                  </div>


                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      placeholder="Any special requests..."
                      className="romantic-transition"
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                variant="wedding"
                size="lg"
                className="w-full"
                disabled={
                  !formData.guestName || !formData.email || !formData.attending
                }
              >
                Send RSVP
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-muted-foreground">
          <p>
            Questions? Contact{" "}
            <a
              href="https://wa.me/61434057326"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anna
            </a>{" "}
            or{" "}
            <a
              href="https://wa.me/61405637265"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mike
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
