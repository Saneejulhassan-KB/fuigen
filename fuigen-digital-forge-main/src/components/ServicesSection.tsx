import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Award, 
  Brush, 
  Video, 
  BarChart3, 
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built with modern technologies, responsive design, and optimized performance.",
      features: ["React & Next.js", "SEO Optimized", "Mobile Responsive", "Fast Loading"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "Cloud Integration", "Real-time Features"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality and usability.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Award,
      title: "Logo & Branding",
      description: "Complete brand identity solutions that capture your essence and resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"]
    },
    {
      icon: Brush,
      title: "Graphic Design",
      description: "Creative visual solutions for print and digital media that communicate your message effectively.",
      features: ["Print Design", "Digital Graphics", "Illustrations", "Marketing Materials"]
    },
    {
      icon: Video,
      title: "Video & Animation",
      description: "Engaging video content and animations that tell your story and captivate your audience.",
      features: ["Motion Graphics", "Explainer Videos", "2D/3D Animation", "Video Editing"]
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility and drive meaningful engagement.",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to elevate your business and drive digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-hover transition-all duration-500 hover:-translate-y-3 border-0 shadow-card bg-card overflow-hidden
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Icon Header */}
                <div className="p-6 pb-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-fuigen-primary to-fuigen-secondary rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-elegant">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-fuigen-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="px-6 pb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-fuigen-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="h-1 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-fuigen-primary to-fuigen-secondary p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital goals and drive growth.
            </p>
            <Button 
              size="lg"
              className="bg-white text-fuigen-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-hover transition-bounce"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;