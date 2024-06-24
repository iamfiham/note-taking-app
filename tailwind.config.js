/** @type {import('tailwindcss').Config} */
import tailwindcssAnimationDelay from "tailwindcss-animation-delay";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        skeletonKeyframe: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
        borderAnimation: {
          "0%": { width: "60px", borderColor: "rgba(0,0,0,0)" },
          "5%": { width: "77px", borderColor: "#d4d4d4" },
          "100%": { width: "400px", borderColor: "rgba(0,0,0,0)" },
        },
      },
      animation: {
        border: "borderAnimation 3.5s infinite linear",
        skeleton: "skeletonKeyframe 2s infinite linear",
      },
      animationDelay: {
        2100: "2100ms",
        2800: "2800ms",
      },
      boxShadow: {
        n1: "0px 2px 4px 0px rgb(0,0,0,0.025),0px 4px 8px -1px rgb(0,0,0,0.025),0px 8px 16px -2px rgb(0,0,0,0.025)",
        tooltip:
          "0px 1px 2px 0px rgb(0,0,0,0.03),0px 2px 4px 0px rgb(0,0,0,0.03),0px 4px 8px 0px rgb(0,0,0,0.03)",
        n2: "0px 2px 4px 0px rgb(0,0,0,0.025),0px 4px 8px -1px rgb(0,0,0,0.025),0px 8px 16px -2px rgb(0,0,0,0.025),0px 16px 32px -4px rgb(0,0,0,0.025)",
        new: "0px 1px 1px rgba(3, 7, 18, 0.025),0px 3px 3px rgba(3, 7, 18, 0.02), 0px 6px 6px rgba(3, 7, 18, 0.015),0px 10px 10px rgba(3, 7, 18, 0.01),0px 16px 16px rgba(3, 7, 18, 0.01)",
      },
      backgroundImage: {
        skeletonGradiant:
          "linear-gradient(120deg,transparent 38%, rgba(255,255, 255,0.8) 50%,transparent 62%)",
      },
      backgroundSize: {
        200: "200% 100%",
      },
    },
  },

  plugins: [tailwindcssAnimationDelay],
};
