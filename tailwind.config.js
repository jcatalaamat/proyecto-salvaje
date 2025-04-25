/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#FCF7EA',  // Richer, warmer background
          100: '#F2E6CF',  // Rich warm beige
          200: '#EDDCB9',  // Vibrant soft tone
          300: '#E7CEA1',  // Golden unified tone
          400: '#D8BC8C',  // Rich cacao tone
          500: '#C49B76',  // Vibrant warm sienna
          600: '#B78A67',  // Rich warm cacao
          700: '#A07556',  // Deep caramel tone
          800: '#4E4236',  // Enriched dark brown
          900: '#372F27',  // Deep rich chocolate
        },
        forest: {
          50: '#F4F5ED',
          100: '#E8ECD7',
          200: '#DBE0C0',
          300: '#CCD3A7',
          400: '#B7BE8E',
          500: '#A4AB7C',
          600: '#899164',
          700: '#6F7652',
          800: '#565C3F',
          900: '#3D412D',
        },
        ocean: {
          50: '#EFF8FF',
          100: '#D6EEFF',
          200: '#ADD7FF',
          300: '#85C0FF',
          400: '#5CA9FF',
          500: '#3392FF',
          600: '#0A7AFF',
          700: '#0065E6',
          800: '#0052B8',
          900: '#00408F',
        },
        gold: {
          100: '#FBF4E3',
          200: '#F7EBCD',
          300: '#F2E0B5',
          400: '#ECD4A9',  // Rich golden tone
          500: '#E5C791',  // Vibrant rich gold
          600: '#D9B67A',
          700: '#C9A362',
          800: '#AD8B4E',
          900: '#8B6F3D',
        },
        terracotta: {
          100: '#F8E9D7',  // Rich warm sand
          200: '#F3D6BC',
          300: '#EBC3A1',
          400: '#E2B18A',
          500: '#D39D74',
          600: '#C3916F',  // Vibrant clay tone
          700: '#AA7D5D',
          800: '#8F694C',
          900: '#75573E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'texture-paper': "url('/images/textures/paper.jpg')",
        'texture-earth': "url('/images/textures/earth.jpg')",
        'texture-linen': "url('/images/textures/linen.jpg')",
      },
      animation: {
        'float': 'float 6s infinite ease-in-out',
        'pulse-slow': 'pulse 8s infinite alternate ease-in-out',
        'glow': 'glow 3s infinite alternate ease-in-out',
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 15px 0 rgba(167, 127, 99, 0.15)',
        'sacred': '0 0 25px rgba(212, 180, 142, 0.3)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'sacred': 'cubic-bezier(0.37, 0, 0.63, 1)',
      },
      letterSpacing: {
        'widest': '.25em',
      },
    },
  },
  presets: [require('nativewind/preset')],
  plugins: [require('tailwindcss-animate'), require('tailwindcss-motion')],
}
