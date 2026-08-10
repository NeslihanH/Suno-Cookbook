import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves a project site under /<repo>/, so the build needs a
// matching base path. Locally (dev/preview) we keep "/". Override with
// VITE_BASE if the repo name or hosting path ever changes.
// https://vite.dev/config/
// Ports come from the studio-wide registry in archloomlabs-documents/dev-ports.md, which allocates
// 5185 dev and 4185 preview to this project. Two reasons the numbers are not arbitrary:
//
// 5174 is what Vite falls back to when 5173 is already taken, so it is inside the shared default
// range rather than outside it - a neighbouring project started first will land on it. And dev and
// preview cannot share one port while strictPort is on, because running a preview while the dev
// server is up then fails hard instead of working.
//
// strictPort stays on deliberately: a taken port should be a loud failure, not a silent move onto
// somebody else's number.
export default defineConfig(({ command }) => ({
  base: command === "build" ? process.env.VITE_BASE ?? "/Suno-Cookbook/" : "/",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5185,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4185,
    strictPort: true,
  },
}));
