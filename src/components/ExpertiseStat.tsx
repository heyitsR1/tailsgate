import { motion } from "framer-motion";

interface ExpertiseStatProps {
  label: string;
  index?: number;
}

const ExpertiseStat = ({ label, index = 0 }: ExpertiseStatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="px-6 py-4 bg-pale-cyan/20 border border-pale-cyan/30 rounded-lg text-center hover:bg-pale-cyan/30 transition-colors duration-300"
    >
      <span className="text-foreground font-medium">{label}</span>
    </motion.div>
  );
};

export default ExpertiseStat;
