import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "../styles/theme";
import { ReactComponent as Logo } from "../assets/svg-2.svg";
import HeroIcon from "./hero-icon";

export const NavContainer = styled("nav", {
  display: "flex",
  backgroundColor: "$background",
  height: "88px",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "1rem",
  paddingRight: "1rem",
});

export const Nav = styled("ul", {
  display: "none",
  padding: "0",
  columnGap: ".5rem",
  listStyle: "none",
  "@md": {
    display: "flex",
  },
});

export const NavItem = styled(NavLink, {
  display: "block",
  padding: ".75rem 1.5rem",
  color: "$support",
  fontWeight: "700",
  transition: "all 0.3s ease",
  "&.active": {
    borderBottom: "1px solid $primary",
    color: "White",
  },
});

export const NavWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  "@md": {
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
  "@md": {
    display: "flex",
  },
});

export const StyledUserIcon = styled(HeroIcon, {
  width: "1.5rem",
  height: "1.5rem",
});

export const MobileButtonMenu = styled("button", {
  display: "flex",
  background: "transparent",
  outline: "none",
  border: "none",
  cursor: "pointer",
  "@md": {
    display: "none",
  },
});

export const MobileIconMenu = styled(HeroIcon, {
  width: "3rem",
  height: "3rem",
  fill: "$primary",
});
