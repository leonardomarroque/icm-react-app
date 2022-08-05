import { flexRender, Table } from "@tanstack/react-table";
import React from "react";
import { Louvor } from "../lib/api";
import HeroIcon from "./hero-icon";
import {
  ContainerIcon,
  StyledSortIcon,
  StyledTable,
  StyledTableBodyRow,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTd,
  StyledTh,
  TableContainer,
} from "./table-layout.css";

interface TableLayoutProps {
  table: Table<Louvor>;
}

function TableLayout({ table }: TableLayoutProps) {
  return (
    <TableContainer>
      <StyledTable>
        <StyledTableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <StyledTableHeadRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledTh key={header.id}>
                  {header.isPlaceholder ? null : (
                    <ContainerIcon
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <StyledSortIcon icon="ChevronDownIcon" />,
                        desc: <StyledSortIcon icon="ChevronUpIcon" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </ContainerIcon>
                  )}
                </StyledTh>
              ))}
            </StyledTableHeadRow>
          ))}
        </StyledTableHead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <StyledTableBodyRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              ))}
            </StyledTableBodyRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default TableLayout;
