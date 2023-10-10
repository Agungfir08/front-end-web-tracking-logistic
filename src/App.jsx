import React, { useState, useRef, useEffect, useContext } from "react";
import Main from "./components/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Context from "./context/Context";
import NotificationContextProvider from "./context/NotificationContext";
import Notification from "./components/Notification";

function App() {
  const queryClient = new QueryClient();

  return (
    <Context>
      <NotificationContextProvider>
        <QueryClientProvider client={queryClient}>
          <Notification />
          <Main />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </NotificationContextProvider>
    </Context>
  );
}

export default App;
