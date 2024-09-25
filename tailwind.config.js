/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
          colors: {
            'slate-custom': '#42465F',
            'input-borders': '#606584',
            'card-color': '#4F536C',
            'button-color': '#4D70F7',
            'button-hover': '#385CE7',
            'placeholder-color': '#606584',
            'background-color': '#181A2A',
          },
        },
      },
    };