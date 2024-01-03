// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            phone: {max: "480px"},
            tab: "1024px",
            desktop: "1280px",
            smallPhone: "351px",
        },
    },
    plugins: [],
};
