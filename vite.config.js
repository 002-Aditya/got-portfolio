import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "characteristics-brilliant-appreciated-hist.trycloudflare.com",
      "kent-transformation-brick-eggs.trycloudflare.com"
    ],
  },
});
