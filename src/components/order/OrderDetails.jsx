import { useContext } from 'react';
import OrderInfo from './OrderInfo';
import TrackingInfo from './TrackingInfo';
import ShipmentInfo from './ShipmentInfo';
import AccessCode from '../AccessCode';
import { OrderContext } from '../../context/OrderContext';

export function CommonInfo() {
    return (
        <>
            <div className="flex-col">
                <h1 className=" font-semibold">Tracking Result</h1>
                <TrackingInfo />
            </div>
            <div className="flex-col">
                <h1 className=" font-semibold">Shipment Info</h1>
                <ShipmentInfo />
            </div>
        </>
    );
}

function OrderDetails() {
    const { authenticated } = useContext(OrderContext);
    return (
        <div
            data-test="data-delivery-details"
            className=" mt-4 max-w-7xl mx-auto md:w-fit lg:w-fit sm:mx-7 flex flex-wrap xl:flex-nowrap  bg-gray-100 sm:flex-col md:flex-col lg:flex-col justify-center items-center gap-6 rounded-2xl p-8 sm:p-6">
            <div className="flex-col">
                <h1 className=" font-semibold">Order Detail</h1>
                <OrderInfo />
            </div>
            {authenticated ? (
                <CommonInfo />
            ) : (
                <div className="flex gap-6 lg:flex-col md:flex-col sm:flex-col last:items-end last:justify-center lg:last:justify-end md:last:justify-end sm:last:justify-end relative">
                    <CommonInfo />
                    <div className=" absolute backdrop-blur-xl bg-black/5 flex justify-center items-center w-full sm:h-[96.8%] md:h-[97.1%] lg:h-[97.1%] xl:h-[94%] rounded-lg">
                        <AccessCode />
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderDetails;
