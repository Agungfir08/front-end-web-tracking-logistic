import React, { useEffect, useState } from "react";
import InputAccessCode from "../modals/InputAccessCode";

const OTP = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="font-semibold rounded-lg flex flex-col items-center absolute max-w-xs">
      <p className="text-center">
        Masukkan Kode Akses Anda Untuk Melihat Detail Tracking
      </p>
      <button
        onClick={handleOpen}
        className="mt-2 bg-[--maincolor] w-[150px] h-[45px] text-white px-4 py-2 rounded-md font-normal">
        Masukkan
      </button>

      <InputAccessCode open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default OTP;
