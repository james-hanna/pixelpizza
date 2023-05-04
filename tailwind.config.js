/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greyblue: "#cedcf5",
      },
      screens: {
        xsm: "320px",
        // => @media (min-width: 320px)

        sm: "375px",
        // => @media (min-width: 375px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1440px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
    fontFamily: {
      pixel: ["pixel", "sans-serif"],
      osrs: ["osrs", "sans-serif"],
      crackman: ["crackman"],
      gaming: ["gaming"],
    },
  },
  plugins: [],
};
