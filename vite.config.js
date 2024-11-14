import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/VS_E-Commerce/",
  plugins: [react()],
  // server: { port: 5173 },
});
