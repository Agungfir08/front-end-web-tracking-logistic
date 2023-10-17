import { Dialog, DialogBody } from "@material-tailwind/react";
import FAQ from "../../assets/FAQ.png";
import { EMAIL, WHATSAPP } from "../Icon";
import PostForgetCodeEmail from "../../features/PostForgetCodeEmail";
import { useContext, useReducer } from "react";
import { OrderContext } from "../../context/OrderContext";
import PostForgetCodeWhatsapp from "../../features/PostForgetCodeWhatsapp";
import { NotificationContext } from "../../context/NotificationReducer";

export default function InputForgetCode({ open, handleOpen }) {
  const { dispatch } = useContext(NotificationContext);
  const { order } = useContext(OrderContext);

  const handleSubmitEmail = () => {
    postForgetCode({ OrderNo: order });
    handleOpen();
  };

  const handleSubmitWhatsapp = () => {
    postForgetCodeWhatsapp({
      phone: "6282348634934",
      AccessCode: "E243",
      OrderNo: order,
    });
    handleOpen();
  };

  const { mutate: postForgetCode } = PostForgetCodeEmail({
    onSuccess: (data) => {
      dispatch({ type: "SUCCESS", message: data.data.message });
    },
    onError: (data) => {
      dispatch({ type: "ERROR", message: data.response.data.message });
    },
  });

  const { mutate: postForgetCodeWhatsapp } = PostForgetCodeWhatsapp({
    onSuccess: (data) => {
      dispatch({ type: "SUCCESS", message: data.data.message });
    },
    onError: (data) => {
      dispatch({ type: "ERROR", message: data.response.data.message });
    },
  });

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
      <DialogBody
        divider
        className=" !font-poppins hover:bg-black/5 hover:cursor-pointer">
        <a
          onClick={handleSubmitEmail}
          className="font-semibold text-black sm:text-sm flex flex-row">
          <span className=" mr-4">
            <EMAIL />
          </span>
          Via Email [
          <span href="#" className="font-semibold text-gray-500">
            ibnuji@gmail.com
          </span>
          ]
        </a>
      </DialogBody>
      <DialogBody
        divider
        className="!font-poppins !border-b-0 hover:bg-black/5 hover:cursor-pointer">
        <a
          onClick={handleSubmitWhatsapp}
          className="font-semibold text-black sm:text-sm flex flex-row">
          <span className=" mr-4">
            <WHATSAPP />
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
