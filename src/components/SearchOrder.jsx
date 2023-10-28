import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { useFormik } from "formik";
import { useQueryClient } from "@tanstack/react-query";
import { OrderContext } from "../context/OrderContext";
import { inputRegex } from "../utils/InputFormat";
import { CROSS } from "./Icon";
import { NotificationContext } from "../context/NotificationContext";
import { actionTypes } from "../reducer/NotificationActionTypes";
import FetchOrder from "../features/FetchOrder";
import loadingTruck from "../assets/Lottie/truck_loading.json";
import Lottie from "lottie-react";
import axios from "axios";

function SearchOrder() {
  const { setOrder, setAuthenticated, setNotFound } = useContext(OrderContext);
  const { dispatch } = useContext(NotificationContext);
  const orderRef = useRef("");
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: {
      numberDO: "",
    },
    onSubmit: (values) => {
      const { numberDO } = values;
      if (!numberDO)
        dispatch({
          type: actionTypes.ERROR,
          message: "Nomor DO tidak boleh kosong",
        });
      else fetchOrderDetail(numberDO);
    },
  });

  const handleChange = useCallback(
    (e) => {
      const inputValue = e.target.value;
      if (inputRegex.test(inputValue)) {
        formik.handleChange(e);
      }
    },
    [formik]
  );

  const clearInput = () => {
    formik.setFieldValue("numberDO", "");
    orderRef.current.focus();
  };

  const { mutate: fetchOrderDetail, isLoading } = FetchOrder({
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["OrderInfo", data.data.data.OrderNo],
        data.data
      );
      setOrder({
        orderNo: data.data.data.OrderNo,
        email: data.data.data.email,
        phone: data.data.data.phone,
      });
      setAuthenticated(false);
      setNotFound(false);
    },
    onError: (data) => {
      dispatch({
        type: actionTypes.ERROR,
        message: data.response.data.message,
      });
      setNotFound(true);
    },
  });

  return (
    <>
      {isLoading && (
        <div
          className=" fixed top-0 left-0 bg-black/40 flex justify-center items-center w-full h-full"
          style={{ zIndex: 10000 }}>
          <Lottie animationData={loadingTruck} style={{ height: 225 }} />
        </div>
      )}
      <div className=" mt-8">
        <div className="flex flex-col items-center gap-5 sm:px-7 md:px-12">
          <h1 className=" font-bold text-2xl sm:text-lg">Cek Delivery Order</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center">
              <div className="relative ">
                <input
                  type="text"
                  name="numberDO"
                  placeholder="DOXXXXXXXXXX"
                  autoComplete="off"
                  className=" border border-1 border-gray-900 uppercase rounded-s-md w-80 sm:w-full py-1.5 pl-2.5 pr-8 focus:ring-1 focus:border-[--maincolor] focus:ring-[--maincolor] focus:outline-none sm:text-sm"
                  onChange={handleChange}
                  value={formik.values.numberDO}
                  ref={orderRef}
                />
                {formik.values.numberDO.length > 0 && (
                  <div
                    className="absolute right-0 inset-y-0 flex items-center mr-3"
                    onClick={clearInput}>
                    <CROSS />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-[--maincolor] text-white px-8 sm:px-5 rounded-e-md disabled:bg-[--maincolor] sm:text-sm">
                Lacak
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchOrder;
