import { Link } from "react-router-dom";
import { styled } from "../styles/theme";
import HeroIcon from "./hero-icon";
import Icon from "./Icon";

export const Copyright = styled("div", {
  display: "flex",
  flexFlow: "column-reverse",
  rowGap: "1rem",
  justifyContent: "space-between",
  textAlign: "center",
  alignItems: "center",
  backgroundColor: "#ececec",
  padding: "1rem 2rem",
  "@md": {
    flexFlow: "row",
  },
});

export const CompanyLink = styled("a", {
  fontWeight: "700",
});

export const SocialMediaContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "1.5rem",
  background: "#e1e2e1",
  padding: "1rem 2rem",
});

export const Title = styled("h1", {
  color: "#757575",
  fontWeight: "500",
  fontSize: "1rem",
});

export const SocialIcon = styled(Icon, {
  width: "2rem",
  height: "2rem",
  fill: "$secondary",
  "&:hover": {
    fill: "$primary",
  },
});

export const HeartIcon = styled(HeroIcon, {
  width: "1.25rem",
  height: "1.25rem",
  fill: "Red",
});

export const Creator = styled("a", {
  textDecoration: "none",
  fontWeight: "bold",
  color: "#453886",
  paddingBottom: ".25em",
  "&:hover": {
    color: "$primary",
  },
});
