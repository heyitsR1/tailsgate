import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, ShoppingBag, Shield, MessageSquare, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Custom Websites",
    description: "Bespoke web solutions tailored to your unique brand identity and business goals.",
    features: [
      "Responsive design for all devices",
      "Lightning-fast performance",
      "SEO-optimized from the ground up",
      "Modern tech stack (React, Next.js)",
      "Content management systems",
    ],
    price: "Starting at $3,000",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description: "Full-featured online stores that drive sales and provide seamless shopping experiences.",
    features: [
      "Secure payment processing",
      "Inventory management",
      "Order tracking & notifications",
      "Customer accounts & wishlists",
      "Analytics & reporting",
    ],
    price: "Starting at $5,000",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Keep your website running smoothly with ongoing technical support and updates.",
    features: [
      "24/7 uptime monitoring",
      "Regular security updates",
      "Performance optimization",
      "Content updates & changes",
      "Priority support response",
    ],
    price: "From $200/month",
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    description: "Expert guidance on technology decisions to ensure you choose the right solutions.",
    features: [
      "Tech stack evaluation",
      "Architecture planning",
      "Scalability assessment",
      "Integration strategy",
      "Cost optimization",
    ],
    price: "From $150/hour",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-display-md md:text-display-lg font-semibold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive web development services designed to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-foreground/10 rounded-xl p-8 hover:shadow-brand transition-shadow duration-300"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-steel-blue/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-steel-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground/80">
                        <Check size={18} className="text-steel-blue flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                    <span className="text-steel-blue font-semibold">{service.price}</span>
                    <Button variant="ghost" size="sm" className="text-foreground" asChild>
                      <Link to="/contact">
                        Get Started <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined process designed to deliver results efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, goals, and requirements." },
              { step: "02", title: "Design", desc: "We create wireframes and designs for your approval." },
              { step: "03", title: "Development", desc: "We build your website with clean, efficient code." },
              { step: "04", title: "Launch", desc: "We deploy and ensure everything runs smoothly." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-pale-cyan/50 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-sm md:text-display-md font-semibold text-background mb-4">
              Ready to get started?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation and project estimate.
            </p>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
