/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    description: "'Manger, c'est important.' - A. Einstein",
    url: "https://cuizizine.vergnol.eu",
    image: "/images/og-image.jpg",
    author: "",
    basePath: "/",
    intro: "'Manger, c'est important.' - A. Einstein",
    menuLinks: [
      {
        name: "À propos",
        slug: "/about/"
      }
    ],
    footerLinks: [
      {
        name: "Ajouter une recette",
        href:
        "https://github.com/CyberHippo/cuizizine"
      },
      {
        name: "Gatsby Theme Recipes",
        href:
          "https://github.com/mariiinda/gatsby-theme-recipes/tree/master/packages/gatsby-theme-recipes"
      },
      {
        name: "Cookies 🍪",
        href: "/privacy-policy"
      }
    ]
  },
  plugins: [
    {
      resolve: "@marinda/gatsby-theme-recipes",
      options: {
        title: "👨‍🍳 Cuizizine 👩‍🍳",
        shortTitle: "Cuizizine",
        iconPath: "./static/images/favicon.png",
      }
    }
  ]
};
