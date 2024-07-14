/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
    theme: {
      extend: {
        boxShadow: {
          neumorphism: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
          'neumorphism-input': 'inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff',
          'neumorphism-button': '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
        },
      },
    },
  
  plugins: [
    require('daisyui'),
  ],
}

