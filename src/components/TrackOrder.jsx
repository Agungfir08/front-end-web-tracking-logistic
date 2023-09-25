import React, { useEffect } from "react";
import { useRef, useState } from "react";

function TrackOrder() {
  const [numberDO, setNumberDO] = useState("");

  const orderRef = useRef("");

  const clearInput = () => {
    orderRef.current.value = "";
    orderRef.current.focus();
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setNumberDO(value);
  };

  useEffect(() => {
    console.log(numberDO);
  }, [numberDO]);

  return (
    <div className=" max-screen-w-xl mx-auto">
      <div className="flex flex-col items-center gap-5 sm:px-7">
        <h1 className=" font-bold text-2xl sm:text-xl">Cek Delivery Order</h1>
        <form className="sm:w-full">
          <div className="flex justify-center">
            <div className="relative sm:w-full">
              <input
                type="text"
                placeholder="DOXXXXXXXXXX"
                autoComplete="off"
                className=" border-1 border-gray-900 uppercase rounded-s-md w-80 sm:w-full pr-8 focus:ring-1 focus:border-[--maincolor] focus:ring-[--maincolor] focus:outline-none"
                onChange={handleInput}
                value={numberDO}
                ref={orderRef}
              />
              {
                <div
                  className="absolute right-0 inset-y-0 flex items-center mr-3"
                  onClick={clearInput}>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              }
            </div>
            <button
              type="submit"
              className="bg-[--maincolor] text-white px-8 sm:px-6 rounded-e-md">
              Lacak
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TrackOrder;
