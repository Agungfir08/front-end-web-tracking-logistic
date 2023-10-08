import React, { useContext } from "react";
import OrderInfo from "./OrderInfo";
import TrackingInfo from "./TrackingInfo";
import ShipmentInfo from "./ShipmentInfo";
import OTP from "./OTP";
import { OrderContext } from "../../context/Context";

function OrderDetails() {
  const { authenticated } = useContext(OrderContext);
  return (
    <div className=" mt-4 max-w-7xl mx-auto md:w-fit lg:w-fit sm:mx-7 flex flex-wrap xl:flex-nowrap  bg-gray-100 sm:flex-col md:flex-col lg:flex-col justify-center items-center gap-6 rounded-2xl p-8 sm:p-6">
      <div className="flex-col gap-2">
        <h1 className=" font-semibold">Order Info</h1>
        <OrderInfo />
      </div>
      {authenticated ? (
        <>
          <div className="flex-col gap-2  ">
            <h1 className=" font-semibold ">Tracking Info</h1>
            <TrackingInfo />
          </div>
          <div className="flex-col gap-2">
            <h1 className=" font-semibold ">Shipment Info</h1>
            <ShipmentInfo />
          </div>
        </>
      ) : (
        <div className="flex gap-6 lg:flex-col md:flex-col sm:flex-col last:items-end last:justify-center lg:last:justify-end md:last:justify-end sm:last:justify-end relative">
          <div className="flex-col gap-2  ">
            <h1 className=" font-semibold ">Tracking Info</h1>
            <TrackingInfo />
          </div>
          <div className="flex-col gap-2">
            <h1 className=" font-semibold ">Shipment Info</h1>
            <ShipmentInfo />
          </div>
          <div className=" absolute backdrop-blur-xl bg-black/5 flex justify-center items-center w-full sm:h-[97.3%] md:h-[97.5%] lg:h-[97.5%] xl:h-[95%] rounded-lg">
            <OTP />
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
