module.exports = {
    mode: "jit",
    content: ["./app/**/*.{ts,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};