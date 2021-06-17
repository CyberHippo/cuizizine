/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Cuizizine",
    description: "'Manger, c'est important.' - A. Einstein",
    url: "https://cuizizine.vergnol.eu",
    image: "/images/og-image.jpg",
    author: "",
    iconPath: "./src/images/favicon.png",
    intro: "'Manger, c'est important.' - A. Einstein",
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
      },
      {
        name: "Ajouter une recette",
        href:
          "https://github.com/CyberHippo/cuizizine"
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
