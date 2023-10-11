import React, { useContext, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import SearchOrder from "./SearchOrder";
import OrderDetails from "./order/OrderDetails";
import Notification from "./Notification";
import NotFound from "./NotFound";
import { OrderContext } from "../context/OrderContext";

function Main() {
  const { order, notFound } = useContext(OrderContext);
  const orderRef = useRef(null);

  useEffect(() => {
    if (notFound || order)
      orderRef.current?.scrollIntoView({
        behavior: "smooth",
        alignTop: true,
      });
  }, [notFound, order]);
  return (
    <div className="w-screen bg-white mb-3">
      <Notification />
      <Navbar />
      <Jumbotron />
      <div
        ref={orderRef}
        className="sm:scroll-mt-16 md:scroll-mt-24 lg:scroll-mt-28">
        <SearchOrder />
      </div>
      <div className="flex justify-center">
        {notFound ? <NotFound /> : order && <OrderDetails />}
      </div>
    </div>
  );
}

export default Main;
