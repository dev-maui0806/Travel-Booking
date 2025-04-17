import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ACB1',
        secondary: '#FAFF00',
        accent: '#FAFF00',
        background: '#1C1F22',
        foreground: '#FFFFFF',
        gray: {
          DEFAULT: '#818181',
          900: '#222629',
          800: '#292E32',
          700: '#323638',
          500: '#818181',
          400: '#BABABA',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
export default config; 