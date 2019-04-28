import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "peid-website",
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      // Generates the app
      type: "www",
      dir: "dist/www/",
      serviceWorker: null
    },
    {
      // Generates the re-usable web component bundle
      type: "dist",
      dir: "dist/components/"
    },
    {
      // Generates the markdown documentation for the repository
      type: "docs"
    },
    {
      // Generates the web component JSON documentation for the style guide
      type: "docs-json",
      file: "dist/www/docs.json"
    },
    {
      // Generates the web component JSON documentation for web component bundle
      type: "docs-json",
      file: "dist/components/docs.json"
    }
  ],
  plugins: [postcss()]
};
