import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const filters = ["All", "WordPress", "Webflow", "Squarespace", "Framer", "Figma", "Keynote Speaker", "Ecommerce"];

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "WordPress + WooCommerce",
        description: "A full-featured e-commerce platform with custom theme development, payment integration, and inventory management system.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
        technologies: ["WordPress", "Ecommerce", "PHP", "MySQL"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "SaaS Landing Page",
        category: "Webflow Development",
        description: "Modern, conversion-optimized landing page for a SaaS startup with custom animations and CMS integration.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Webflow", "JavaScript", "GSAP", "Figma"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Portfolio Website",
        category: "Framer Design",
        description: "Interactive portfolio website with smooth micro-animations, dark mode support, and responsive design.",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Framer", "React", "Framer Motion", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "Restaurant Booking System",
        category: "WordPress Development",
        description: "Complete restaurant management system with online reservations, menu management, and customer reviews.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        technologies: ["WordPress", "PHP", "MySQL", "Stripe"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "Real Estate Platform",
        category: "Squarespace + Custom Code",
        description: "Property listing platform with advanced search filters, virtual tours integration, and lead generation forms.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Squarespace", "JavaScript", "API Integration", "SEO"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 6,
        title: "Tech Conference Website",
        category: "Keynote Speaker Event",
        description: "Event landing page for a tech conference featuring keynote speaker profiles, schedule management, and ticket booking.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Keynote Speaker", "Webflow", "JavaScript", "Event Management"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 7,
        title: "Fashion Store",
        category: "Ecommerce Platform",
        description: "Modern fashion e-commerce store with product filtering, wishlist functionality, and seamless checkout experience.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Ecommerce", "Shopify", "JavaScript", "Figma"],
        liveUrl: "#",
        githubUrl: "#"
    }
];


const ProjectCard = ({ project, index }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group relative bg-white dark:bg-surface/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-500"
    >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Overlay Links */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ExternalLink className="w-5 h-5 text-white" />
                </a>
                <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github className="w-5 h-5 text-white" />
                </a>
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <span className="text-primary text-sm font-mono uppercase tracking-wider">
                {project.category}
            </span>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-2 mb-3">
                {project.title}
            </h3>
            <p className="text-slate-600 dark:text-text-secondary mb-4 line-clamp-2">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-text-secondary rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project =>
            project.technologies.some(tech =>
                tech.toLowerCase() === activeFilter.toLowerCase()
            )
        );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-midnight-base pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-text-secondary hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold font-heading text-slate-900 dark:text-white"
                    >
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-slate-600 dark:text-text-secondary max-w-2xl"
                    >
                        A collection of my recent work showcasing web development, design, and creative solutions.
                    </motion.p>
                </div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-10"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeFilter === filter
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-white dark:bg-surface/50 text-slate-700 dark:text-text-secondary border border-slate-200 dark:border-white/10 hover:border-primary/50'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-slate-500 dark:text-text-secondary py-12"
                    >
                        No projects found for this filter.
                    </motion.p>
                )}
            </div>
        </div>
    );
}
