/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Cuizizine",
    shortTitle: "Cuizizine",
    description: "'Manger, c'est important.' - A. Einstein",
    url: "https://cuizizine.vergnol.eu",
    image: "/images/og-image.jpg", // Path to your image you placed in the 'static' folder
    author: "",
    // intro: "Classic recipes you’ll want to keep making.",
    menuLinks: [
      {
        name: "À propos",
        slug: "/about/"
      }
    ],
    footerLinks: [
      {
        name: "Privacy Policy & Cookies",
        href: "/privacy-policy"
      },
      {
        name: "Gatsby Theme Recipes on Github",
        href:
          "https://github.com/mariiinda/gatsby-theme-recipes/tree/master/packages/gatsby-theme-recipes"
      }
    ]
  },
  plugins: [
    {
      resolve: "@marinda/gatsby-theme-recipes",
      options: {
        title: "Classic Recipes",
        shortTitle: "Recipes"
      }
    }
  ]
};
