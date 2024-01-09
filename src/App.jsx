import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import OrderContextProvider from './context/OrderContext';
import { NotificationProvider } from './context/NotificationContext';
import Main from './page/Main';
function App() {
    const queryClient = new QueryClient();

    return (
        <OrderContextProvider>
            <NotificationProvider>
                <QueryClientProvider client={queryClient}>
                    <Main />
                </QueryClientProvider>
            </NotificationProvider>
        </OrderContextProvider>
    );
}

export default App;
