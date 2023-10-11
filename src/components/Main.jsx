import React, { useContext, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import TrackOrder from "./TrackOrder";
import OrderDetails from "./order/OrderDetails";
import { OrderContext } from "../context/Context";
import { ToastContainer } from 'react-toastify';

function Main() {
  const { order } = useContext(OrderContext);
  const orderRef = useRef(null);

  useEffect(() => {
    if (order)
      orderRef.current?.scrollIntoView({
        behavior: "smooth",
        alignTop: true,
      });
  }, [order]);
  return (
    <div className="w-screen bg-white mb-3">
      <Navbar />
      <Jumbotron />
      <div
        ref={orderRef}
        className="sm:scroll-mt-16 md:scroll-mt-24 lg:scroll-mt-28">
        <TrackOrder />
      </div>
      {order && (
        <div className="flex justify-center">
          <OrderDetails />
        </div>
      )}
      <ToastContainer/>
    </div>
  );
}

export default Main;
