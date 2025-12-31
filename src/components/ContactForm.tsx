import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-steel-blue mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2 text-foreground">Thank you!</h3>
        <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-card border border-foreground/20 rounded-lg focus:border-steel-blue focus:ring-1 focus:ring-steel-blue outline-none transition-colors text-foreground"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-card border border-foreground/20 rounded-lg focus:border-steel-blue focus:ring-1 focus:ring-steel-blue outline-none transition-colors text-foreground"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          required
          className="w-full px-4 py-3 bg-card border border-foreground/20 rounded-lg focus:border-steel-blue focus:ring-1 focus:ring-steel-blue outline-none transition-colors text-foreground"
        >
          <option value="">Select a budget range</option>
          <option value="1k-5k">$1,000 - $5,000</option>
          <option value="5k-20k">$5,000 - $20,000</option>
          <option value="20k+">$20,000+</option>
          <option value="custom">Custom / Let's Discuss</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-card border border-foreground/20 rounded-lg focus:border-steel-blue focus:ring-1 focus:ring-steel-blue outline-none transition-colors resize-none text-foreground"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
