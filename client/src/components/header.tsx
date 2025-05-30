import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Wrench } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`${mobile ? "flex flex-col space-y-4" : "hidden md:flex items-center space-x-8"}`}>
      <button
        onClick={() => scrollToSection("home")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("services")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        Services
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("testimonials")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        Reviews
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        Contact
      </button>
      <Button
        onClick={() => scrollToSection("contact")}
        className="bg-primary-blue hover:bg-blue-800 text-white"
      >
        Get Quote
      </Button>
    </div>
  );

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-emergency-red text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold">24/7 Emergency Plumbing Services Available!</span>
          <a
            href="tel:+13018555555"
            className="ml-4 underline hover:no-underline"
          >
            Call Now: (301) 855-5555
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                <Wrench className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Everflow Plumbing</h1>
                <p className="text-sm text-gray-600">Professional Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavLinks />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavLinks mobile />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
