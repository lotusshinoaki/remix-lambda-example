import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
  input: "server.js",
  output: {
    dir: "rollout",
    format: "cjs",
  },
  plugins: [nodeResolve(), commonjs(), json()]
};
