import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(301) 855-5555",
    href: "tel:+13018555555",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@everflowplumbing.com",
    href: "mailto:info@everflowplumbing.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Silver Spring, MD & Surrounding Areas",
  },
  {
    icon: Clock,
    title: "Emergency Service",
    value: "Available 24/7",
  },
];

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-primary-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100">Ready to solve your plumbing issues? Contact us today for a free quote!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-blue-100">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block hover:opacity-80 transition-opacity">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Emergency Call-to-Action */}
            <Card className="bg-emergency-red border-none mt-8">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2 text-white">Emergency?</h4>
                <p className="mb-4 text-white">Don't wait - call us now for immediate assistance!</p>
                <Button
                  className="bg-white text-emergency-red hover:bg-gray-100"
                  onClick={() => window.open("tel:+13018555555")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call for Quote */}
          <Card className="bg-white text-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">Get Your Free Quote</h3>
              
              <div className="text-center space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-primary-blue mb-3">Ready to Get Started?</h4>
                  <p className="text-gray-600 mb-4">
                    Call us now for a free estimate on your plumbing project. Our experienced team will discuss your needs and provide transparent pricing.
                  </p>
                  
                  <Button
                    size="lg"
                    className="bg-primary-blue hover:bg-blue-800 text-white text-lg px-8 py-3"
                    onClick={() => window.open("tel:+13018555555")}
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    Call (301) 855-5555
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                    <ul className="space-y-1 text-left">
                      <li>• Free phone consultation</li>
                      <li>• Same-day service available</li>
                      <li>• Upfront pricing</li>
                      <li>• Licensed & insured professionals</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Alternative Contact:</h5>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-primary-blue" />
                        <a href="mailto:info@everflowplumbing.com" className="hover:text-primary-blue">
                          info@everflowplumbing.com
                        </a>
                      </div>
                      <div className="text-gray-500">
                        Response within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
