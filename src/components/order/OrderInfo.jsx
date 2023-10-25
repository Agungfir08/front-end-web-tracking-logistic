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
    { name: "Customer Id", value: customerId },
    { name: "Customer Name", value: customerName },
    { name: "Customer Address", value: customerAddress },
    { name: "Receiver Name", value: receiverName },
    { name: "Receiver Address", value: receiverAddress },
  ];

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[310px] sm:h-[400px] w-[375px] h-[440px]">
      <h1 className="  sm:text-base text-lg text-[--maincolor] font-semibold">
        {order.orderNo}
      </h1>
      <div className=" flex flex-col gap-4">
        {infoItems.map((item, index) => (
          <InfoItem key={index} value={item.value} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default OrderInfo;
