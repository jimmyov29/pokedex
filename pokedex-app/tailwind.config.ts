import type { Config } from "tailwindcss";

const colors = {
  transparent: "transparent",
  primary: {
    500: "#EDDEA4",
    900: "#F7A072",
  },
  secondary: {
    blue: {
      500: "#B5E2FA",
      900: "#0FA3B1",
    },
  },
  neutral: {
    0: "#FFFFFF",
    100: "#FAFAFA",
    200: "#EAEAEB",
    400: "#C3C1C1",
    500: "#7E7777",
    600: "#A2A2A9",
    700: "#808089",
    750: "#544F4F",
    800: "#353131",
    850: "#515156",
    900: "#1E1E21",
    950: "#232121",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
