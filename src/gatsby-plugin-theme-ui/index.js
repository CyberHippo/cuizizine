import theme from "@marinda/gatsby-theme-recipes/src/gatsby-plugin-theme-ui";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    text: "#362101",
    background: "#fff",
    primary: "#AACDB8",
    secondary: "#862E9C",
    accent: "#F4D3E5",
    muted: "#F9E7C9",
    grey: "#F0EEEA",
    // modes: {
    //   dark: {
    //     ...theme.colors.modes.dark,
    //     muted: "#019875",
    //     background: "#407A52",
    //   }
    // }
  }
};
