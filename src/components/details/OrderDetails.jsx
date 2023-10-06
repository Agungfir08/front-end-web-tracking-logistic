import React from "react";
import Order from "./Order";
import Tracking from "./Tracking";
import Shipment from "./Shipment";

import OTP from "./OTP";
import { ForgetCode } from "./ForgetCode";

function OrderDetails(props) {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center sm:justify-center bg-gray-100 gap-4 rounded-xl p-6 sm:mx-7">
      <Order />
      {/* <Tracking />
      <Shipment /> */}

      <div className="flex justify-center sm:items-center">
        <div className="sm:flex-wrap flex blur-lg justify-center">
          <Tracking />
          <Shipment />
        </div>
        {/* {props.children} */}
        
        <ForgetCode/>
      </div>
    </div>
  );
}

export default OrderDetails;
