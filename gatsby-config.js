module.exports = {
  siteMetadata: {
    title: "P.E.I Design",
    description:
      "The #1 community for all things design-related on Prince Edward Island",
    siteURL: "http://princeedwardisland.design",
    copyright: "Copyright © 2018, P.E.I Designers.",
    menu: [""],
    social: {
      image: "/og-image.png",
      twitter: "",
      facebook: "",
      meetup: ""
    }
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-svg"
  ]
};
