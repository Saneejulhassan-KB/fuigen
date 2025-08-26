import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Zap, Users } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fuigen Digital Solutions Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-fuigen-primary/90 via-fuigen-primary/80 to-fuigen-secondary/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-fuigen-secondary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-fuigen-secondary/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
        <div className="text-center text-white">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-fuigen-secondary-light bg-clip-text text-transparent">
                Fuigen
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Innovating Your Digital Presence
            </p>
            <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
              Transform your business with cutting-edge IT solutions, modern web development, 
              and innovative digital strategies that drive real results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-fuigen-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-hover transition-bounce"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-fuigen-primary px-8 py-6 text-lg font-semibold transition-bounce"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-smooth hover:bg-white/20 hover:scale-105">
                <Code className="w-8 h-8 mb-4 text-fuigen-secondary-light" />
                <h3 className="text-lg font-semibold mb-2">Modern Development</h3>
                <p className="text-white/80 text-sm">Latest technologies and frameworks</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-smooth hover:bg-white/20 hover:scale-105">
                <Zap className="w-8 h-8 mb-4 text-fuigen-secondary-light" />
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-white/80 text-sm">Quick turnaround times</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-smooth hover:bg-white/20 hover:scale-105">
                <Users className="w-8 h-8 mb-4 text-fuigen-secondary-light" />
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-white/80 text-sm">Experienced professionals</p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={scrollToNextSection}
              className="inline-flex items-center text-white/80 hover:text-white transition-smooth animate-bounce"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;