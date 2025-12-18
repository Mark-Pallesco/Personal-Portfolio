import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: "WordPress Development", category: "Custom Ecosystems", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Webflow Development", category: "Visual Precision", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "Framer Design", category: "Interactive Magic", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, title: "Squarespace Dev", category: "Rapid Deployment", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, title: "Figma Design", category: "UI/UX Prototyping", image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop" },
];

export default function Portfolio() {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    useGSAP(() => {
        let sections = gsap.utils.toArray(".project-panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                // Snap points for each panel if desired
                // snap: 1 / (sections.length - 1), 
                end: () => "+=" + sliderRef.current.offsetWidth,
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="portfolio" className="relative overflow-hidden bg-midnight-base">
            <div ref={sliderRef} className="flex h-screen w-[600%]">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-panel w-screen h-screen flex flex-col justify-center px-6 md:px-20 relative border-r border-white/5"
                    >
                        {/* Background Image (Dimmed) */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-20 hover:opacity-30 transition-opacity duration-700"
                            />
                            {/* Always Dark Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight-base via-transparent to-midnight-base/50" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-[1520px] mx-auto w-full">
                            <div className="mb-6 md:mb-8">
                                <span className="text-primary font-mono text-lg md:text-2xl mb-2 sm:mb-4 block">0{index + 1} / 0{projects.length}</span>
                                <h2 className="text-4xl sm:text-6xl md:text-[8vw] leading-tight md:leading-none font-bold font-heading uppercase tracking-tighter text-white break-words">
                                    {project.title}
                                </h2>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                                <span className="px-4 py-2 md:px-6 md:py-3 border border-white/20 rounded-full text-sm md:text-lg uppercase tracking-wider text-white backdrop-blur-md">
                                    {project.category}
                                </span>
                                <Link
                                    to="/projects"
                                    className="text-white hover:text-primary transition-colors text-base md:text-lg font-medium border-b border-white/10 hover:border-primary pb-1 sm:pb-0"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
