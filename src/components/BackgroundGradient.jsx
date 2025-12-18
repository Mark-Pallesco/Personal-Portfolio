import { motion } from 'framer-motion';

export default function BackgroundGradient() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div
                className="absolute w-[500px] h-[500px] bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-cyan/20 rounded-full blur-[100px]"
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                style={{
                    top: '20%',
                    left: '20%',
                }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] bg-gradient-to-r from-accent-cyan/10 to-primary/10 rounded-full blur-[80px]"
                animate={{
                    x: [0, -150, 150, 0],
                    y: [0, 150, -50, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                style={{
                    bottom: '10%',
                    right: '10%',
                }}
            />
        </div>
    );
}
