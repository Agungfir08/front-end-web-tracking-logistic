import React from "react";
import Order from "./Order";
import Tracking from "./Tracking";
import Shipment from "./Shipment";

function OrderDetails() {
  return (
    <div className=" mx-24 md:mx-12 sm:mx-7 flex flex-wrap xl:flex-nowrap lg:flex-nowrap bg-gray-100 sm:flex-col md:flex-col lg:flex-col justify-center items-center xl:justify-between gap-4 rounded-2xl p-7">
      <Order />
      <Tracking />
      <Shipment />
    </div>
  );
}

export default OrderDetails;
