import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Ensures file changes are detected in Docker
    },
    host: "0.0.0.0", // Allows access from outside the container
    port: 5173, // Ensures Vite runs on the correct port
    strictPort: true, // Prevents Vite from switching to a different port
    hmr: {
      clientPort: 5173, // Fixes HMR WebSocket connection issues
    },
  },
});
