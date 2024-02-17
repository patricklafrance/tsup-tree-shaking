// ts-check

import path from "path";
import TerserPlugin from "terser-webpack-plugin";

/** @type {import("webpack").Configuration} */
export default {
    mode: "production",
    target: "web",
    entry: "./src/index.js",
    output: {
        path: path.resolve("dist"),
        clean: true
    },
    optimization: {
        minimize: true,
        // minimizer: [new TerserPlugin()]
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    unused: true,
                    dead_code: true
                }
            }
        })]
    },
    resolve: {
        extensions: [".js"]
    }
};
