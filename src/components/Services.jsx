import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';


const services = [
    {
        id: "01",

        title: "CMS Development",
        desc: "Custom WordPress, Webflow, and Squarespace sites tailored to your brand needs. Scalable and easy to manage systems.",
        tags: ["WordPress", "Webflow", "Headless CMS"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
        color: "from-blue-500/20 to-primary/20"
    },
    {
        id: "02",

        title: "Visual Design",
        desc: "Stunning, pixel-perfect interfaces designed and prototyped in Figma. Creating comprehensive design systems that scale.",
        tags: ["UI Design", "Prototyping", "Design Systems"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        color: "from-purple-500/20 to-accent-purple/20"
    },
    {
        id: "03",

        title: "No-Code Automation",
        desc: "Streamlining workflows and integrating tools to build powerful, automated systems that save you massive amounts of time.",
        tags: ["Zapier", "Make", "Integrations"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        color: "from-cyan-500/20 to-accent-cyan/20"
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="services" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Our Capabilities</span>
                    <h2 className="text-4xl md:text-8xl font-bold font-heading text-slate-900 dark:text-white leading-[0.9]">
                        Expertise & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Unique Services</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px] w-full">
                    {services.map((service, index) => {
                        const isHovered = hoveredIndex === index;
                        const isNoneHovered = hoveredIndex === null;

                        return (
                            <motion.div
                                key={service.id}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                layout
                                className={`relative overflow-hidden rounded-[2.5rem] cursor-pointer transition-all duration-500 ease-out border border-slate-200/20 dark:border-white/5
                                    ${isHovered ? 'md:flex-[3]' : 'md:flex-1'} 
                                    ${!isHovered && !isNoneHovered ? 'md:opacity-40 md:scale-[0.98]' : 'opacity-100'}
                                    min-h-[350px] md:min-h-0
                                `}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className={`w-full h-full object-cover transition-transform duration-1000 scale-105 ${isHovered ? 'scale-110' : ''}`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} mix-blend-overlay`} />
                                    <div className="absolute inset-0 bg-slate-900/60 dark:bg-midnight-base/80" />
                                </div>

                                {/* Content Container */}
                                <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
                                    {/* Top Section: ID and Icon */}
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-4">
                                            <span className="text-4xl md:text-6xl font-heading font-black opacity-20 text-white leading-none">
                                                {service.id}
                                            </span>

                                        </div>

                                        <motion.div
                                            animate={{ rotate: isHovered ? 45 : 0 }}
                                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white"
                                        >
                                            <Plus className="w-6 h-6" />
                                        </motion.div>
                                    </div>

                                    {/* Bottom Section: Title and Desc */}
                                    <div>
                                        <h3 className={`text-2xl md:text-4xl font-bold font-heading text-white mb-4 transition-all duration-500 ${isHovered ? 'md:translate-x-0' : 'md:translate-y-0'}`}>
                                            {service.title}
                                        </h3>

                                        <AnimatePresence mode="wait">
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0, y: 10 }}
                                                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                    exit={{ opacity: 0, height: 0, y: 10 }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-white/70 text-lg mb-8 max-w-md leading-relaxed">
                                                        {service.desc}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-8">
                                                        {service.tags.map((tag) => (
                                                            <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10 uppercase tracking-widest">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <button className="flex items-center gap-2 text-white font-bold group/btn">
                                                        Connect Now <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {!isHovered && (
                                            <div className="hidden md:block">
                                                <span className="text-white/40 text-sm font-mono tracking-widest uppercase">Explore Services</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-purple/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
