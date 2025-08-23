import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows access from LAN / all IPs
    port: 5173,
    allowedHosts: [
      "6a60122c5012.ngrok-free.app",
      "e592e01cc8f4.ngrok-free.app", // add your ngrok host here
      "localhost", // keep localhost allowed too
    ],
  },
});
