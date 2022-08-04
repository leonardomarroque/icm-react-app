import { styled } from "../styles/theme";

export const TableContainer = styled("div", {
  overflowX: "auto",
  margin:"0 1rem"
});

export const StyledTable = styled("table", {
  borderCollapse: "collapse",
  margin: "1.5rem 0",
  fontSize: ".9rem",
  fontFamily: "sans-serif",
  borderRadius: "$lg",
  overflow: "hidden",
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
