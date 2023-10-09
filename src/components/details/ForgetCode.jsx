import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import FAQ from "../../assets/FAQ.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ForgetCode() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(!open);

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
        onClose={navigate("/")}
        className="rounded-2xl"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="flex flex-col items-center py-[45px]">
          <img className="w-auto" src={FAQ} />
        </div>
        <DialogBody divider>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
              />
            </svg>
            <div className="flex flex-row">
              <a href="#" className="font-semibold text-black">Kirim dengan Email [</a>
              <a href="#" className="font-semibold text-gray-500">ibnuji@gmail.com</a>
              <a href="#" className="font-semibold text-black">]</a>
            </div>
          </div>
        </DialogBody>
        <DialogBody divider>
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
              />
            </svg>
            <div className="flex flex-row">
              <a href="#" className="font-semibold text-black">Kirim dengan WhatsApp [</a>
              <a href="#" className="font-semibold text-gray-500">081234567890</a>
              <a href="#" className="font-semibold text-black">]</a>
            </div>
          </div>
        </DialogBody>
        <DialogBody divider>
          
        </DialogBody>
      </Dialog>
     </div>
  );
}