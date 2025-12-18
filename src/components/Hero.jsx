import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax & Tilt Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = clientX / innerWidth;
        const y = clientY / innerHeight;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Smooth spring physics for tilt
    const xSpring = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(mouseY, { stiffness: 300, damping: 30 });

    // Tilt Transforms
    const rotateX = useTransform(ySpring, [0, 1], [10, -10]); // Look up/down
    const rotateY = useTransform(xSpring, [0, 1], [-10, 10]); // Look left/right

    // Parallax Transforms
    const textX = useTransform(xSpring, [0, 1], [-20, 20]);
    const textY = useTransform(ySpring, [0, 1], [-20, 20]);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    return (
        <section
            id="about"
            ref={containerRef}
            className="min-h-screen flex flex-col items-center justify-center relative pt-32 pb-16 md:pb-24 bg-transparent overflow-hidden perspective-1000"
        >

            {/* Vertical Scroll Indicator */}
            <div className="absolute left-8 bottom-32 hidden md:flex flex-col items-center gap-4 z-20">
                <span className="text-xs font-mono tracking-[0.2em] text-slate-500 dark:text-text-muted -rotate-90 origin-bottom whitespace-nowrap">
                    SCROLL TO SEE MORE
                </span>
                <div className="h-16 w-[1px] bg-slate-900/20 dark:bg-white/20 mt-24"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Profile Image - Centered Top with 3D Tilt */}
                <motion.div
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 relative"
                >
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden grayscale border-[6px] border-slate-200 dark:border-surface-elevated shadow-2xl relative z-10">
                        <img
                            src="../src/assets/mrkpalle.jpg"
                            alt="John Doe"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Glowing Aura behind image */}
                    <div className="absolute inset-0 bg-primary/20 blur-[50px] -z-10 rounded-full scale-110 animate-pulse"></div>
                </motion.div>

                {/* Massive Text with Parallax & Mask Reveal */}
                <motion.div style={{ x: textX, y: textY }} className="mb-16 relative z-20">
                    <h1 className="text-5xl md:text-[6vw] font-bold font-heading uppercase leading-[0.9] text-slate-900 dark:text-white tracking-tight">
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                                className="block mb-2 md:mb-4"
                            >
                                Independent Front-End
                            </motion.span>
                        </div>
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-purple to-primary dark:from-white dark:via-white dark:to-white/50"
                            >
                                Web Developer
                            </motion.span>
                        </div>
                    </h1>
                </motion.div>

                {/* Boxed CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/20 hover:border-primary dark:hover:border-white text-slate-900 dark:text-white uppercase tracking-wider text-sm transition-all overflow-hidden shadow-lg dark:shadow-none">
                        <span className="relative z-10">Start a project request</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />

                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-primary/10 dark:bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

function ArrowRight({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
}

