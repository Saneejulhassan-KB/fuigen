import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Lightbulb, Shield } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions that exceed expectations and drive business growth."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and strategic focus on your goals."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technologies and creative thinking to solve complex business challenges."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable partnerships built on trust, transparency, and consistent delivery of results."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary bg-clip-text text-transparent">
            About Fuigen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking IT solutions company dedicated to transforming businesses 
            through innovative technology and exceptional digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Crafting Digital Solutions That Make a Difference
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Fuigen, we believe in the power of technology to transform businesses and create 
                meaningful connections between brands and their audiences. Our team combines technical 
                expertise with creative vision to deliver solutions that not only meet today's needs 
                but anticipate tomorrow's opportunities.
              </p>
              <p>
                From sleek web applications to comprehensive digital marketing strategies, we approach 
                every project with the same commitment to excellence and innovation. Our collaborative 
                process ensures that your vision becomes reality, backed by robust technology and 
                strategic thinking.
              </p>
              <p>
                Founded on the principles of quality, integrity, and continuous learning, Fuigen has 
                grown to become a trusted partner for businesses looking to make their mark in the 
                digital landscape.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg shadow-card border hover:shadow-hover transition-smooth">
                <div className="text-3xl md:text-4xl font-bold text-fuigen-primary mb-2">100+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-card border hover:shadow-hover transition-smooth">
                <div className="text-3xl md:text-4xl font-bold text-fuigen-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-card border hover:shadow-hover transition-smooth">
                <div className="text-3xl md:text-4xl font-bold text-fuigen-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-card border hover:shadow-hover transition-smooth">
                <div className="text-3xl md:text-4xl font-bold text-fuigen-secondary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-fuigen-primary to-fuigen-secondary rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;