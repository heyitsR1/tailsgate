import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GradientMesh from "@/components/ui/GradientMesh";
import FloatingParticles from "@/components/ui/FloatingParticles";
import AnimatedLogo from "@/components/AnimatedLogo";

const textVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.2, // Slowed from 0.8 to 1.2
            delay: 0.5 + i * 0.2, // Increased delay between words from 0.1 to 0.2
            ease: [0.16, 1, 0.3, 1] as const,
        },
    }),
};

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8, // Slightly slower
            delay: 1.8, // Wait for text to finish
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

const AnimatedHero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
    const y = useTransform(scrollY, [0, 300], [0, 50]);

    // Split headline into words for staggered animation
    // const headline = "Crafting Digital Solutions for Growing Businesses";
    const headline = "Crafting Digital Solutions";
    const words = headline.split(" ");

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
            {/* Animated gradient mesh background */}
            <GradientMesh interactive />

            {/* Floating code particles - increased count for visibility */}
            <FloatingParticles count={5} />

            {/* Main content with scroll-based parallax */}
            <motion.div
                style={{ opacity, scale, y }}
                className="relative z-10 text-center max-w-5xl mx-auto"
            >
                {/* Animated logo with glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10 md:mb-14"
                >
                    <AnimatedLogo size="hero" />
                </motion.div>

                {/* Staggered headline */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]">
                    <span className="sr-only">{headline}</span>
                    <span aria-hidden="true" className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={textVariants}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto"
                >
                    Professional web design that scale with your business.
                    {/* Professional websites that scale with your business. */}
                </motion.p>

                {/* CTA buttons with glow effects */}
                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button
                        variant="hero"
                        size="xl"
                        asChild
                        className="group relative overflow-hidden"
                    >
                        <Link to="/contact">
                            {/* <span className="relative z-10">Start Your Project</span> */}
                            <span className="relative z-10">Get a Free Quote</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-steel-blue to-pale-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            />
                        </Link>
                    </Button>
                    <Button
                        variant="heroOutline"
                        size="xl"
                        asChild
                        className="group relative"
                    >
                        <Link to="/services">
                            <span className="relative z-10">View Services</span>
                            <motion.div
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: "radial-gradient(circle at center, hsl(203 38% 44% / 0.08) 0%, transparent 70%)",
                                }}
                            />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Enhanced scroll indicator */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">Scroll</span>
                    <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-steel-blue rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div> */}
        </section>
    );
};

export default AnimatedHero;
