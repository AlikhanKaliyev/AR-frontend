/** @type {(tailwindConfig: object) => object} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        fontFamily: {
            'sans': ['Inter', 'sans-serif']
        },
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
