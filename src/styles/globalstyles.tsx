import { globalCss } from "@stitches/react";

const GlobalStyles = globalCss({
  "body,html": {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto, sans-serif",
  },
  "*": { boxSizing: "border-box" },
  a: {
    textDecoration: "none",
    font: "inherit",
  },
});

export default GlobalStyles;
