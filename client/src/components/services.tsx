import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplets, Flame, Home, Search, ShowerHead, Clock, Bolt, CheckCircle, IdCard, Star, Shield } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description: "24/7 emergency plumbing repairs for burst pipes, clogged drains, and water heater failures.",
    feature: "Available 24/7",
    featureIcon: Clock,
  },
  {
    icon: ShowerHead,
    title: "Fixture Installation",
    description: "Professional installation of faucets, toilets, sinks, and other plumbing fixtures.",
    feature: "Expert Installation",
    featureIcon: Bolt,
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Professional drain cleaning and clog removal using advanced equipment and techniques.",
    feature: "Guaranteed Results",
    featureIcon: CheckCircle,
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    description: "Water heater repair, maintenance, and replacement services for all major brands.",
    feature: "Licensed Specialists",
    featureIcon: IdCard,
  },
  {
    icon: Home,
    title: "Remodeling Projects",
    description: "Complete bathroom and kitchen plumbing for renovation and remodeling projects.",
    feature: "Quality Craftsmanship",
    featureIcon: Star,
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Advanced leak detection services to identify hidden leaks and prevent water damage.",
    feature: "Damage Prevention",
    featureIcon: Shield,
  },
];

const serviceAreas = {
  primary: [
    "Silver Spring, MD",
    "Takoma Park, MD",
    "Wheaton, MD",
    "Kensington, MD",
  ],
  extended: [
    "Bethesda, MD",
    "Rockville, MD",
    "Chevy Chase, MD",
    "College Park, MD",
  ],
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Plumbing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to complete installations, we provide comprehensive plumbing solutions for residential and commercial properties in the Silver Spring area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const FeatureIconComponent = service.featureIcon;
            
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="text-primary-blue font-semibold flex items-center">
                    <FeatureIconComponent className="mr-2 h-5 w-5" />
                    {service.feature}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Areas */}
        <Card className="bg-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Service Areas</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary-blue mb-4">Primary Service Area</h4>
                <ul className="space-y-2 text-gray-600">
                  {serviceAreas.primary.map((area, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-blue mb-4">Extended Service Area</h4>
                <ul className="space-y-2 text-gray-600">
                  {serviceAreas.extended.map((area, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
