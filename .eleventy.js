// Load environment variables from .env file
require("dotenv").config();

module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy the public directory to the output
  eleventyConfig.addPassthroughCopy("public");

  // Add package.json data for use in templates
  eleventyConfig.addGlobalData("pkg", require("./package.json"));

  // Set default layout for all templates
  eleventyConfig.addGlobalData("layout", "redirect.njk");

  // Set default redirect URL and delay
  eleventyConfig.addGlobalData("redirect_url", "https://example.com");
  eleventyConfig.addGlobalData("redirect_delay", 3000);

  // Create a collection for redirect pages (excluding the index page)
  eleventyConfig.addCollection("redirectPages", function (collection) {
    return (
      collection
        .getAll()
        .filter(
          (item) =>
            // Include files that have redirect_url in frontmatter
            item.data &&
            item.data.redirect_url &&
            // Exclude pages with layout set to base.njk
            item.data.layout !== "base.njk" &&
            // Exclude the index page
            !item.inputPath.includes("index.njk")
        )
        // Sort by most recently created/modified (descending order)
        .sort((a, b) => {
          return b.date - a.date;
        })
    );
  });

  // Filter to get the first segment of a URL
  eleventyConfig.addFilter("getFirstUrlSegment", function (url) {
    if (!url) return "";
    // Extract the first segment after the initial slash
    const segments = url.split("/").filter((segment) => segment.length > 0);
    return segments[0] || "";
  });

  // Filter to slice arrays (since nunjucks doesn't have this built-in)
  eleventyConfig.addFilter("slice", function (array, start, end) {
    if (!array || !Array.isArray(array)) return [];
    return array.slice(start, end);
  });

  // Customize markdown library settings if needed
  let markdownIt = require("markdown-it");
  let markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Enable template engines
    templateFormats: ["njk", "md", "html"],
    // Set default template engine for markdown files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
