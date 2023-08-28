/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: 'Inter, sans-serif',
                display: '"Bona Nova", serif',
                raleway: 'Raleway, sans-serif',
            },
            colors: {
                green: 'rgba(24, 91, 0, 80%)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'base',
        }),
    ],
};
