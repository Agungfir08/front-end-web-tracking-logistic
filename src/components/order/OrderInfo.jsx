import React, { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { useQueryClient } from "@tanstack/react-query";
import OrderInfoItem from "./OrderInfoItem";

function OrderInfo() {
  const queryClient = useQueryClient();
  const { order } = useContext(OrderContext);
  const orderDetail = queryClient.getQueryData(["OrderInfo", order]);

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[310px] sm:h-[400px] w-[375px] h-[440px]">
      <h1 className="  sm:text-base text-lg text-[--maincolor] font-semibold">
        {order}
      </h1>
      <div className=" flex flex-col gap-4">
        <OrderInfoItem
          name="customer id"
          value={orderDetail?.data.customerId}
        />
        <OrderInfoItem
          name="customer name"
          value={orderDetail?.data.customerName}
        />
        <OrderInfoItem
          name="customer address"
          value={orderDetail?.data.customerAddress}
        />
        <OrderInfoItem
          name="receiver name"
          value={orderDetail?.data.receiverName}
        />
        <OrderInfoItem
          name="receiver address"
          value={orderDetail?.data.receiverAddress}
        />
      </div>
    </div>
  );
}

export default OrderInfo;
