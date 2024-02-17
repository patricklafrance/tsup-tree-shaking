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
        minimizer: [new TerserPlugin({
            terserOptions: {
                toplevel: true,
                mangle: false,
                keep_classnames: true,
                keep_fnames: true,
                compress: {
                    toplevel: true,
                    hoist_props: false,
                    pure_funcs: [
                        "console.log",
                        "console.warn"
                    ]
                }
            }
        })]
    },
    resolve: {
        extensions: [".js"]
    }
};
