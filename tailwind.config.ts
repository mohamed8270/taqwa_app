import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ["Poppins"],
        tamil: ["Noto Sans Tamil"],
        arabic: ["Noto Naskh Arabic"],
      },
      colors: {
        Tblack: "#242424",
        Tgreen: "#01A488",
        Twhite: "#FFFFFF",
        Tyellow: "#F28705",
        Tgrey: "#D9D9D9",
      },
    },
  },
  plugins: [],
}
export default config
