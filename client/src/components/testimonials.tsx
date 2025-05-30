import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Silver Spring, MD",
    rating: 5,
    content: "Excellent service! They fixed our emergency pipe leak within 2 hours of calling. Professional, clean, and reasonably priced. Highly recommend!",
    isActive: true,
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    location: "Takoma Park, MD",
    rating: 5,
    content: "Had them install a new water heater. They were punctual, explained everything clearly, and left the area cleaner than when they arrived. Great work!",
    isActive: true,
  },
  {
    id: 3,
    name: "Jennifer Chen",
    location: "Wheaton, MD",
    rating: 5,
    content: "Outstanding customer service and quality work. They helped us with our bathroom renovation and the results exceeded our expectations. Will definitely use again!",
    isActive: true,
  },
];

export default function Testimonials() {

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from satisfied customers across Silver Spring
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">{testimonial.name}</h5>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
