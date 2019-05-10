import { Config } from "@stencil/core";
import { postcss } from "stencil-plugin-postcss-extra";
import postcssConfig from "./postcss.config";

// TODO: generate component bundle
export const config: Config = {
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
      // Generates the app
      type: "www",
      dir: "dist/www",
      baseUrl: "https://princeedwardisland.design/",
      serviceWorker: null,
      copy: [
        {
          src: "_redirects"
        },
        {
          src: "../dist/content",
          dest: "content"
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
      type: "docs-readme"
    }
  ],
  plugins: [postcss(postcssConfig)]
};
