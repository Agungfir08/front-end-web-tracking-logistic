import React from "react";

const data = [
  {
    name: "customer id",
    value: "CID66F3E695",
  },
  {
    name: "customer name",
    value: "PT. Inbisco Niagatama Semesta (Beverage)",
  },
  {
    name: "customer address",
    value: "Jl. Tomang Raya Kav 21 -23, Jakarta Barat",
  },
  {
    name: "receiver name",
    value: "Ipul",
  },
  {
    name: "receiver address",
    value: "Gowa",
  },
];

function Order() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className=" font-semibold">Order details</h1>
      <div className="bg-white rounded-lg p-6 flex flex-col justify-between sm:w-[320px] sm:h-[420px] w-[375px] h-[475px]">
        <h1 className="  sm:text-base text-lg text-[--maincolor] font-semibold">
          GWDBGG2023030033
        </h1>
        <div className=" flex flex-col gap-4">
          {data.map((item) => (
            <div className="flex-col">
              <h1 className=" sm:text-base text-lg text-[--maincolor] font-semibold">
                {item.value}
              </h1>
              <p className="  sm:text-sm text-base text-gray-900 font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
