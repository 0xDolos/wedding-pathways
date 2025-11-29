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
import { useTranslation } from "react-i18next";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { i18n } = useTranslation();
  const currentLang = (i18n.language || "en").toLowerCase();
  const isThai = currentLang.startsWith("th");

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "rsvps"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      toast({
        title: isThai ? "ได้รับคำตอบรับแล้ว 💕" : "RSVP Received! 💕",
        description: isThai
          ? "ขอบคุณที่ตอบรับคำเชิญ เราอยากฉลองกับคุณมาก ๆ !"
          : "Thank you for your response. We can't wait to celebrate with you!",
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
        title: isThai ? "เกิดข้อผิดพลาด" : "Something went wrong",
        description: isThai
          ? "ไม่สามารถบันทึกคำตอบรับได้ กรุณาลองใหม่อีกครั้ง"
          : "We couldn't save your RSVP. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 mx-auto mb-6 text-primary animate-pulse" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isThai ? "ตอบรับคำเชิญ (RSVP)" : "RSVP"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isThai
              ? "กรุณาแจ้งให้เราทราบว่าท่านจะมาร่วมงานหรือไม่ เราตื่นเต้นมากที่จะได้ฉลองไปพร้อมกับทุกคน"
              : "Please let us know if you'll be joining us on our special day. We can't wait to celebrate with you!"}
          </p>
          <div className="w-24 h-0.5 bg-gradient-romantic mx-auto mt-6" />
        </div>

        <Card className="max-w-2xl mx-auto wedding-shadow">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-center text-primary">
              {isThai ? "ตอบรับคำเชิญ" : "Reserve Your Spot"}
            </CardTitle>
            <p className="text-center text-sm text-muted-foreground mt-1">
              {isThai ? (
                <>
                  กรุณาตอบรับภายใน{" "}
                  <span className="font-medium">28 กุมภาพันธ์ 2569</span>.
                </>
              ) : (
                <>
                  Please RSVP by{" "}
                  <span className="font-medium">28 February 2026</span>.
                </>
              )}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guestName">
                    {isThai ? "ชื่อ–นามสกุล *" : "Full Name *"}
                  </Label>
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
                  <Label htmlFor="email">
                    {isThai ? "อีเมล *" : "Email Address *"}
                  </Label>
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
                <Label htmlFor="phone">
                  {isThai ? "เบอร์โทรศัพท์" : "Phone Number"}
                </Label>
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
                <Label className="text-base">
                  {isThai ? "ท่านจะมาร่วมงานหรือไม่? *" : "Will you be attending? *"}
                </Label>
                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) =>
                    handleInputChange("attending", value)
                  }
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">
                      {isThai ? "ยินดีมาร่วมงาน" : "Joyfully Accept"}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">
                      {isThai ? "ไม่สามารถมาร่วมงานได้" : "Regretfully Decline"}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.attending === "yes" && (
                <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <Label className="text-base">
                      {isThai ? "ข้อมูลผู้เข้าร่วม" : "Guest Information"}
                    </Label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">
                        {isThai ? "จำนวนผู้ใหญ่" : "Number of Guests"}
                      </Label>
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
                      <Label htmlFor="childrenCount">
                        {isThai ? "จำนวนเด็ก" : "Number of Children"}
                      </Label>
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
                      <Label htmlFor="plusOneName">
                        {isThai ? "ชื่อผู้ติดตาม" : "Plus One Name"}
                      </Label>
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
                      <Label htmlFor="childrenNames">
                        {isThai ? "ชื่อเด็ก" : "Children’s Names"}
                      </Label>
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
                      {isThai
                        ? "ข้อจำกัดด้านอาหารหรืออาหารที่แพ้"
                        : "Dietary Restrictions or Allergies"}
                    </Label>
                    <Textarea
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) =>
                        handleInputChange("dietaryRestrictions", e.target.value)
                      }
                      placeholder={
                        isThai
                          ? "หากมีข้อจำกัดด้านอาหาร กรุณาแจ้งให้เราทราบ..."
                          : "Let us know about any dietary needs..."
                      }
                      className="romantic-transition"
                    />
                  </div>


                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">
                      {isThai ? "คำขอพิเศษ" : "Special Requests"}
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      placeholder={
                        isThai ? "หากมีคำขอพิเศษ สามารถแจ้งได้ที่นี่..." : "Any special requests..."
                      }
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
                  isSubmitting ||
                  !formData.guestName ||
                  !formData.email ||
                  !formData.attending
                }
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent align-middle" />
                    {isThai ? "กำลังส่ง..." : "Sending..."}
                  </>
                ) : (
                  (isThai ? "ส่งคำตอบรับ" : "Send RSVP")
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-muted-foreground">
          <p>
            {isThai ? "หากมีคำถาม ติดต่อ " : "Questions? Contact "}
            <a
              href="https://wa.me/61434057326"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anna
            </a>{" "}
            {isThai ? "หรือ " : "or "}
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
