import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  index?: number;
}

const TestimonialCard = ({ quote, author, role, index = 0 }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="p-8 bg-card border border-foreground/10 rounded-lg relative"
    >
      <Quote className="absolute top-6 right-6 text-pale-cyan/50" size={32} />
      <p className="text-foreground/80 italic text-lg leading-relaxed mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        {role && <p className="text-muted-foreground text-sm">{role}</p>}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
