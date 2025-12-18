/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'midnight-base': '#070a0eff',
                'surface': '#121826',
                'surface-elevated': '#1A2233',
                'primary': '#4F8CFF',
                'primary-hover': '#3A6FE0',
                'accent-cyan': '#22D3EE',
                'accent-purple': '#8B5CF6',
                'text-primary': '#E6EAF2',
                'text-secondary': '#9AA4B2',
                'text-muted': '#6B7280',
                'border-subtle': '#1F2937',
                'success': '#22C55E',
                'warning': '#F59E0B',
                'error': '#EF4444',
                // Legacy support (temporarily keep until full migration or map to new)
                'brand-dark': '#0B0F14', // Mapped to midnight-base
                'brand-purple': '#8B5CF6', // Mapped to accent-purple
                'brand-blue': '#4F8CFF', // Mapped to primary
                'brand-pink': '#ec4899',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Space Grotesk', 'Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'h1': ['80px', { lineHeight: '1.05', fontWeight: '700' }],
                'h2': ['64px', { lineHeight: '1.1', fontWeight: '600' }],
                'h3': ['48px', { lineHeight: '1.15', fontWeight: '600' }],
                'h4': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
                'body-lg': ['24px', { lineHeight: '1.6', fontWeight: '400' }],
                'body': ['20px', { lineHeight: '1.7', fontWeight: '400' }],
                'small': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
            },
            container: {
                center: true,
                screens: {
                    '2xl': '1520px',
                },
            },
        },
    },
    plugins: [],
}
