import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple-dark': '#4B1F6F',
        'brand-yellow-solar': '#FFD53D',
        'brand-purple-light': '#BDA3E1',
        'brand-gray-lilac': '#F4F1FA',
        'brand-black-charcoal': '#222222',
        'brand-whatsapp-bg': '#DCF8C6',
      },
      fontFamily: {
        sora: ['var(--font-sora)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
