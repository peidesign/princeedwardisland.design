import { Config } from "@stencil/core";
import { postcss } from "stencil-plugin-postcss-extra";
import postcssConfig from "./postcss.config";

export const config: Config = {
  namespace: "PeidWebsite",
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
