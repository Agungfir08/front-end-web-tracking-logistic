import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import TrackOrder from "./components/TrackOrder";
import OrderDetails from "./components/details/OrderDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const orderDetailsRef = useRef(null);

  const handleTrackOrderSubmit = () => {
    setShowOrderDetails(true);
    console.log("track order submit");
  };

  const queryClient = new QueryClient();
  // useEffect(() => {
  //   if (orderDetailsRef.current) {
  //     orderDetailsRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [orderDetailsRef]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-full bg-white mb-3">
        <Navbar />
        <Jumbotron />
        <TrackOrder />
        <OrderDetails />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;