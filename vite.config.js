// Folow this example:
// https://vueschool.io/articles/vuejs-tutorials/how-to-package-and-distribute-a-vue-js-3-plugin-on-npm/
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { resolve } from 'path'
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      // the entry file that is loaded whenever someone imports
      // your plugin in their app
      entry: resolve(__dirname, "src/components/index.ts"),
      // the exposed global variable
      // is required when formats includes 'umd' or 'iife'
      name: "JsonschemaForm",
      // the proper extensions will be added, ie:
      // name.js (es module)
      // name.umd.cjs) (common js module)
      // default fileName is the name option of package.json
      fileName: "vue3-jsonschema-form",
    },
    sourcemap: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        globals: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});