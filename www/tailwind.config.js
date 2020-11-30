module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        brand: {
          '100': '#82dab0',
          '200': '#69d3a0',
          '300': '#50cb90',
          '400': '#37c480',
          '500': '#1ebc70',
          '600': '#05b560',
          '700': '#05a356',
          '800': '#04914d',
          '900': '#047f43',
        },
        // Joshen TODO: At the end just rearrange the values
        dark: {
          100: '#828282',
          600: '#424242',
          200: '#3A3A3A',
          300: '#292929',
          400: '#202020',
          500: '#1E1E1E',
        },
        // Joshen: Adding our Figma palette here
        neutral: {
          100: '#F1F1F1',
          200: '#E0E0E0',
          300: '#BBBBBB',
          400: '#666666',
          500: '#444444',
          600: '#1E1E1E',
          700: '#181818',
          800: '#000000',
        }
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        sans: [
          'Circular Std',
          'Circular',
          'circular',
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: ['Source Code Pro', 'Menlo', 'monospace'],
      },
    },
  },
  variants: {
    extend: {
      inset: ['responsive', 'group-hover']
    },
  },
  plugins: [],
}
