module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#22252C",

          "secondary": "#04C8E2",

          "accent": "#7B9DBD",

          "neutral": "#313741",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#00D7BB",

          "warning": "#FBBD23",

          "error": "#003358",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
} 