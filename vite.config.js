import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Broken Heart Art",
        short_name: "Art @ Heart",
        icons: [
          {
            src: "/maskable-icons/maskable_icon.png",
            sizes: "200x200",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/maskable-icons/maskable_icon_x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/maskable-icons/maskable_icon_x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/maskable-icons/maskable_icon_x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/maskable-icons/maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/maskable-icons/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/maskable-icons/maskable_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/maskable-icons/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#eab308",
        background_color: "#eab308",
        display: "standalone",
        start_url: "./index.html",
        orientation: "portrait",
      },
    }),
  ],
});
