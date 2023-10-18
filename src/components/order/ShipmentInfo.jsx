import React, { useContext } from "react";
import delivery from "../../assets/delivery.png";
import { OrderContext } from "../../context/OrderContext";
import { useQueryClient } from "@tanstack/react-query";
import InfoItem from "./InfoItem";

function ShipmentInfo() {
  const { order, authenticated } = useContext(OrderContext);
  const queryClient = useQueryClient();

  const data = authenticated
    ? queryClient.getQueryData(["TrackShipInfo", order.orderNo])
    : null;

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[310px] sm:h-[400px] w-[375px] h-[440px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-rows gap-24">
          <InfoItem value={data?.Shipment_Info.Services} name="services" />
          <InfoItem value={data?.Shipment_Info.Via} name="via" />
        </div>
        <InfoItem
          value={data?.Shipment_Info.TypeOfHandling}
          name="type of handling"
        />
        <InfoItem value={data?.Shipment_Info.TypeOfRate} name="type of rate" />
        <InfoItem
          value={data?.Shipment_Info.OriginDestination}
          name="origin destination"
        />
      </div>
      <div className="flex justify-center">
        <img src={delivery} alt="Logo Delivery" className="w-64" />
      </div>
    </div>
  );
}

export default ShipmentInfo;
