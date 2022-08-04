import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      background: "#222831",
      support: "#A8B3BC",
      text: "#EEEEEE",
      "base-text": "#CDD0D5",
      primary: "#00adb5",
      "primary-light": "#5cdfe7",
      "primary-dark": "#007d85",
      secondary: "#393e46",
      "secondary-light": "#636871",
      "secondary-dark": "#13181f",
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
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
