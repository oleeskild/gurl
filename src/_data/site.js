module.exports = {
  title: "Gurl",
  description: "A git backed URL shortener",
  url: "https://example.com",
  author: "Your Name",
  year: new Date().getFullYear(),
  // Controls whether to show marketing content or just the links
  // Set to true only for the main demo site
  showMarketingContent: process.env.SHOW_MARKETING_CONTENT === "true" || false,
};
