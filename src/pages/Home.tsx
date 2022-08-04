import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import TableQuery from "../components/tabele-query";

function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <TableQuery />
    </QueryClientProvider>
  );
}

export default Home;
