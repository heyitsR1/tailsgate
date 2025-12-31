import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <Logo size="lg" className="mb-8" />
          
          <h1 className="text-7xl md:text-9xl font-bold text-foreground/10 mb-4">404</h1>
          <h2 className="text-display-sm font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/">Go Home</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default NotFound;
