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

  const { Services, Via, TypeOfHandling, TypeOfRate, OriginDestination, customerAddress } =
    data?.Shipment_Info || {};

  const infoItems = [
    { name: "Services", value: Services },
    { name: "Via", value: Via },
    { name: "Type of Handling", value: TypeOfHandling },
    { name: "Type of Rate", value: TypeOfRate },
    { name: "Customer Addres", value: customerAddress },
    { name: "Origin Destination", value: OriginDestination },
  ];
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[310px] sm:h-[400px] w-[375px] h-[440px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-rows gap-24">
          {infoItems.slice(0, 2).map((item, index) => (
            <InfoItem key={index} name={item.name} value={item.value} />
          ))}
        </div>
        {infoItems.slice(2).map((item, index) => (
          <InfoItem key={index} name={item.name} value={item.value} />
        ))}
      </div>
      {/* <div className="flex justify-center">
        <img src={delivery} alt="Logo Delivery" className="w-52" />
      </div> */}
    </div>
  );
}

export default ShipmentInfo;
