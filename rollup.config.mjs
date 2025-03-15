import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: "dist/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: [
    "react",
    "react-dom",
    "@chakra-ui/react",
    "next/head",
    "next/image",  // ✅ Make sure Next.js modules are external
    "next/link",
    "next/router",
    "fs", "stream", "zlib", "util"  // ✅ Ensure Node.js built-ins are external
  ],
  plugins: [
    peerDepsExternal(),  // ✅ Ensures peer dependencies are not bundled
    resolve({
      browser: true,  // ✅ Ensures we are bundling for the browser
      preferBuiltins: false,  // ✅ Avoids Node.js modules in the bundle
    }),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" })
  ],
};
