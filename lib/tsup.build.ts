import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["./src"],
    outDir: "./dist",
    format: "esm",
    target: "esnext",
    platform: "browser"
});
