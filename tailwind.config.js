/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui']
      },
      colors: {
        navy: '#0b1220',
        charcoal: '#0e1526',
        glass: 'rgba(255,255,255,0.06)',
        neonBlue: '#3bc7ff',
        neonPurple: '#9b5cff',
        neonCyan: '#4ef1e5'
      },
      boxShadow: {
        glow: '0 0 30px rgba(59,199,255,0.35)',
        glowPurple: '0 0 30px rgba(155,92,255,0.35)',
        glowCyan: '0 0 30px rgba(78,241,229,0.35)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}