import { Config } from "@stencil/core";
import { postcss } from "stencil-plugin-postcss-extra";
import postcssConfig from "./postcss.config";

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "peid-design-system",
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  devServer: {
    openBrowser: false
  },
  outputTargets: [
    {
      // Generates the pre-render script
      type: "dist-hydrate-script",
      dir: "dist/hydrate"
    },
    {
      // Generates the documentation site
      type: "www",
      dir: "dist/www/",
      baseUrl: "https://design-system.princedwardisland.design",
      serviceWorker: null
    },
    {
      // Generates the re-usable web component bundle
      type: "dist",
      dir: "dist/components"
    },
    {
      // Generates the web component JSON documentation for the style guide
      type: "docs-json",
      file: "dist/www/docs.json"
    },
    {
      // Generates the markdown documentation for the repository
      type: "docs"
    }
  ],
  plugins: [postcss(postcssConfig)]
};
