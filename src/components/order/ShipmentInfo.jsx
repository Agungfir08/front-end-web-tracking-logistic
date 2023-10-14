import React, { useContext } from "react";
import delivery from "../../assets/delivery.png";
import { OrderContext } from "../../context/OrderContext";
import { useQueryClient } from "@tanstack/react-query";

function ShipmentInfo() {
  const { order, authenticated } = useContext(OrderContext);
  const queryClient = useQueryClient();

  const data = authenticated
    ? queryClient.getQueryData(["TrackShipInfo", order])
    : null;
    
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[310px] sm:h-[400px] w-[375px] h-[440px]">
      {data ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-rows gap-24">
            <div>
              <h1 className=" text-lg sm:text-base text-[--maincolor] font-semibold">
                {data.Shipment_Info.Services}
              </h1>
              <p className=" text-base sm:text-sm text-gray-900 font-semibold">
                services
              </p>
            </div>
            <div>
              <h1 className=" text-lg sm:text-base text-[--maincolor] font-semibold">
                {data.Shipment_Info.Via}
              </h1>
              <p className=" text-base sm:text-sm text-gray-900 font-semibold">
                via
              </p>
            </div>
          </div>
          <div className="">
            <h1 className=" text-lg sm:text-base text-[--maincolor] font-semibold">
              {data.Shipment_Info.TypeOfHandling}
            </h1>
            <p className=" text-base sm:text-sm text-gray-900 font-semibold">
              type of handling
            </p>
          </div>
          <div className="">
            <h1 className=" text-lg sm:text-base text-[--maincolor] font-semibold">
              {data.Shipment_Info.TypeOfRate}
            </h1>
            <p className=" text-base sm:text-sm text-gray-900 font-semibold">
              type of rate
            </p>
          </div>
          <div className="">
            <h1 className=" text-lg sm:text-base text-[--maincolor] font-semibold">
              {data.Shipment_Info.OriginDestination}
            </h1>
            <p className=" text-base sm:text-sm text-gray-900 font-semibold">
              origin destination
            </p>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
      <div className="flex justify-center">
        <img src={delivery} alt="Logo Delivery" className="w-64" />
      </div>
    </div>
  );
}

export default ShipmentInfo;
