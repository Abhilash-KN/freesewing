import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import path from "path";
import { name, version, description, author, license } from "./package.json";

export default {
  input: "src/index.js",
  plugins: [
    resolve({
      browser: true
    }),
    json(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    })
    //terser({
    //  output: {
    //    preamble: `/**\n * ${name} | v${version}\n * ${description}\n * (c) ${new Date().getFullYear()} ${author}\n * @license ${license}\n */`
    //  }
    //})
  ],
  external: [
    "freesewing",
    "@freesewing/plugin-cutonfold",
    "@freesewing/plugin-dimension",
    "@freesewing/plugin-logo",
    "@freesewing/plugin-title"
  ],
  output: {
    globals: {
      freesewing: "freesewing",
      "@freesewing/plugin-cutonfold": "freesewing.plugins.cutonfold",
      "@freesewing/plugin-dimension": "freesewing.plugins.dimension",
      "@freesewing/plugin-logo": "freesewing.plugins.logo",
      "@freesewing/plugin-title": "freesewing.plugins.title"
    }
  }
};