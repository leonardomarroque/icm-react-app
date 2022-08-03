import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      primary: "#ffb13b",
      pLight: "#ffe36d",
      pDark: "#c78200",
      secondary: "#2f4858",
      sLight: "#5a7385",
      sDark: "#04212f",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "1.75rem",
      2: "2rem",
      3: "2.75rem",
    },
    fonts: {
      untitled: "Roboto, sans-serif",
      mono: "monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {

    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
