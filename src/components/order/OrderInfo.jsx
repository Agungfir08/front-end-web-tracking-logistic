import React, { useContext } from "react";
import { OrderContext } from "../../context/Context";
import { useQueryClient } from "@tanstack/react-query";
import OrderInfoItem from "./OrderInfoItem";

function OrderInfo() {
  const queryClient = useQueryClient();
  const { order } = useContext(OrderContext);
  const orderDetail = queryClient.getQueryData(["OrderInfo", order]);

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[320px] sm:h-[400px] w-[375px] h-[440px]">
      <h1 className="  sm:text-base text-lg text-[--maincolor] font-semibold">
        {orderDetail.OrderNo}
      </h1>
      <div className=" flex flex-col gap-4">
        <OrderInfoItem name="customer id" value={orderDetail.customerId} />
        <OrderInfoItem name="customer name" value={orderDetail.customerName} />
        <OrderInfoItem
          name="customer address"
          value={orderDetail.customerAddress}
        />
        <OrderInfoItem name="receiver name" value={orderDetail.receiverName} />
        <OrderInfoItem
          name="receiver address"
          value={orderDetail.receiverAddress}
        />
      </div>
    </div>
  );
}

export default OrderInfo;
