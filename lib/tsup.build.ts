import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    splitting: false,
    dts: true,
    entry: ["./src"],
    outDir: "./dist",
    format: "esm",
    target: "esnext",
    platform: "browser"
});
