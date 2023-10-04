import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import TrackOrder from "./components/TrackOrder";
import OrderDetails from "./components/details/OrderDetails";

function App() {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const orderDetailsRef = useRef(null);

  const handleTrackOrderSubmit = () => {
    setShowOrderDetails(true);
    console.log("track order submit");
  };

  // useEffect(() => {
  //   if (orderDetailsRef.current) {
  //     orderDetailsRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [orderDetailsRef]);

  return (
    <div className="w-screen h-full bg-white mb-3">
      <Navbar />
      <Jumbotron />
      <TrackOrder onSubmit={handleTrackOrderSubmit} />
      {showOrderDetails && (
        <div ref={orderDetailsRef}>
          <OrderDetails />
        </div>
      )}
    </div>
  );
}

export default App;
