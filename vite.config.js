import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/NFT_Marketplace_Showcase/",
  plugins: [react()],
});
