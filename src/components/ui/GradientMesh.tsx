import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface GradientMeshProps {
    className?: string;
    interactive?: boolean;
}

const GradientMesh = ({ className = "", interactive = true }: GradientMeshProps) => {
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Transform mouse position to blob movement
    const blob1X = useTransform(smoothX, [0, 1], [-30, 30]);
    const blob1Y = useTransform(smoothY, [0, 1], [-20, 20]);
    const blob2X = useTransform(smoothX, [0, 1], [20, -20]);
    const blob2Y = useTransform(smoothY, [0, 1], [15, -15]);
    const blob3X = useTransform(smoothX, [0, 1], [-15, 25]);
    const blob3Y = useTransform(smoothY, [0, 1], [25, -25]);

    useEffect(() => {
        setMounted(true);

        if (!interactive) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [interactive, mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Base gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-off-white via-background to-pale-cyan/30" />

            {/* Animated gradient blobs - MUCH MORE VISIBLE */}
            {/* Primary Steel Blue Blob - Top Left */}
            <motion.div
                className="absolute w-[900px] h-[900px] rounded-full"
                style={{
                    background: "radial-gradient(circle, hsl(203 45% 50% / 0.55) 0%, hsl(203 38% 44% / 0.3) 40%, transparent 70%)",
                    filter: "blur(80px)",
                    x: blob1X,
                    y: blob1Y,
                    left: "-5%",
                    top: "-20%",
                }}
                animate={{
                    scale: [1, 1.25, 1.1, 1],
                    rotate: [0, 15, -8, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Cyan/Teal Blob - Top Right */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full"
                style={{
                    background: "radial-gradient(circle, hsl(181 50% 70% / 0.6) 0%, hsl(181 40% 76% / 0.4) 35%, transparent 70%)",
                    filter: "blur(70px)",
                    x: blob2X,
                    y: blob2Y,
                    right: "-10%",
                    top: "5%",
                }}
                animate={{
                    scale: [1.1, 1, 1.3, 1.1],
                    rotate: [0, -20, 12, 0],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Bottom Center Blob - Deeper Blue */}
            <motion.div
                className="absolute w-[700px] h-[700px] rounded-full"
                style={{
                    background: "radial-gradient(circle, hsl(203 50% 55% / 0.5) 0%, hsl(203 38% 44% / 0.25) 40%, transparent 70%)",
                    filter: "blur(60px)",
                    x: blob3X,
                    y: blob3Y,
                    left: "40%",
                    bottom: "-15%",
                }}
                animate={{
                    scale: [1, 1.2, 1.08, 1],
                    rotate: [0, 25, -15, 0],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
            />

            {/* Extra accent blob - Subtle purple/blue for depth */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, hsl(220 50% 60% / 0.35) 0%, transparent 65%)",
                    filter: "blur(50px)",
                    left: "60%",
                    top: "30%",
                }}
                animate={{
                    scale: [1.05, 1.2, 1, 1.05],
                    x: [-20, 30, -10, -20],
                    y: [0, 20, -15, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Subtle noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default GradientMesh;
