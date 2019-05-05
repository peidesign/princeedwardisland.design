import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import tailwindcss from "tailwindcss";

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
      // Generates the re-usable web component bundle
      type: "dist",
      dir: "dist/components/"
    },
    {
      // Generates the style guide
      type: "www",
      dir: "dist/www/",
      serviceWorker: null
    },
    {
      // Generates the web component JSON documentation for the style guide
      type: "docs-json",
      file: "dist/www/docs.json"
    },
    {
      // Generates the markdown documentation for the repository
      type: "docs"
    },
    {
      // Generates the pre-render script
      type: "dist-hydrate-script",
      dir: "dist/prerender"
    }
  ],
  plugins: [postcss(tailwindcss)]
};
