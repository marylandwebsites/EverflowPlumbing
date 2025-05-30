import { Wrench } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    "Emergency Repairs",
    "Fixture Installation",
    "Drain Cleaning",
    "Water Heater Service",
    "Remodeling Projects",
    "Leak Detection",
  ],
};

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                <Wrench className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Everflow Plumbing</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted plumbing professionals in Silver Spring, MD. Licensed, insured, and committed to excellence.
            </p>
            <div className="text-sm text-gray-400">
              <p>License #: MD-123456</p>
              <p>Insured & Bonded</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:+13018555555" className="hover:text-white transition-colors">
                  (301) 855-5555
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href="mailto:info@everflowplumbing.com" className="hover:text-white transition-colors">
                  info@everflowplumbing.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <span>Silver Spring, MD</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">🕒</span>
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Everflow Plumbing Services. All rights reserved. | Licensed & Insured | Serving Silver Spring, MD & Surrounding Areas
          </p>
        </div>
      </div>
    </footer>
  );
}
