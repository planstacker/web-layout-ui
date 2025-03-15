import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import inject from "@rollup/plugin-inject";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom", "@chakra-ui/react"], // Ensure React is external
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    inject({
      process: "process",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
