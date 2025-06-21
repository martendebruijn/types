import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  outdir: "dist",
  platform: "node",
  format: "esm",
  sourcemap: true,
  target: ["node14"],
  logLevel: "info",
}).catch(() => process.exit(1));
