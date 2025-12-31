import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const milestones = [
  { year: "2024", title: "Founded", description: "Tailsgate was established with a mission to help SMBs grow online." },
  { year: "2024", title: "First Clients", description: "Successfully delivered websites for 10+ businesses in the first year." },
  { year: "2025", title: "Expanding", description: "Growing our team and expanding service offerings globally." },
];

const values = [
  {
    icon: Zap,
    title: "Speed & Performance",
    description: "We build fast, optimized websites that don't keep your visitors waiting.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your success is our success. We prioritize your business goals in every decision.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every line of code is written with care, ensuring reliability and maintainability.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-display-md md:text-display-lg font-semibold text-foreground mb-6">
                About Tailsgate
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                We're a focused web development agency helping small and mid-sized businesses 
                establish a powerful online presence.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded by a Computer Science graduate with AWS certifications, we combine 
                technical expertise with a deep understanding of business needs to deliver 
                websites that truly work for you.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-steel-blue/10 rounded-full blur-3xl" />
                <Logo size="hero" className="relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8"
                >
                  <div className="w-16 h-16 rounded-full bg-steel-blue/10 flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-steel-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building great websites, one milestone at a time.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-steel-blue transform md:-translate-x-1/2" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}>
                    <span className="text-steel-blue font-semibold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-4">
              The Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Small team, big expertise. Scalable support for your growing needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto text-center"
          >
            <div className="w-32 h-32 rounded-full bg-steel-blue/20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-steel-blue">TG</span>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">Founder & Lead Developer</h3>
            <p className="text-muted-foreground mb-4">
              AWS Certified • Computer Science Graduate • Full-Stack Developer
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Passionate about building reliable, scalable web solutions for businesses 
              that want to make an impact online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-foreground text-background rounded-2xl p-12 md:p-20"
          >
            <h2 className="text-display-sm md:text-display-md font-semibold mb-4">
              Let's Build Together
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
              Ready to take your business online? We'd love to hear about your project.
            </p>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
