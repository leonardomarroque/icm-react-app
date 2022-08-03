import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "../styles/theme";
import { ReactComponent as Logo } from "../assets/svg-2.svg";
import HeroIcon from "./hero-icon";

export const NavContainer = styled("nav", {
  display: "flex",
  backgroundColor: "$primary",
  height: "88px",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  "@md": {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  },
});

export const Nav = styled("ul", {
  display: "none",
  padding: "0",
  columnGap: ".5rem",
  listStyle: "none",
  "@sm": {
    display: "flex",
  },
});

export const NavItem = styled(Link, {
  display: "block",
  padding: ".75rem 1.5rem",
  color: "Black",
  fontWeight: "700",
});

export const NavWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  "@sm": {
    width: "1120px",
  },
});

export const StyledLogo = styled(Logo, {
  width: "4rem",
  height: "4rem",
});

export const AccessWrapper = styled("div", {
  display: "none",
  columnGap: ".5rem",
  "@sm": {
    display: "flex",
  },
});

export const StyledUserIcon = styled(HeroIcon, {
  width: "1.5rem",
  height: "1.5rem",
});

export const MobileButtonMenu = styled("button", {
  display: "inline-flex",
  background: "transparent",
  outline: "none",
  border: "none",
  "@sm": {
    display: "none",
  },
});

export const MobileIconMenu = styled(HeroIcon, {
  width: "3rem",
  height: "3rem",
  fill: "$pDark",
});
