import { motion } from "framer-motion";
import tailsgateLogo from "@/assets/tailsgate-logo.png";

interface AnimatedLogoProps {
    size?: "sm" | "md" | "lg" | "xl" | "hero";
    className?: string;
}

const sizeMap = {
    sm: { container: "w-12 h-12", glow: 15 },
    md: { container: "w-16 h-16", glow: 20 },
    lg: { container: "w-24 h-24", glow: 30 },
    xl: { container: "w-40 h-40", glow: 40 },
    hero: { container: "w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64", glow: 60 },
};

const AnimatedLogo = ({ size = "hero", className = "" }: AnimatedLogoProps) => {
    const config = sizeMap[size];

    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Single soft outer glow - very slow and smooth */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: "160%",
                    height: "160%",
                    background: "radial-gradient(circle, hsl(203 45% 55% / 0.35) 0%, hsl(181 40% 70% / 0.15) 45%, transparent 70%)",
                    filter: "blur(25px)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.85, 0.7],
                }}
                transition={{
                    duration: 8, // Much slower - 8 seconds
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Logo container with gentle float */}
            <motion.div
                className={`relative ${config.container}`}
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Inner subtle glow behind logo - also slow */}
                <motion.div
                    className="absolute inset-[-15%] rounded-full blur-xl"
                    style={{
                        background: "radial-gradient(circle, hsl(203 40% 55% / 0.3) 0%, hsl(181 35% 70% / 0.15) 50%, transparent 70%)",
                    }}
                    animate={{
                        opacity: [0.6, 0.75, 0.6],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 10, // Very slow - 10 seconds
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* The actual logo */}
                <motion.img
                    src={tailsgateLogo}
                    alt="Tailsgate Logo"
                    className="relative z-10 w-full h-full object-contain"
                    style={{
                        mixBlendMode: 'multiply',
                        filter: 'contrast(1.05)',
                    }}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default AnimatedLogo;
