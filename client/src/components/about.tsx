import { Card, CardContent } from "@/components/ui/card";
import { IdCard, Users, Handshake } from "lucide-react";

const features = [
  {
    icon: IdCard,
    title: "Licensed & Insured",
    description: "Fully licensed plumbers with comprehensive insurance coverage",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "15+ years of combined experience in residential and commercial plumbing",
  },
  {
    icon: Handshake,
    title: "Customer Satisfaction",
    description: "100% satisfaction guarantee on all work performed",
  },
];

const businessHours = [
  { days: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "8:00 AM - 4:00 PM" },
  { days: "Sunday", hours: "Emergency Only" },
  { days: "Emergency Service", hours: "24/7", emergency: true },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional plumbing team"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Everflow Plumbing Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience serving the Silver Spring community, Everflow Plumbing Services has built a reputation for reliable, professional plumbing solutions. Our licensed and insured team is committed to providing exceptional service at fair prices.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Business Hours</h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex justify-between ${
                        schedule.emergency ? "text-emergency-red font-semibold" : ""
                      }`}
                    >
                      <span>{schedule.days}:</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
