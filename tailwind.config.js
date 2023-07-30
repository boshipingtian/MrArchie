/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'dark-bg-main-color': '#1c2537',
        },
        extend: {},
    },
    plugins: [],
}

