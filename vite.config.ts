import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // Only split out heavy / optional libs. React, Radix, motion etc. stay
        // in the main bundle so Rollup doesn't reorder createContext-using
        // modules ahead of React's initialization.
        manualChunks: {
          "vendor-spline": ["@splinetool/react-spline", "@splinetool/runtime"],
          "vendor-matter": ["matter-js"],
          "vendor-gsap": ["gsap", "@gsap/react"],
          "vendor-recharts": ["recharts"],
          "vendor-firebase": ["firebase/app", "firebase/firestore"],
        },
      },
    },
  },
}));
