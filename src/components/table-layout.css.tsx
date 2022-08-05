import { styled } from "../styles/theme";
import HeroIcon from "./hero-icon";

export const TableContainer = styled("div", {
  overflowX: "auto",
  margin: "0 1rem",
  "@md": {
    display: "flex",
    justifyContent: "center",
  },
});

export const StyledTable = styled("table", {
  borderCollapse: "collapse",
  margin: "1.5rem 0",
  fontSize: ".9rem",
  fontFamily: "sans-serif",
  borderRadius: "$lg",
  overflow: "hidden",
});

export const StyledTableHead = styled("thead", {
  height: "4rem",
});

export const StyledTableHeadRow = styled("tr", {
  backgroundColor: "$primary",
  color: "White",
  textAlign: "left",
});

export const StyledTh = styled("th", {
  padding: ".75rem .95rem",
});

export const StyledTd = styled("td", {
  padding: ".75rem .95rem",
});

export const StyledTableBodyRow = styled("tr", {
  borderBottom: "1px solid #dddddd",
  "&:nth-of-type(even)": {
    backgroundColor: "#f3f3f3",
  },
  "&:last-fo-type": {
    borderBottom: "1px solid #primary",
  },
});

export const ContainerIcon = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const StyledSortIcon = styled(HeroIcon, {
  width: "2rem",
  height: "2rem",
  fill: "White",
});
