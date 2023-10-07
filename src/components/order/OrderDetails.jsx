import React from "react";
import OrderInfo from "./OrderInfo";
import TrackingInfo from "./TrackingInfo";
import ShipmentInfo from "./ShipmentInfo";
import OTP from "./OTP";

function OrderDetails() {
  return (
    <div className=" mt-4 w-full mx-24 md:w-fit lg:w-fit md:mx-0 sm:mx-7 flex flex-wrap xl:flex-nowrap  bg-gray-100 sm:flex-col md:flex-col lg:flex-col justify-center items-center xl:justify-between gap-4 rounded-2xl p-8">
      <div className="flex-col gap-2">
        <h1 className=" font-semibold">Order Info</h1>
        <OrderInfo />
      </div>
      <div className="flex justify-center items-center w-full  ">
        <div className="flex lg:flex-col md:flex-col sm:flex-col justify-evenly w-full [&>div>:not(h1)]:blur-lg gap-6">
          <div className="flex-col gap-2 ">
            <h1 className=" font-semibold ">Tracking Info</h1>
            <TrackingInfo />
          </div>
          <div className="flex-col gap-2">
            <h1 className=" font-semibold ">Shipment Info</h1>
            <ShipmentInfo />
          </div>
        </div>
        <OTP />
      </div>
    </div>
  );
}

export default OrderDetails;
