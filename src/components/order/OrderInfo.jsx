import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';
import { useQueryClient } from '@tanstack/react-query';
import InfoItem from './InfoItem';

function OrderInfo() {
    const queryClient = useQueryClient();
    const { order } = useContext(OrderContext);
    const data = queryClient.getQueryData(['OrderInfo', order.orderNo]);

    const {
        refNumber,
        OrderNo,
        orderDate,
        commodity,
        remarks,
        receiverName,
        receiverAddress,
    } = data?.data || {};

    const infoItems = [
        { name: 'Ref Number', value: refNumber },
        { name: 'order number', value: OrderNo },
        { name: 'order date', value: orderDate },
        { name: 'commodity', value: commodity },
        { name: 'remarks', value: remarks },
        { name: 'Receiver Name', value: receiverName },
        { name: 'Receiver Address', value: receiverAddress },
    ];

    return (
        <div
            data-test="order-info"
            className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[310px] sm:h-[400px] w-[375px] h-[440px] mt-1">
            {/* <h1 className="  sm:text-base text-lg text-[--maincolor] font-semibold">
        {order.orderNo}
      </h1> */}
            <div className=" flex flex-col gap-4">
                {infoItems.slice(0, -2).map((item, index) => (
                    <InfoItem key={index} value={item.value} name={item.name} />
                ))}
                <div className="flex flex-rows justify-between">
                    {infoItems.slice(-2).map((item, index) => (
                        <InfoItem
                            key={index}
                            value={item.value}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OrderInfo;
