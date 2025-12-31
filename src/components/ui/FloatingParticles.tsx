import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingParticle {
    id: number;
    symbol: string;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

interface FloatingParticlesProps {
    className?: string;
    count?: number;
}

const symbols = ["{ }", "< />", "( )", "[ ]", "//", "=>", "++", "&&", "||", "::", "**", "?.", "...", "!==", "==="];

const FloatingParticles = ({ className = "", count = 15 }: FloatingParticlesProps) => {
    const particles: FloatingParticle[] = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 14 + Math.random() * 12, // Much larger: 14-26px
            duration: 18 + Math.random() * 15,
            delay: Math.random() * 8,
            opacity: 0.25 + Math.random() * 0.2, // Much more visible: 0.25-0.45
        }));
    }, [count]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute font-mono text-steel-blue select-none"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        fontSize: `${particle.size}px`,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        y: [0, -30, 10, -20, 0],
                        x: [0, 15, -10, 20, 0],
                        rotate: [0, 5, -5, 3, 0],
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity * 0.8, particle.opacity * 1.2, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {particle.symbol}
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingParticles;
