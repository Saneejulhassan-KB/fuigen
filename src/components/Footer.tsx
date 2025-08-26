import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Send
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "App Development", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "Digital Marketing", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#portfolio" },
        { label: "Free Tools", href: "#" },
        { label: "Support", href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-fuigen-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fuigen-secondary to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-fuigen-secondary-light bg-clip-text text-transparent">
                  Fuigen
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Transforming businesses through innovative digital solutions. We combine creativity 
                  with technology to deliver exceptional results that drive growth and success.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white/80">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hello@fuigen.com</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>123 Business Ave, Tech City, TC 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fuigen-secondary transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-6">
              <div className="grid md:grid-cols-3 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-white/80 text-sm mb-4">
                Subscribe to our newsletter for the latest updates, tips, and insights.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-fuigen-secondary"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-fuigen-secondary hover:bg-fuigen-secondary-light text-white"
                >
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Fuigen. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-fuigen-secondary hover:bg-fuigen-secondary-light text-white rounded-full shadow-hover flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;