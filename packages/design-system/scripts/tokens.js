const fs = require("fs");
const glob = require("fast-glob");
const path = require("path");
const theo = require("theo");

const theoFormatterTailwindcss = require("../lib/theo/formatTailwindcss");
const theoFormatterStencil = fs.readFileSync(
  path.resolve(__dirname, "../lib/theo/formatStencil.hbs"),
  "utf8"
);
const tokenConfigs = glob.sync(
  path.resolve(__dirname, "../src/global/tokens/**/*.tokens.{yml,json,js}")
);
const componentConfigs = glob.sync(
  path.resolve(__dirname, "../src/app/**/*.tokens.{yml,json,js}")
);
const configs = [...tokenConfigs, ...componentConfigs];

// Register custom formatters
theo.registerFormat("tailwindcss.js", theoFormatterTailwindcss);
theo.registerFormat("custom-properties-stencil.css", theoFormatterStencil);

/**
 * Generate output file for a given token config, transform config, and format config
 *
 * @param {string} config
 * @param {Object} transform
 * @param {Object} format
 */
async function generateOutput(config, transform, format) {
  try {
    const oldExt = path.extname(config);
    const newExt = path.extname(format.type) || format.type;

    const output = await theo.convert({
      transform: transform,
      format: format
    });
    const outputFile = config
      .replace(oldExt, newExt)
      .replace(".tokens", ".vars");

    fs.writeFileSync(outputFile, output, { encoding: "utf-8" });
  } catch (error) {
    throw error;
  }
}

// Generate outputs for each token config
configs.forEach(async config => {
  try {
    let conversions = [];
    let file = config;
    let shouldUseData = config.endsWith(".js");
    let data;
    let transforms = [
      {
        type: "web",
        file: file
      }
    ];
    let formats = [
      {
        type: "custom-properties-stencil.css"
      },
      {
        type: "tailwindcss.js"
      }
    ];

    // Theo allows specifying a data string (in json format) instead of reading from a file
    // which allows us to programatically generate JSON with Javascript
    if (shouldUseData) {
      data = JSON.stringify(require(config));
      file = path.basename(file).replace("js", "json"); // Theo requires a json filename

      transforms = transforms.map(transform =>
        Object.assign(transform, {
          file: file,
          data: data
        })
      );
    }

    transforms.forEach(transform => {
      formats.forEach(format => {
        conversions.push([config, transform, format]);
      });
    });

    await Promise.all(
      conversions.map(conversion => generateOutput(...conversion))
    );
  } catch (error) {
    console.log(error);

    return;
  }
});
