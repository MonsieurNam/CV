import { existsSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const appHtml = join(distDir, "app.html");
const indexHtml = join(distDir, "index.html");

if (existsSync(indexHtml)) {
  rmSync(indexHtml);
}

renameSync(appHtml, indexHtml);
