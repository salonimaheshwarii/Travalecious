const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/*/.{js,ts,jsx,tsx}",
    "./components/*/.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: "class",
  // ...
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      zIndex: {
        50: "50",
      },
      transformOrigin: {
        "top-left-1/3-3/4": "33% 75%",
      },

      lineClamp: {
        7: "7",
      },
    },
    colors: {
      lightyellow: "#FBF3EA", 

      white: "#FFFFFF",
      black: {
        100: "#010B08",
        900: "#000000",
      },
      lightgreen: "#1DD8A3",
      gray: colors.gray,
      rose: colors.rose,
      lightgray: colors.gray,
      "body-content": "#363B39",
      rose: colors.rose,
      transparent: 'transparent',
      black : colors.black,
      blue:colors.blue,
      divider: "#E6E7E6",
      primary :"#90ADBB",
      secondary:"#F6F6F6",

    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
}; 