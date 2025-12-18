import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Staggered letter animation for name
const AnimatedName = ({ name, isReady, isDark }) => {
    const letters = name.split('');

    return (
        <div className="flex overflow-hidden flex-wrap justify-center">
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold inline-block"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        color: isReady ? '#4F8CFF' : (isDark ? '#ffffff' : '#0f172a')
                    }}
                    transition={{
                        y: { delay: 0.3 + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                        opacity: { delay: 0.3 + i * 0.04, duration: 0.4 },
                        color: { duration: 0.3 }
                    }}
                    style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </div>
    );
};

// Minimal line loader
const LineLoader = ({ progress, isDark }) => (
    <div className="relative w-full max-w-xs sm:max-w-md">
        {/* Track */}
        <div className={`h-[1px] w-full ${isDark ? 'bg-white/10' : 'bg-slate-900/10'}`} />

        {/* Fill */}
        <motion.div
            className={`absolute top-0 left-0 h-[1px] origin-left ${isDark ? 'bg-white' : 'bg-slate-900'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1, ease: 'linear' }}
        />

        {/* Progress indicator */}
        <motion.div
            className={`absolute -top-6 text-xs font-mono tracking-widest ${isDark ? 'text-white/60' : 'text-slate-600'}`}
            style={{ left: `${Math.min(progress, 95)}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            {String(progress).padStart(3, '0')}
        </motion.div>
    </div>
);

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(timer);
                    setIsReady(true);
                    return 100;
                }
                // Variable speed - starts fast, slows near end
                const increment = prev < 80 ? 2 : 1;
                return Math.min(prev + increment, 100);
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    const handleClick = () => {
        if (isReady) {
            setIsLoading(false);
        }
    };

    // Listen for keyboard press
    useEffect(() => {
        const handleKeyDown = () => {
            if (isReady) {
                setIsLoading(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isReady]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer transition-colors ${isDark ? 'bg-midnight-base' : 'bg-slate-50'
                        }`}
                    onClick={handleClick}
                >
                    {/* Subtle noise texture overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Year / Role - top left */}
                    <motion.div
                        className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-12 md:left-12"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <p className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                            Web Developer
                        </p>
                        <p className={`text-[10px] sm:text-xs font-mono tracking-widest mt-1 ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                            © 2025
                        </p>
                    </motion.div>

                    {/* Location - top right */}
                    <motion.div
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 text-right"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <p className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                            Based in
                        </p>
                        <p className={`text-[10px] sm:text-xs font-mono tracking-widest mt-1 ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                            Philippines
                        </p>
                    </motion.div>

                    {/* Main content - centered */}
                    <div className="flex flex-col items-center gap-6 sm:gap-12 px-4 sm:px-6">
                        {/* Animated name */}
                        <AnimatedName name="Mark Angelo Pallesco" isReady={isReady} isDark={isDark} />

                        {/* Subtitle with reveal */}
                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <motion.p
                                className={`text-[10px] sm:text-sm md:text-base font-mono tracking-[0.15em] sm:tracking-[0.3em] uppercase text-center ${isDark ? 'text-white/50' : 'text-slate-600'
                                    }`}
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 1.2, duration: 1 }}
                            >
                                Creative Developer & Designer
                            </motion.p>
                        </motion.div>

                        {/* Minimal line loader */}
                        <motion.div
                            className="w-48 sm:w-64 md:w-80 mt-4 sm:mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <LineLoader progress={count} isDark={isDark} />
                        </motion.div>
                    </div>

                    {/* Bottom prompt */}
                    <motion.div
                        className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full px-4 sm:px-0 sm:w-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isReady ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.p
                            className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2 sm:gap-3 ${isDark ? 'text-white/60' : 'text-slate-600'
                                }`}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className={`w-6 h-[1px] ${isDark ? 'bg-white/40' : 'bg-slate-400'}`} />
                            Press any key or tap to enter
                            <span className={`w-6 h-[1px] ${isDark ? 'bg-white/40' : 'bg-slate-400'}`} />
                        </motion.p>
                    </motion.div>

                    {/* Decorative vertical lines */}
                    <motion.div
                        className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 h-16 sm:h-32 hidden sm:block"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 0.1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <div className={`w-[1px] h-full ${isDark ? 'bg-white' : 'bg-slate-900'}`} />
                    </motion.div>
                    <motion.div
                        className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 h-16 sm:h-32 hidden sm:block"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 0.1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                    >
                        <div className={`w-[1px] h-full ${isDark ? 'bg-white' : 'bg-slate-900'}`} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

