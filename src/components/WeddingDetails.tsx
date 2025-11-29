import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Shirt, Home, Plane, Camera } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const WeddingDetails = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || "en").toLowerCase();
  const isThai = currentLang.startsWith("th");

  const details = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: isThai ? "สถานที่พิธีแต่งงาน" : "Ceremony Venue",
      content: isThai
        ? "Hyatt Regency หัวหิน\n\nพิธีแต่งงานแบบไทย\nบริเวณ Fountain Bar"
        : "Hyatt Regency Hua Hin\n\nTraditional Thai wedding ceremony\nat the Fountain Bar",
      time: isThai ? "08:00–12:00 น." : "8:00 AM - 12:00 PM",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: isThai ? "งานเลี้ยงฉลองมื้อเย็น" : "Dinner Reception",
      content: isThai
        ? "ลานริมชายหาดกลางแจ้ง\nบุฟเฟต์นานาชาติ"
        : "Outdoor beach lawn\nInternational buffet",
      time: isThai ? "18:00–22:00 น." : "6:00 PM - 10:00 PM",
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: isThai ? "การแต่งกาย" : "Dress Code",
      content: isThai
        ? "แต่งกายสุภาพแบบสบาย ๆ\nหรือชุดสไตล์ตะวันตกก็ได้"
        : "Smart casual, comfort wear\nand western style dresses are all welcome",
      time: isThai
        ? "ไม่จำเป็นต้องใส่ชุดไทย"
        : "Traditional Thai attire is not required ",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: isThai ? "ที่พัก" : "Accommodation",
      content: isThai ? (
        <>
          Hyatt Regency หัวหิน<br />
          <br />
          ที่พัก 2 คืนสำหรับทุกท่าน<br />
          รวมอาหารเช้าทุกวัน
        </>
      ) : (
        <>
          Hyatt Regency Hua Hin<br />
          <br />
          2 Nights included for all guests<br />
          Daily hotel breakfast included
        </>
      ),
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: isThai ? "การเดินทาง" : "Travel",
      content: isThai
        ? "จากกรุงเทพฯ (ประมาณ 3 ชั่วโมง)\n"
        : "From Bangkok (3 hours)\n",
      time: isThai
        ? "มีรถรับ–ส่งไป–กลับ จากโรงแรมของท่านในกรุงเทพฯถึงสถานที่จัดงาน"
        : "Round trip shuttle from your Bangkok hotel to the wedding venue provided",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: isThai ? "ข้อมูลเพิ่มเติม" : "Other Info",
      content: isThai ? (
        <>
          ไม่จำเป็นต้องมีของขวัญ<br />
          เพียงแค่มาร่วมงานก็เพียงพอแล้ว<br />
        </>
      ) : (
        <>
          No gifts necessary<br />
          your presence is more than enough<br />
        </>
      ),
      time: isThai
        ? "รายละเอียดเพิ่มเติมจะแจ้งให้ทราบใกล้วันงาน"
        : "More details to come. Guests will be updated closer to the date",
    },
  ];

  return (
    <section id="details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isThai ? "รายละเอียดงานแต่งงาน" : "Wedding Details"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isThai
              ? "ทุกข้อมูลสำคัญสำหรับวันพิเศษของเรา"
              : "Everything you need to know about our special day"}
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
                {isThai ? "กำหนดการงานแต่งงาน" : "Wedding Timeline"}
              </h3>
              <div className="space-y-8 text-left">

                {/* Friday */}
                <div>
                  <div className="text-primary font-semibold text-lg mb-2">
                    {isThai ? "วันศุกร์ที่ 30 ตุลาคม 2569" : "Friday 30 October"}
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">
                      {isThai ? "เช็คอิน / เดินทางมาถึง" : "Guest Arrival"}
                    </span>
                    <span className="text-muted-foreground">
                      {isThai ? "ตั้งแต่ 13:00 น." : "From 1:00 PM"}
                    </span>
                  </div>
                </div>

                {/* Saturday */}
                <div>
                  <div className="text-primary font-semibold text-lg mb-2">
                    {isThai ? "วันเสาร์ที่ 31 ตุลาคม 2569" : "Saturday 31 October"}
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">
                      {isThai ? "อาหารเช้า" : "Breakfast"}
                    </span>
                    <span className="text-muted-foreground">
                      {isThai ? "06:30–08:00 น." : "6:30–8:00 AM"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">
                      {isThai ? "พิธีแต่งงานแบบไทย" : "Thai Wedding Ceremony"}
                    </span>
                    <span className="text-muted-foreground">
                      {isThai ? "08:00 น." : "8:00 AM"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">
                      {isThai ? "น้ำชาและของว่าง" : "High Tea"}
                    </span>
                    <span className="text-muted-foreground">
                      {isThai ? "11:00 น." : "11:00 AM"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium">
                      {isThai ? "งานเลี้ยงฉลองมื้อเย็น" : "Reception Dinner"}
                    </span>
                    <span className="text-muted-foreground">
                      {isThai ? "18:00 น." : "6:00 PM"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {isThai ? "ปาร์ตี้ยามค่ำคืน" : "Evening Celebration"}
                    </span>
                    <span className="text-muted-foreground">
                      {isThai ? "22:00 น." : "10:00 PM"}
                    </span>
                  </div>
                </div>

                {/* Sunday */}
                <div>
                  <div className="text-primary font-semibold text-lg mb-2">
                    {isThai ? "วันอาทิตย์ที่ 1 พฤศจิกายน 2569" : "Sunday 1 November"}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {isThai ? "เช็คเอาต์ / เดินทางกลับ" : "Guest Departure"}
                    </span>
                    <span className="text-muted-foreground">
                      {isThai ? "12:00 น." : "12:00 PM"}
                    </span>
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