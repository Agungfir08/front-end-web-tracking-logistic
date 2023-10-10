// import React from "react";
// import Order from "./Order";
// import Tracking from "./Tracking";
// import Shipment from "./Shipment";

// function OrderDetails() {
//   return (
//     <div className=" mx-24 md:mx-12 sm:mx-7 flex flex-wrap xl:flex-nowrap lg:flex-nowrap bg-gray-100 sm:flex-col md:flex-col lg:flex-col justify-center items-center xl:justify-between gap-4 rounded-2xl p-7">
//       <Order />
//       <Tracking />
//       <Shipment />
//       <OTP/>
//     </div>
//   );
// }

// export default OrderDetails;

import React from "react";
import Order from "./Order";
import Tracking from "./Tracking";
import Shipment from "./Shipment";

import OTP from "./OTP";

function OrderDetails(props) {

  return (
    <div className="max-w-screen-xl mx-auto flex justify-between sm:flex-col bg-gray-100 gap-4 rounded-xl p-6 sm:mx-7">

    <div className="my-6 max-w-screen-xl mx-auto flex flex-wrap justify-between items-center sm:justify-center bg-gray-100 gap-4 rounded-xl p-6 sm:mx-7">
      <Order />
      {/* <Tracking />
      <Shipment /> */}
      <div className="flex justify-center">
        <div className="flex justify-between blur-lg">
          <Tracking />
          <Shipment />
        </div>
        {props.children}

      </div>
    </div>
    </div>
  );
}
export default OrderDetails;