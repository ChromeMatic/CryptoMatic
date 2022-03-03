const tailwind = require('tailwindcss');
module.exports = {
    plugin: [tailwind],
    darkMode: 'class',
    content: [
        './src/**/*.vue',
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: { Rajdhani: "  'Rajdhani', sans-seri " }
        },
    },
    plugins: [],
}