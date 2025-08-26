import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Star,
  Globe
} from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@fuigen.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Business Ave, Tech City, TC 12345",
      subtitle: "Schedule an appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6PM",
      subtitle: "Weekend support available"
    }
  ];

  const features = [
    { icon: MessageSquare, text: "Free Consultation" },
    { icon: Star, text: "24/7 Support" },
    { icon: Globe, text: "Global Reach" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can help transform your digital presence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'}`}>
            <Card className="border-0 shadow-elegant bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="transition-smooth focus:ring-fuigen-primary focus:border-fuigen-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="transition-smooth focus:ring-fuigen-primary focus:border-fuigen-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="transition-smooth focus:ring-fuigen-primary focus:border-fuigen-primary"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="transition-smooth focus:ring-fuigen-primary focus:border-fuigen-primary"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-fuigen-primary to-fuigen-secondary text-white hover:shadow-hover transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Features */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <feature.icon className="w-4 h-4 mr-2 text-fuigen-secondary" />
                        {feature.text}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-card bg-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-fuigen-primary to-fuigen-secondary rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="mt-6 border-0 shadow-card bg-card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-fuigen-primary/10 to-fuigen-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-fuigen-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">View our location</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;