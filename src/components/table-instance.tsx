import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { Louvor } from "../lib/api";
import TableLayout from "./table-layout";

interface TableInstanceProps {
  data: Louvor[];
}

const TableInstance = ({ data }: TableInstanceProps) => {
  const columnHelper = createColumnHelper<Louvor>();
  const columns = [
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
  ];

  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <TableLayout table={tableInstance} />;
};

export default TableInstance;
