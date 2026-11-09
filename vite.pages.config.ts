import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cpSync, copyFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const output = path.join(projectRoot, "dist/pages");

export default defineConfig({
  root: path.join(projectRoot, "static-site"),
  base: "/new-zealand-travel-12days-web/",
  publicDir: false,
  plugins: [
    react(),
    {
      name: "publish-approved-images-only",
      closeBundle() {
        cpSync(path.join(projectRoot, "public/daily"), path.join(output, "daily"), { recursive: true });
        for (const file of ["hero-glacier.webp", "favicon.svg"]) {
          copyFileSync(path.join(projectRoot, "public", file), path.join(output, file));
        }
        writeFileSync(path.join(output, ".nojekyll"), "");
        copyFileSync(path.join(output, "index.html"), path.join(output, "404.html"));
      },
    },
  ],
  build: { outDir: output, emptyOutDir: true },
});
