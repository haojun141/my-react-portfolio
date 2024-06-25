import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Use './' for relative path if deploying in a subdirectory or specific path
  build: {
    outDir: "dist", // Specifies the output directory for the build
    assetsDir: "assets", // Organizes build assets into an 'assets' folder
    rollupOptions: {
      output: {
        // Control how asset URLs are generated, especially useful for CDN or sub-path deployment
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
