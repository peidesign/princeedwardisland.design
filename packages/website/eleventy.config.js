module.exports = {
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
  dataTemplateEngine: "njk",
  dir: {
    input: "./src/content",
    output: "./dist/content",
    includes: "./includes",
    layouts: "./layouts",
    data: "./data"
  }
};
