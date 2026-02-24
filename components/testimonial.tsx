"use client";
import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@components/button";
import { Card, CardContent } from "@components/card";

export default function Testimonial(): ReactNode {
  const testimonials = [
    {
      quote:
        "Cazza.ai is meticulous, knowledgeable, and responsive. It's become a key part of how we run our business.",
      author: "Moicha Matcha",
      rating: 5
    },
    {
      quote: "Always willing to go the extra mile; communication, efficiency, and insights are top-notch.",
      author: "Stoic Store UK",
      rating: 5
    },
    {
      quote: "Attention to detail and overall knowledge is excellent. The platform keeps us on top of best practices.",
      author: "3PL Pro",
      rating: 5
    },
    {
      quote: "Excellent communication and a high standard of work, even on tight timelines. Cazza.ai just works.",
      author: "Footsie 100",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and responsive — went above and beyond to make the numbers clear.",
      author: "Candisearch",
      rating: 5
    },
    {
      quote: "Quick to respond and a true one-stop shop for our data needs. Game changer.",
      author: "Eudemo",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Loved by eCommerce sellers worldwide</h2>
            </div>
            <div className="relative">
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <blockquote className="text-xl lg:text-2xl text-center text-foreground font-medium leading-relaxed">
                      &quot;{testimonials[currentTestimonial].quote}&quot;
                    </blockquote>
                    <p className="text-center text-muted-foreground font-medium">
                      — {testimonials[currentTestimonial].author}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
