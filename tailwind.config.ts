import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.8)",
          "200": "rgba(0, 0, 0, 0.6)",
        },
        secondary1: "#ce6847",
        primary2: "#f9e9da",
        primary3: "#2b353e",
        secondary3: "#d8913b",
        dimgray: "#615857",
        pink: "rgba(230, 189, 182, 0.5)",
        sienna: "rgba(206, 104, 71, 0.4)",
        peru: "rgba(216, 145, 59, 0.5)",
        peachpuff: "#f3cfbb",
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },



      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      lg: "1.13rem",
      base: "1rem",
      "5xl": "1.5rem",
      "37xl": "3.5rem",
      "26xl": "2.81rem",
      "2xs-8": "0.68rem",
      "2xs-2": "0.64rem",
      "2xs-5": "0.66rem",
      "56xl": "4.69rem",
      inherit: "inherit",
    },
  
  },

  plugins: [],
}
export default config
