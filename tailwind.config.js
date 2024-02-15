/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      screens: {
          "small" : {"max" : "374px"},
          "medium" : {"min" : "375px" , "max":"768px"},
          "large" : {"min" : "769px", "max": "1020px" },
          "extraL" : {"min" : "1021px"},
          "extraLarge":{"min" : "1021px","max":"1215px"},
      },
      fontFamily: {
        lex : ["Lexend"]
      },
       
      gradientColorStops: {
          "bg-test" : " linear-gradient(270deg, rgba(25, 25, 25, 0) 0%, #191919 105.84%)",
      }
    },
  },
  plugins: [],
};
