import { useRef, useEffect, useState, useContext } from "react";
import { Dialog, DialogHeader, DialogFooter } from "@material-tailwind/react";
import { inputRegex } from "../../utils/InputFormat";
import PostTrackShip from "../../features/PostTrackShip";
import InputForgetCode from "./InputForgetCode";
import { useQueryClient } from "@tanstack/react-query";
import { OrderContext } from "../../context/OrderContext";
import { NotificationContext } from "../../context/NotificationContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let currentOTPIndex = 0;
export default function InputAccessCode({ open, handleOpen }) {
  const showToast = () =>
  toast.success('Kode akses berhasil di lacak', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const inputRef = useRef(null);
  const queryClient = useQueryClient();
  const [openForgetCode, setOpenForgetCode] = useState(false);
  const { order, setAuthenticated } = useContext(OrderContext);
  const notificationContext = useContext(NotificationContext);

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

  const { mutate: postTrackShip } = PostTrackShip({
    onSuccess: (data) => {
      queryClient.setQueryData(["TrackShipInfo", order], data.data);
      setAuthenticated(true);
      notificationContext.success(data.data.message);
      handleOpen();
      showToast();
    },
    onError: (data) => {
      setOtp(Array(4).fill(""));
      setActiveOTPIndex(0);
      notificationContext.error(data.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join("").toUpperCase();
    postTrackShip({ OrderNo: order, Access: otpString });
  };
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
        className="p-6 xl:!max-w-[30%] xl:!min-w-[30%] lg:!max-w-[40%] lg:!min-w-[40%] md:!max-w-[50%] md:!min-w-[50%]">
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-y-5">
            <DialogHeader className="justify-center !text-center !font-poppins !font-bold !text-2xl !p-0 sm:!text-xl">
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
                      className="w-12 h-12 sm:w-11 sm:h-11 border-2 focus:ring-0 rounded bg-transparent outline-none text-center font-semibold text-xl sm:text-lg border-gray-400 focus:border-[--maincolor] focus:border-2 text-gray-900 transition uppercase"
                      value={otp[index]}
                    />
                  </div>
                );
              })}
            </div>
            <DialogFooter className="justify-center !p-0 ">
              <div className="flex flex-col items-center gap-1">
                <button
                  className="w-[150px] bg-[--maincolor] rounded-md text-white py-1.5 font-semibold sm:text-sm"
                  type="submit">
                  Lacak
                </button>
                <div className=" mt-1">
                  <p className="text-black text-sm sm:text-xs">
                    lupa akses kode anda?{" "}
                    <a
                      href="javascript:void(0)"
                      className="text-blue-700 hover:underline hover:underline-offset-2 font-medium transition"
                      onClick={handleOpenForgetCode}>
                      Klik disini
                    </a>
                  </p>
                </div>
              </div>
            </DialogFooter>
          </div>
        </form>
      </Dialog>
      <InputForgetCode
        open={openForgetCode}
        handleOpen={handleOpenForgetCode}
      />
    </>
  );
}
