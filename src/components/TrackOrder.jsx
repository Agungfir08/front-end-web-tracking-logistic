import React, { useContext, useRef } from "react";
import { useFormik } from "formik";
import { useQueryClient } from "@tanstack/react-query";
import { OrderContext } from "../context/Context";
import { inputRegex } from "../utils/InputFormat";
import useFetchOrder from "../hooks/useFetchOrder";

function TrackOrder() {
  const { setOrder } = useContext(OrderContext);
  const orderRef = useRef("");
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: {
      numberDO: "",
    },
    onSubmit: () => {
      const { numberDO } = formik.values;
      fetchOrderDetail(numberDO);
    },
  });

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputRegex.test(inputValue)) {
      formik.handleChange(e);
    }
  };

  const clearInput = () => {
    formik.setFieldValue("numberDO", "");
    orderRef.current.focus();
  };

  const { mutate: fetchOrderDetail } = useFetchOrder({
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["OrderInfo", data.data.data.OrderNo],
        data.data.data
      );
      setOrder(data.data.data.OrderNo);
    },
  });

  return (
    <div className=" mt-2.5">
      <div className="flex flex-col items-center gap-5 sm:px-7 md:px-12">
        <h1 className=" font-bold text-2xl sm:text-lg">Cek Delivery Order</h1>
        <form className="sm:w-full " onSubmit={formik.handleSubmit}>
          <div className="flex justify-center">
            <div className="relative sm:w-full ">
              <input
                type="text"
                name="numberDO"
                placeholder="DOXXXXXXXXXX"
                autoComplete="off"
                className=" border-1 border-gray-900 uppercase rounded-s-md w-80 sm:w-full  pr-8 focus:ring-1 focus:border-[--maincolor] focus:ring-[--maincolor] focus:outline-none"
                onChange={handleChange}
                value={formik.values.numberDO}
                ref={orderRef}
              />
              {formik.values.numberDO.length > 0 && (
                <div
                  className="absolute right-0 inset-y-0 flex items-center mr-3"
                  onClick={clearInput}>
                  <svg
                    className="w-3 h-3"
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
              )}
            </div>
            <button
              type="submit"
              className="bg-[--maincolor] text-white px-8 sm:px-6 rounded-e-md disabled:bg-[--maincolor] ">
              Lacak
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TrackOrder;
