import React, { useContext, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchOrder from "../components/SearchOrder";
import OrderDetails from "../components/order/OrderDetails";
import Notification from "../components/Notification";
import NotFound from "../components/NotFound";
import { OrderContext } from "../context/OrderContext";

function Main() {
  const { order, notFound } = useContext(OrderContext);
  const orderRef = useRef(null);

  useEffect(() => {
    if (notFound || order.orderNo)
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
        className="sm:scroll-mt-16 md:scroll-mt-24 lg:scroll-mt-28 scroll-mt-15 ">
        <SearchOrder />
      </div>
      <div className="flex justify-center">
        {notFound ? <NotFound /> : order.orderNo && <OrderDetails />}
      </div>
    </div>
  );
}

export default Main;
