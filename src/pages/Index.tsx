import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, ShoppingBag, Shield, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import ServiceCard from "@/components/ServiceCard";
import ExpertiseStat from "@/components/ExpertiseStat";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Custom Websites",
    description: "Tailored sites that perfectly represent your brand, built with modern technology for speed and reliability.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description: "Secure online stores designed to convert visitors into customers with seamless checkout experiences.",
  },
  {
    icon: Shield,
    title: "Ongoing Maintenance",
    description: "Keep your site fast, secure, and up-to-date with our comprehensive maintenance packages.",
  },
];

const expertise = [
  "Next.js Specialist",
  "100% Responsive",
  "SEO Optimized",
  "AWS Certified",
];

const testimonials = [
  {
    quote: "Tailsgate transformed our online presence completely. Our new website has increased leads by 200%.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
  },
  {
    quote: "Professional, responsive, and truly understands the needs of growing businesses. Highly recommended.",
    author: "Michael Torres",
    role: "Founder, GrowthLab",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 hero-gradient pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          <Logo size="hero" className="mb-12" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6"
          >
            Crafting Digital Solutions for Growing Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Professional websites that scale with your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-4">
              What We Build
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end web solutions designed for small and mid-sized businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and standards we excel in.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {expertise.map((item, index) => (
              <ExpertiseStat key={item} label={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-steel-blue font-medium hover:gap-3 transition-all duration-300"
            >
              View Case Studies
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="text-muted-foreground text-lg">
              What our clients say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-foreground text-background rounded-2xl p-12 md:p-20"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold mb-4">
              Ready to build?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
              Let's create something exceptional together. Start your project today.
            </p>
            <Button
              variant="outline"
              size="xl"
              className="border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
