const tailwind = require('tailwindcss');
const colors = require('tailwindcss/colors')
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
            fontFamily: { Rajdhani: " 'Rajdhani', sans-seri " }
        },
        colors: {
            white: colors.white,
            gray: colors.gray,
            green: colors.green,
            'black': '#18181d',
            'DarkBlue': '#715FF0',
            'd-p': '#21212d',
            'yellow': '#cafb01',
            'dashC': '#2a1f37',
            'x': '#322b41',
            'z': '#edf0f4'
        }
    },
    plugins: [],
}