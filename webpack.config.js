import path from "node:path";

export default {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
};