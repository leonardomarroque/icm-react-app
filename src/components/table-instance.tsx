import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { Louvor } from "../lib/api";
import TableLayout from "./table-layout";

interface TableInstanceProps {
  data: Louvor[];
}

const TableInstance = ({ data }: TableInstanceProps) => {
  const columnHelper = createColumnHelper<Louvor>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const columns = useMemo<ColumnDef<Louvor>[]>(
    () => [
      {
        header: "Número",
        accessorKey: "numero",
      },
      {
        header: "Título",
        accessorKey: "titulo",
      },
      {
        header: "Criado em",
        accessorKey: "createdAt",
      },
      {
        header: "Atualizado em",
        accessorKey: "updatedAt",
      },
    ],
    []
  );

  /* const columns2 = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("titulo", {
      header: () => "Tìtulo",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("numero", {
      header: () => "Numero",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Criado em",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("updatedAt", {
      header: () => "Atualizado em",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
  ]; */

  const tableInstance = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return <TableLayout table={tableInstance} />;
};

export default TableInstance;
