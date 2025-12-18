import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowRight, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const LocalTime = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                timeZone: 'Asia/Manila',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            };
            setTime(new Intl.DateTimeFormat('en-US', options).format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-slate-700 dark:text-white/80">{time} PHT</span>
        </div>
    );
};

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-[1520px] mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Status & Time Pills */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-medium text-green-600 dark:text-green-400">Available for projects</span>
                            </div>
                            <LocalTime />
                        </div>

                        <h2 className="text-4xl md:text-8xl font-bold font-heading mb-8 leading-[1.1] tracking-tighter text-slate-900 dark:text-white">
                            Ready to bring your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">vision to life?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
                            I'm always open to new projects, collaborations, or just a friendly chat.
                            Let's build something exceptional together.
                        </p>

                        <motion.a
                            href="mailto:markangelopallesco@example.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-4 group"
                        >
                            <span className="text-2xl md:text-4xl font-medium text-slate-900 dark:text-white border-b-2 border-primary pb-1 group-hover:text-primary transition-colors">
                                Get in touch
                            </span>
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-midnight-base group-hover:bg-primary group-hover:text-white transition-all">
                                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 -rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                        </motion.a>
                    </motion.div>

                    {/* Socials & Footer */}
                    <div className="mt-32 pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex gap-6">
                            {[
                                { icon: Linkedin, href: '#' },
                                { icon: Github, href: '#' },
                                { icon: Twitter, href: '#' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="text-slate-500 hover:text-primary transition-colors"
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-sm font-mono text-slate-400 dark:text-text-muted uppercase tracking-widest">
                                © 2025 Mark Angelo Pallesco. All Rights Reserved.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
