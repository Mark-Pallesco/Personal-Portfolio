import { motion } from 'framer-motion';

const technologies = [
    { logo: "https://cdn.simpleicons.org/wordpress/21759B", name: "WordPress", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/webflow/4353FF", name: "Webflow", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/framer/0055FF", name: "Framer", level: "Advanced" },
    { logo: "https://cdn.simpleicons.org/squarespace/000000", name: "Squarespace", level: "Advanced" },
    { logo: "https://cdn.simpleicons.org/diagramsdotnet/F08705", name: "Divi", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/woocommerce/96588A", name: "WooCommerce", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/elementor/92003B", name: "Elementor", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/figma/F24E1E", name: "Figma", level: "Advanced" },
    { logo: "https://cdn.simpleicons.org/wordpress/21759B", name: "WordPress", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/webflow/4353FF", name: "Webflow", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/framer/0055FF", name: "Framer", level: "Advanced" },
    { logo: "https://cdn.simpleicons.org/squarespace/000000", name: "Squarespace", level: "Advanced" },
    { logo: "https://cdn.simpleicons.org/diagramsdotnet/F08705", name: "Divi", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/woocommerce/96588A", name: "WooCommerce", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/elementor/92003B", name: "Elementor", level: "Expert" },
    { logo: "https://cdn.simpleicons.org/figma/F24E1E", name: "Figma", level: "Advanced" },
];

const MarqueeItem = ({ logo, name }) => (
    <div className="flex items-center gap-2.5 px-5 py-3 bg-white dark:bg-surface/50 border border-slate-200 dark:border-white/10 rounded-full hover:border-primary/50 dark:hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-surface-elevated/80 transition-all cursor-default shadow-sm dark:shadow-none">
        <img src={logo} alt={name} className="w-5 h-5" />
        <span className="text-base font-medium text-slate-700 dark:text-white whitespace-nowrap">{name}</span>
    </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 20 }) => (
    <div className="flex overflow-hidden relative w-full mask-linear-fade">
        <motion.div
            initial={{ x: direction === "left" ? "0%" : "-50%" }}
            animate={{ x: direction === "left" ? "-50%" : "0%" }}
            transition={{
                duration: speed,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }}
            className="flex gap-6 py-3 pr-6 shrink-0"
        >
            {[...items, ...items].map((tech, i) => (
                <MarqueeItem key={`a-${i}`} logo={tech.logo} name={tech.name} />
            ))}
        </motion.div>
        <motion.div
            initial={{ x: direction === "left" ? "0%" : "-50%" }}
            animate={{ x: direction === "left" ? "-50%" : "0%" }}
            transition={{
                duration: speed,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }}
            className="flex gap-6 py-3 pr-6 shrink-0"
        >
            {[...items, ...items].map((tech, i) => (
                <MarqueeItem key={`b-${i}`} logo={tech.logo} name={tech.name} />
            ))}
        </motion.div>
    </div>
);

export default function TechStack() {
    // Split technologies into two rows
    const row1 = technologies.slice(0, 4);
    const row2 = technologies.slice(4, 8);

    return (
        <section id="stack" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 mb-8 md:mb-12 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-7xl font-bold text-center font-heading text-slate-900 dark:text-white"
                >
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Arsenal</span>
                </motion.h2>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
                <MarqueeRow items={row1} direction="left" speed={30} />
                <MarqueeRow items={row2} direction="right" speed={35} />
            </div>
        </section>
    );
}
