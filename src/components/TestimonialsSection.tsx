import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "Fuigen transformed our digital presence completely. Their team delivered a stunning website that not only looks amazing but also performs exceptionally well. Our online conversions increased by 150% within the first month.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b587?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoSolutions",
      company: "EcoSolutions",
      content: "Working with Fuigen was a game-changer for our startup. They understood our vision perfectly and created a mobile app that our users absolutely love. The attention to detail and technical expertise is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, RetailPro",
      company: "RetailPro",
      content: "The branding work Fuigen did for us exceeded all expectations. Our new brand identity perfectly captures our values and has helped us stand out in a competitive market. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Operations Manager, LogiFlow",
      company: "LogiFlow",
      content: "Fuigen's digital marketing strategies doubled our online presence and significantly improved our lead generation. Their data-driven approach and creative campaigns delivered results beyond our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear what our clients say about their experience working with Fuigen
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-muted overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 text-fuigen-primary/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-foreground mb-8 italic leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-fuigen-primary font-medium">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className={`flex justify-center space-x-2 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeTestimonial 
                  ? 'bg-fuigen-primary' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-0 shadow-card bg-card
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-4 text-sm italic leading-relaxed">
                  "{testimonial.content.length > 120 ? testimonial.content.substring(0, 120) + '...' : testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;