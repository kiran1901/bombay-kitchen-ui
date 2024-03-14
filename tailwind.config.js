/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.vue"],
    theme: {
        fontFamily: {
            "theme-heading": ["Source Sans Pro", "sans-serif"],
            "theme-content": ["Source Sans Pro", "sans-serif"],
        },
        extend: {
            colors: {
                "theme-primary": "#F56D15",
                "theme-secondary": "#FA5757",
                "theme-grayish-blue": "#9194A1",
                "theme-dark-blue": "rgb(37, 43, 70)",
                "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
                // #F56D15 -> Orange
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
