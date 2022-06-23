module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: true, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                indieflower: ["Indie Flower"],
                nunito: ["Nunito"],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
