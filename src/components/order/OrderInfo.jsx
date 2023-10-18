import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { useQueryClient } from "@tanstack/react-query";
import InfoItem from "./InfoItem";

function OrderInfo() {
  const queryClient = useQueryClient();
  const { order } = useContext(OrderContext);
  const data = queryClient.getQueryData(["OrderInfo", order.orderNo]);

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[310px] sm:h-[400px] w-[375px] h-[440px]">
      <h1 className="  sm:text-base text-lg text-[--maincolor] font-semibold">
        {order.orderNo}
      </h1>
      <div className=" flex flex-col gap-4">
        <InfoItem name="customer id" value={data?.data.customerId} />
        <InfoItem name="customer name" value={data?.data.customerName} />
        <InfoItem name="customer address" value={data?.data.customerAddress} />
        <InfoItem name="receiver name" value={data?.data.receiverName} />
        <InfoItem name="receiver address" value={data?.data.receiverAddress} />
      </div>
    </div>
  );
}

export default OrderInfo;
