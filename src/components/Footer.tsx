import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";
import tailsgateLogo from "@/assets/tailsgate-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={tailsgateLogo} 
                alt="Tailsgate" 
                className="w-10 h-10 object-contain invert"
              />
              <span className="font-display font-semibold tracking-[0.15em] text-sm">
                TAILSGATE
              </span>
            </Link>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Crafting professional websites for small and mid-sized businesses. 
              We build digital solutions that scale with your growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-background/70 hover:text-background transition-colors">Home</Link>
              <Link to="/services" className="text-background/70 hover:text-background transition-colors">Services</Link>
              <Link to="/about" className="text-background/70 hover:text-background transition-colors">About</Link>
              <Link to="/contact" className="text-background/70 hover:text-background transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:hello@tailsgate.com"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Tailsgate. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
