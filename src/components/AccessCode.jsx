import { useState } from "react";
import InputAccessCode from "./modals/InputAccessCode";

const AccessCode = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className=" flex flex-col max-w-[275px] xl:max-w-xs sm:max-w-[225px] items-center">
      <h3 className="text-center font-semibold">
        Masukkan Kode Akses Anda Untuk Melihat Detail Tracking
      </h3>
      <button
        onClick={handleOpen}
        className="mt-2 bg-[--maincolor] w-[150px] h-[45px] text-white px-4 py-2 rounded-md font-normal">
        Masukkan
      </button>

      <InputAccessCode open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default AccessCode;
