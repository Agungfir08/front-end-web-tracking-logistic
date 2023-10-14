import { Dialog, DialogBody } from "@material-tailwind/react";
import FAQ from "../../assets/FAQ.png";
import Email from "../icons/email";
import WA from "../icons/WA";

export default function InputForgetCode({ open, handleOpen }) {
  return (
    <Dialog
      open={open}
      size="sm"
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: 0 },
      }}
      className="xl:!max-w-[35%] xl:!min-w-[35%] lg:!max-w-[40%] lg:!min-w-[40%] md:!max-w-[50%] md:!min-w-[50%]">
      <div className="flex flex-col items-center py-6">
        <img className=" w-auto sm:w-56" src={FAQ} />
      </div>
      <DialogBody divider>
        <a
          href="#"
          className="font-semibold text-black sm:text-sm flex flex-row">
          <span className=" mr-4">
            <Email/>
          </span>
          Via Email [
          <span href="#" className="font-semibold text-gray-500">
            ibnuji@gmail.com
          </span>
          ]
        </a>
      </DialogBody>
      <DialogBody divider className=" !border-b-0">
        <a
          href="#"
          className="font-semibold text-black sm:text-sm flex flex-row">
          <span className=" mr-4">
            <WA />
          </span>
          Via WhatsApp [
          <span href="#" className="font-semibold text-gray-500">
            081234567890
          </span>
          ]
        </a>
      </DialogBody>
    </Dialog>
  );
}
