/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myPurple": "#755CDE",
        "myOrange": "#F6A560",
        "myPink": "#F39E9E",
        "myPeach": "#EB7565",
        "myTirkis": "#61C4B7",
        "myWine": "#552049",
        "myBlack": "#030303",
        "myGrey": "#7A746E",
        "myWhite": "#FFF7F0"
      },

      fontSize: {
        "headingL": ['56px', {
          fontWeight: 'bold',
        }],
        "headingM": ['40px', {
          fontWeight: 'bold',
        }],
        "headingS": ['32px', {
          fontWeight: 'bold',
        }],
        "body": ['18px', {
          lineHeight: "28px",
          fontWeight: 'medium',
        }],
      },

      borderRadius: {
        "4-xl": "28px"
      }
    },
  },
  plugins: [],
}