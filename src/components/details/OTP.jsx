import React, { FC, useState, useRef, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Card,
  CardBody,
} from "@material-tailwind/react";

let currentOTPIndex = 0

const OTP = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const inputRef = useRef(null);

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    const newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);
    setOtp(newOTP);
  };

  const handleOnKeyDown = (key, index) => {
    const keys = key.key
    currentOTPIndex = index
    if(keys === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1)
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className="mt-60 font-semibold rounded-lg flex flex-col items-center absolute max-w-xs">
      <p className="text-center">
        Masukkan Kode Akses Anda Untuk Melihat Detail Tracking
      </p>
      <Button
        onClick={handleOpen}
        className="mt-2 bg-[--maincolor] w-[175px] h-[45px] text-white px-4 py-2 rounded-md "
      >
        Masukkan
      </Button>

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="p-6 space-y-2"
      >
        <DialogHeader className="justify-center">
          Masukkan Kode Akses
        </DialogHeader>
        {/* <Card className="mx-auto w-full max-w-[24rem]"> */}
        <div className="flex justify-evenly items-center">
          {otp.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  ref={index === activeOTPIndex ? inputRef : null}
                  onChange={handleChange}
                  onKeyDown={(e) => handleOnKeyDown(e, index)}
                  type="number"
                  className="w-12 h-12 border-2 focus:ring-0 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-[--maincolor] focus:border-2 focus:text-gray-700 text-gray-400 transition"
                  value={otp[index]}
                />
              </React.Fragment>
            );
          })}
        </div>
        <DialogFooter className="justify-center">
          <div className="flex flex-col items-center gap-1">
          <Button fullWidth  className="w-[150px] bg-[--maincolor]" onClick={handleOpen}>
            <span>Lacak</span>
          </Button>
          <p>lupa akses kode anda?<a href="#" className="text-blue-700 underline"> Klik disini</a></p>
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default OTP;
