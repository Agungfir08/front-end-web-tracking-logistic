import React, { useRef, useEffect, useState, useContext } from "react";
import { Dialog, DialogHeader, DialogFooter } from "@material-tailwind/react";
import { inputRegex } from "../../utils/InputFormat";
import PostTrackShip from "../../hooks/PostTrackShip";
import InputForgetCode from "./InputForgetCode";
import Notification from "../Notification";
import { useQueryClient } from "@tanstack/react-query";
import { OrderContext } from "../../context/Context";
import { is } from "date-fns/locale";

let currentOTPIndex = 0;
export default function InputAccessCode({ open, handleOpen }) {
  const inputRef = useRef(null);
  const [openForgetCode, setOpenForgetCode] = useState(false);
  const queryClient = useQueryClient();
  const { order, setAuthenticated } = useContext(OrderContext);

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const handleOpenForgetCode = () => {
    setOpenForgetCode(!openForgetCode);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (!inputRegex.test(value)) {
      return;
    }
    const newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);
    setOtp(newOTP);
  };

  const handleOnKeyDown = (key, index) => {
    const keys = key.key;
    currentOTPIndex = index;
    if (keys === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  const { mutate: fetchTrackShip, isError } = PostTrackShip({
    onSuccess: (data) => {
      queryClient.setQueryData(["TrackShipInfo", order], data.data);
      setAuthenticated(true);
      handleOpen();
    },
    onError: () => {
      setOtp(Array(4).fill(""));
      setActiveOTPIndex(0);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join("").toUpperCase();
    fetchTrackShip({ OrderNo: order, Access: otpString });
  };
  console.log("error: ", isError);
  useEffect(() => {
    if (!open) {
      setOtp(Array(4).fill(""));
      setActiveOTPIndex(0);
    }
  }, [open]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  useEffect(() => {
    if (openForgetCode) {
      handleOpen();
    }
  }, [openForgetCode]);
  return (
    <>
      <Dialog
        open={open}
        size="sm"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: 0 },
        }}
        className="space-y-6 p-6 xl:!max-w-[35%] xl:!min-w-[35%] lg:!max-w-[45%] lg:!min-w-[45%] md:!max-w-[50%] md:!min-w-[50%]"
      >
        <DialogHeader className="justify-center !text-center !font-poppins !font-bold !text-2xl !p-0">
          Masukkan Kode Akses
        </DialogHeader>
        <div className="flex justify-evenly items-center">
          {otp.map((_, index) => {
            return (
              <div key={index}>
                <input
                  ref={index === activeOTPIndex ? inputRef : null}
                  onChange={handleChange}
                  onKeyDown={(e) => handleOnKeyDown(e, index)}
                  type="text"
                  className="w-12 h-12 border-2 focus:ring-0 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-[--maincolor] focus:border-2 text-gray-900 transition uppercase"
                  value={otp[index]}
                />
              </div>
            );
          })}
        </div>
        <DialogFooter className="justify-center !p-0 ">
          <div className="flex flex-col items-center gap-1">
            <button
              className="w-[150px] bg-[--maincolor] rounded-md text-white py-1.5 font-semibold"
              onClick={handleSubmit}
            >
              Lacak
            </button>
            <div className=" mt-1">
              <p className="text-black text-sm">
                lupa akses kode anda?{" "}
                <a
                  href="javascript:void(0)"
                  className="text-blue-700 hover:underline hover:underline-offset-2 font-medium transition"
                  onClick={handleOpenForgetCode}
                >
                  Klik disini
                </a>
              </p>
            </div>
          </div>
        </DialogFooter>
      </Dialog>
      <InputForgetCode
        open={openForgetCode}
        handleOpen={handleOpenForgetCode}
      />
    </>
  );
}
