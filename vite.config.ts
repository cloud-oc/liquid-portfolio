import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",
  root: "src",
  publicDir: "../public",
  build: {
    emptyOutDir: true,
    outDir: "../dist",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
  },
  plugins: [react()],
});
