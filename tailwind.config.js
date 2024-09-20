/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'exo-2': ['"Exo 2"', 'sans-serif'],
                montserrat: ['"Montserrat"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
