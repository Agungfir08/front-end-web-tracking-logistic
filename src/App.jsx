import Main from "./components/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import OrderContextProvider from "./context/OrderContext";
import NotificationContextProvider from "./context/NotificationContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <OrderContextProvider>
      <NotificationContextProvider>
        <QueryClientProvider client={queryClient}>
          <Main />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </NotificationContextProvider>
    </OrderContextProvider>
  );
}

export default App;
