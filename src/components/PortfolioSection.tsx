import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features, payment integration, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    },
    {
      title: "Mobile Banking App",
      category: "App Development",
      description: "Secure banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Firebase", "Redux", "Biometric"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    },
    {
      title: "Brand Identity System",
      category: "Branding & Design",
      description: "Complete brand identity including logo, guidelines, and marketing materials for tech startup.",
      technologies: ["Figma", "Illustrator", "Photoshop", "InDesign"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Intuitive dashboard interface for project management with advanced analytics and reporting.",
      technologies: ["Figma", "React", "Chart.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing strategy resulting in 300% increase in online engagement.",
      technologies: ["Google Ads", "Facebook", "Analytics", "SEO"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    },
    {
      title: "Product Animation",
      category: "Video & Animation",
      description: "Engaging product showcase animation for tech product launch with 3D elements.",
      technologies: ["After Effects", "Blender", "Premiere", "Cinema 4D"],
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop",
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuigen-primary to-fuigen-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our latest projects and case studies showcasing innovative solutions across various industries
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-card
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fuigen-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-fuigen-primary">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-fuigen-primary">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-fuigen-secondary/10 text-fuigen-secondary text-xs font-medium rounded-full mb-3">
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-fuigen-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-muted-foreground mb-6">
            Have a project in mind? Let's bring your vision to life.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-fuigen-primary to-fuigen-secondary text-white px-8 py-6 text-lg font-semibold shadow-hover transition-bounce hover:shadow-xl"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;