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
            'yellow': '#cafb01',
            'dashC': '#2a1f37',
            'x': '#322b41',
            'pr1': '#F2F1FD',
            'btn': '#2553D7',
            'pr2': '#93fcec',
        }
    },
    plugins: [],
}