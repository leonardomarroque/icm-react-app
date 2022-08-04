import { flexRender, Table } from "@tanstack/react-table";
import React from "react";
import { Louvor } from "../lib/api";
import { StyledTable, StyledTableBodyRow, StyledTableHeadRow, StyledTd, StyledTh, TableContainer } from "./table-layout.css";

interface TableLayoutProps {
  table: Table<Louvor>;
}

function TableLayout({ table }: TableLayoutProps) {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <StyledTableHeadRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledTh key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </StyledTh>
              ))}
            </StyledTableHeadRow>
          ))}
        </thead>
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
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </StyledTable>
      {/* <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
    </TableContainer>
  );
}

export default TableLayout;
