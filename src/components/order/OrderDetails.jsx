import React from "react";
import OrderInfo from "./OrderInfo";
import TrackingInfo from "./TrackingInfo";
import ShipmentInfo from "./ShipmentInfo";

function OrderDetails() {
  return (
    <div className=" mt-4 w-full mx-24 md:w-fit lg:w-fit md:mx-0 sm:mx-7 flex flex-wrap xl:flex-nowrap  bg-gray-100 sm:flex-col md:flex-col lg:flex-col justify-center items-center xl:justify-between gap-4 rounded-2xl p-7">
      <div className="flex flex-col gap-1">
        <h1 className=" font-semibold">Order Info</h1>
        <OrderInfo />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className=" font-semibold">Tracking Info</h1>
        <TrackingInfo />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className=" font-semibold">Shipment Info</h1>
        <ShipmentInfo />
      </div>
    </div>
  );
}

export default OrderDetails;
