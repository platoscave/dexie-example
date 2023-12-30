import { defineConfig } from "vite";
import path from 'path'
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

//const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    // lib: {
    //   entry: path.resolve(__dirname, "src/index.ts"),
    //   fileName: (format) => `index.${format}.js`,
    //   name: "index",
    // },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "JsonschemaForm",
      fileName: "vue3-jsonschema-form",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});