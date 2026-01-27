/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayscale-870': '#181818',
        'grayscale-600': '#4e4e4e',
        'grayscale-450': '#8d8d8d',
        'surface-primary': '#1f1f1f',
        'surface-primary-hover': '#272727',
        'surface-on-primary': '#313131',
        'surface-secondary': '#181818',
        'surface-blue-200': '#a8c1f7',
        'surface-blue-500': '#2563eb',
        'border-primary': '#3a3a3a',
        'border-secondary': '#313131',
        'border-action-primary': '#5182ef',
        'border-action-error': '#e35151',
        'text-primary': '#eeeeee',
        'text-secondary': '#cccccc',
        'text-tertiary': '#9e9e9e',
        'action-primary': '#2563eb',
        'primary-300': '#7ca1f3',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        '200': '200px',
      },
      spacing: {
        '0': '0px',
        '25': '2px',
        '50': '4px',
        '75': '8px',
        '100': '12px',
        '200': '16px',
        '300': '24px',
      },
      borderRadius: {
        '100': '2px',
        '200': '4px',
        '300': '8px',
        '400': '12px',
        '500': '16px',
        '600': '24px',
        '700': '32px',
      },
      borderWidth: {
        '700': '2px',
      },
    },
  },
  plugins: [],
}

