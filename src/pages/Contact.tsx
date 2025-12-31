import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact Tailsgate - Start Your Project"
        description="Get in touch with Tailsgate to start your next web project. We are ready to help you grow your business."
        keywords="contact tailsgate, hire web developer, start project, web design quote"
        url="https://tailsgate.com/contact"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-display-md md:text-display-lg font-semibold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your project? Have questions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-display-sm font-semibold text-foreground mb-8">
                Let's Talk
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind or just want to explore possibilities,
                we're here to help. Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-steel-blue/10 flex items-center justify-center">
                    <Mail className="text-steel-blue" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:hello@tailsgate.com" className="text-foreground font-medium hover:text-steel-blue transition-colors">
                      hello@tailsgate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-steel-blue/10 flex items-center justify-center">
                    <Phone className="text-steel-blue" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <span className="text-foreground font-medium">Available upon request</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-steel-blue/10 flex items-center justify-center">
                    <MapPin className="text-steel-blue" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <span className="text-foreground font-medium">Working Globally</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Connect with us</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center hover:bg-steel-blue hover:border-steel-blue hover:text-off-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border border-foreground/20 flex items-center justify-center hover:bg-steel-blue hover:border-steel-blue hover:text-off-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-12 h-48 rounded-xl bg-muted overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456!2d85.324!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tailsgate Location"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-foreground/10 rounded-xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send us a message
              </h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-sm font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Most websites are completed within 4-8 weeks, depending on complexity and scope.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer maintenance packages to keep your site secure, updated, and running smoothly.",
              },
              {
                q: "What technologies do you use?",
                a: "We primarily use React, Next.js, and modern web technologies for fast, scalable websites.",
              },
              {
                q: "Can you work with existing designs?",
                a: "Absolutely. We can work with your designs or help create new ones that match your brand.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-foreground/10 rounded-lg p-6"
              >
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
