import React from "react";
import Order from "./Order";
import Tracking from "./Tracking";
import Shipment from "./Shipment";

function OrderDetails() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center sm:justify-center bg-gray-100 gap-4 rounded-xl p-6 sm:mx-7">
      <Order />
      <Tracking />
      <Shipment />
    </div>
  );
}

export default OrderDetails;
