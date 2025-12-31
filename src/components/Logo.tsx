import { motion } from "framer-motion";
import tailsgateLogo from "@/assets/tailsgate-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  showText?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-20 h-20",
  xl: "w-32 h-32",
  hero: "w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80",
};

const Logo = ({ size = "md", showText = false, className = "" }: LogoProps) => {
  return (
    <motion.div
      className={`flex flex-col items-center gap-4 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative">
        <img
          src={tailsgateLogo}
          alt="Tailsgate Logo"
          className={`${sizeMap[size]} object-contain`}
          style={{
            mixBlendMode: 'multiply',
            filter: 'contrast(1.05)'
          }}
        />
      </div>
      {showText && (
        <span className="text-foreground font-display font-semibold tracking-[0.2em] text-lg">
          TAILSGATE
        </span>
      )}
    </motion.div>
  );
};

export default Logo;
