import { Config } from "@stencil/core";
import { postcss } from "stencil-plugin-postcss-extra";
import postcssConfig from "./postcss.config";

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "PeidDesignSystem",
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  devServer: {
    openBrowser: false
  },
  outputTargets: [
    {
      // Generates the re-usable web component bundle
      type: "dist",
      dir: "dist/components"
    },
    {
      // Generates the web component JSON documentation for the style guide
      type: "docs-json",
      file: "dist/components/docs.json"
    },
    {
      // Generates the markdown documentation for the repository
      type: "docs-readme"
    }
  ],
  plugins: [postcss(postcssConfig)]
};
