import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { useQueryClient } from "@tanstack/react-query";
import InfoItem from "./InfoItem";

function OrderInfo() {
  const queryClient = useQueryClient();
  const { order } = useContext(OrderContext);
  const data = queryClient.getQueryData(["OrderInfo", order.orderNo]);

  const {
    customerId,
    customerName,
    customerAddress,
    receiverName,
    receiverAddress,
  } = data?.data || {};

  const infoItems = [
    { name: "Ref Number", value: "202144612" },
    { name: "Order Number", value: "GWDPLW2021070001" },
    { name: "Order Date", value: "2021-07-01" },
    { name: "Commodity", value: "Food" },
    { name: "Remarks", value: "Beverage" },
    { name: "Receiver Name", value: "Ipul" },
    { name: "Receiver Address", value: "Gowa" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-center sm:w-[310px] sm:h-[400px] w-[375px] h-[440px]">
      <div className=" flex flex-col gap-4">
        {infoItems.slice(0, 4).map((item, index) => (
          <InfoItem key={index} value={item.value} name={item.name} />
        ))}
        <div className="flex flex-rows justify-between">
          {infoItems.slice(-2).map((item, index) => (
            <InfoItem key={index} value={item.value} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
