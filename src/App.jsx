import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import TrackOrder from "./components/TrackOrder";
import OrderDetails from "./components/details/OrderDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import OTP from "./components/details/OTP";
import { ForgetCode } from "./components/details/ForgetCode";

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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-screen h-full bg-white mb-3">
                <Navbar />
                <Jumbotron />
                <TrackOrder />
                <OrderDetails>
                  <OTP/>
                </OrderDetails>
              </div>
            }
          />
          
          <Route
            path="/forget"
            element={
              <div className="w-screen h-full bg-white mb-3">
                <Navbar />
                <Jumbotron />
                <TrackOrder />
                <OrderDetails>
                  <ForgetCode/>
                </OrderDetails>
              </div>
            }
          />
        </Routes>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
