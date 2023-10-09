import React, { useState, useRef, useEffect, useContext } from "react";
import Main from "./components/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Context from "./context/Context";

function App() {
  const queryClient = new QueryClient();

  return (
    <Context>
      <QueryClientProvider client={queryClient}>
        <Main />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Context>
  );
}

export default App;
