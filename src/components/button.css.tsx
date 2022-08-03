import { styled } from "../styles/theme";

export const ButtonTypes = styled("button", {
  textTransform: "uppercase",
  maxHeight: "2.5rem",
  minWidth: "8rem",
  whiteSpace: "nowrap",
  fontWeight: "700",
  cursor: "pointer",
  outline: "none",
  display: "inline-flex",
  columnGap: ".5rem",
  alignItems: "center",
  border: "none",
  transition: "all 0.3s ease",
  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
        border: "1px solid $primary",
        color: "White",
        "&:hover": {
          backgroundColor: "$pLight",
        },
      },
      secondary: {
        backgroundColor: "$secondary",
        border: "1px solid $secondary",
        color: "White",
        "&:hover": {
          backgroundColor: "$sLight",
        },
      },
    },
    outlined: {
      true: {
        background: "transparent",
        "&:hover": {
          color: "white",
        },
      },
    },
    plain: {
      true: {
        background: "transparent",
      },
    },
    size: {
      sm: {
        fontSize: "13px",
        padding: "1rem 1rem",
      },
      md: {
        fontSize: "15px",
        padding: "1.2rem 1.75rem",
      },
      lg: {
        fontSize: "18px",
        padding: "1.5rem 2rem",
      },
    },
  },
  compoundVariants: [
    {
      color: "primary",
      outlined: true,
      css: {
        color: "$primary",
        borderColor: "$primary",
        background: "transparent",
        "&:hover": {
          color: "white",
          background: "$pLight",
        },
      },
    },
    {
      color: "secondary",
      outlined: true,
      css: {
        color: "$secondary",
        borderColor: "$secondary",
        "&:hover": {
          color: "white",
          background: "$sLight",
        },
      },
    },
    {
      color: "secondary",
      plain: true,
      css: {
        color: "$secondary",
        border: "none",
        "&:hover": {
          background: "transparent",
        },
      },
    },
  ],
});
