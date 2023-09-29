import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          25: "#f6fefc",
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#99f6e0",
          300: "#5fe9d0",
          400: "#2ed3b7",
          500: "#15b79e",
          600: "#11999e",
          700: "#137065",
          800: "#125d56",
          900: "#134e48",
        },
        error: {
          25: "#fffbfa",
          50: "#fef3f2",
          100: "#fee4e2",
          200: "#fecdca",
          300: "#fda29b",
          400: "#f97066",
          500: "#f04438",
          600: "#d92d20",
          700: "#b42318",
          800: "#912018",
          900: "#7a271a",
        },
        warning: {
          25: "#fffcf5",
          50: "#fffaeb",
          100: "#fef0c7",
          200: "#fedf89",
          300: "#fec84b",
          400: "#fdb022",
          500: "#f79009",
          600: "#dc6803",
          700: "#b54708",
          800: "#93370d",
          900: "#7a2e0e",
        },
        success: {
          25: "#f6fef9",
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a6f4c5",
          300: "#6ce9a6",
          400: "#32d583",
          500: "#12b76a",
          600: "#039855",
          700: "#027a48",
          800: "#05603a",
          900: "#054f31",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
        color:"rgba(230, 189, 182, .5)"
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

    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  
  },

  plugins: [require("tailwindcss-animate")],
}
export default config
