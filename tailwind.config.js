export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          // OSU Colors
          "primary": "#D63F09",           // Orange for highlights
          "accent": "#423f3d",            // Gray for text
          "neutral": "#FEFEFF",           // Off-White for backgrounds
          "secondary": "#161716",  
          "base-100": "#202120",   
          "base-200": "#FED5A5",
          "base-300": "#423f3d",
        }
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
  theme: {
    extend: {
      width: {
        '32px': '32px',
      }
    }
  }
}