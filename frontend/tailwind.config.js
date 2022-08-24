module.exports = {
  content: [
    __dirname + "/components/**/*.{vue,js,ts,jsx,tsx}",
    __dirname + "/layouts/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grt: 'yellow',
        grfrm: 'green'
      }
    },
    container: {
      padding: '1.5rem',
      center:'true'
    },
  },
  daisyui: {
    themes: [
      {
        mytheme1: {
          primary: "#63bd5e",
          secondary: "#3aabdf",
          accent: "#37CDBE",
          neutral: "#3D4451",
          'base-100': "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        mytheme2: {
          primary: "red",
          secondary: "yellow",
          accent: "#37CDBE",
          neutral: "#3D4451",
          'base-100': "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
