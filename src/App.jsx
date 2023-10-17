import Main from "./pages/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import OrderContextProvider from "./context/OrderContext";
import { NotificationProvider } from "./context/NotificationReducer";
function App() {
  const queryClient = new QueryClient();

  return (
    <OrderContextProvider>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <Main />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </NotificationProvider>
    </OrderContextProvider>
  );
}

export default App;
