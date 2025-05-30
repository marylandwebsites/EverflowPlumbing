import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Star } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-700 to-blue-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Professional Plumbing Services in Silver Spring, MD
            </h2>
            <p className="text-xl mb-8 text-gray-100 font-medium">
              Licensed, insured, and experienced plumbers providing reliable solutions for your home and business. Available 24/7 for emergencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-white text-primary-blue hover:bg-gray-100"
                onClick={() => window.open("tel:+13018555555")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (301) 855-5555
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-blue"
                onClick={scrollToContact}
              >
                Get Free Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-gray-100 font-medium">
              <div className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-gray-100" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-gray-100" />
                <span>24/7 Emergency</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-5 w-5 text-gray-100" />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional plumber working"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
