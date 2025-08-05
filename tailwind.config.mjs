// import defaultTheme from "tailwindcss/defaultTheme";

// const config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-funnel-sans)", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;



export default {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'gradient-y': 'gradient-y 5s ease infinite',
        'gradient-xy': 'gradient-xy 8s ease infinite',
        'text-glow': 'textGlow 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: 'center top' },
          '50%': { backgroundPosition: 'center bottom' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textGlow: {
      '0%, 100%': { textShadow: '0 0 10px #60a5fa, 0 0 20px #c084fc' },
      '50%': { textShadow: '0 0 15px #3b82f6, 0 0 30px #a855f7' },
    },
      },
    },
  },
  plugins: [],
};
