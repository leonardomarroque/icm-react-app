import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Louvor } from "../lib/api";
import TableInstance from "./table-instance";

function TableQuery() {
  const fetchData = (): Promise<Louvor[]> =>
    axios
      .get(`https://louvores-api.herokuapp.com/louvores`)
      .then((response) => response.data);
  const queryClient = useQueryClient();
  const [tableData, setTableData] = useState<Louvor[] | undefined>([]);
  const { data, isLoading } = useQuery(["louvores"], fetchData);

  useEffect(() => {
    setTableData(data);
  }, data);

  if (isLoading || !tableData) {
    return <div>Loading...</div>;
  }

  return <TableInstance data={tableData} />;
}

export default TableQuery;
