import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";

// TODO: generate component bundle
export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  devServer: {
    openBrowser: false
  },
  outputTargets: [
    {
      // Generates the app
      type: "www",
      dir: "dist/www",
      serviceWorker: null,
      copy: [
        {
          src: "_redirects"
        }
      ]
    },
    {
      // Generates the web component JSON documentation for the website
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
  plugins: [postcss()]
};
