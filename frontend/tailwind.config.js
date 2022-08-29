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
          primary: "#5D1339",
          secondary: "#8d9e90",
          accent: "#ffffff",
          neutral: "#3D4451",
          'base-100': "#eff4f0",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        mytheme2: {
          primary: "#AB9782",
          secondary: "#373D42",
          accent: "#D3BBA8",
          neutral: "#3D4451",
          'base-100': "#F4EEE8",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        mytheme3: {
          primary: "#3A3E59",
          secondary: "#FFBB5A",
          accent: "#ECE6CE",
          neutral: "#3D4451",
          'base-100': "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        mytheme4: {
          primary: "#04282D",
          secondary: "#D0D0A7",
          accent: "#E7F2ED",
          neutral: "#3D4451",
          'base-100': "#ffffff",
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
