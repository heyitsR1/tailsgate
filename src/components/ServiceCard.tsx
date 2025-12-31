import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group p-8 bg-card border border-foreground/10 rounded-lg hover:border-steel-blue/50 hover:shadow-brand transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-steel-blue/10 flex items-center justify-center mb-6 group-hover:bg-steel-blue group-hover:text-off-white transition-colors duration-300">
        <Icon size={28} className="text-steel-blue group-hover:text-off-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
