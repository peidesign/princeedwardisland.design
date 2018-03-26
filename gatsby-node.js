const glob = require('glob')
const path = require('path')
const { cssModulesConfig } = require("gatsby-1-config-css-modules");
const { extractTextPlugin } = require("gatsby-1-config-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-css":
        config.plugin('purgecss', PurgecssPlugin, [{
            paths: glob.sync(path.resolve(__dirname, "src/**/*.js"), {nodir: true})
        }])
    break;
    case "build-javascript":
      config.loader("css", {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        loader: extractTextPlugin(stage).extract(["css?minimize", "postcss"])
      });
      break;
  }

  return config;
};
