module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.js"),
    require("postcss-cssnext")({
      features: {
        customProperties: {
          preserve: true
        }
      }
    }),
    require("rtlcss"),
    require("laggard"),
    require("postcss-browser-reporter")
  ]
};
