import { Dialog, DialogBody } from "@material-tailwind/react";
import FAQ from "../../assets/FAQ.png";
import { EMAIL, WHATSAPP } from "../Icon";
import PostForgetCodeEmail from "../../features/PostForgetCodeEmail";
import { useContext, useReducer } from "react";
import { OrderContext } from "../../context/OrderContext";
import PostForgetCodeWhatsapp from "../../features/PostForgetCodeWhatsapp";
import { NotificationContext } from "../../context/NotificationContext";
import { actionTypes } from "../../reducer/NotificationActionTypes";

export default function InputForgetCode({ open, handleOpen }) {
  const { dispatch } = useContext(NotificationContext);
  const { order } = useContext(OrderContext);

  const handleSubmitEmail = () => {
    postForgetCode({ OrderNo: order.orderNo });
    handleOpen();
  };

  const handleSubmitWhatsapp = () => {
    postForgetCodeWhatsapp({
      phone: order.phone,
      AccessCode: "E243",
      OrderNo: order.orderNo,
    });
    handleOpen();
  };

  const { mutate: postForgetCode } = PostForgetCodeEmail({
    onSuccess: (data) => {
      dispatch({ type: actionTypes.SUCCESS, message: data.data.message });
    },
    onError: (data) => {
      dispatch({
        type: actionTypes.ERROR,
        message: data.response.data.message,
      });
    },
  });

  const { mutate: postForgetCodeWhatsapp } = PostForgetCodeWhatsapp({
    onSuccess: (data) => {
      dispatch({ type: actionTypes.SUCCESS, message: data.data.message });
    },
    onError: (data) => {
      dispatch({
        type: actionTypes.ERROR,
        message: data.response.data.message,
      });
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
      {[
        {
          icon: <EMAIL />,
          title: "Via Email",
          text: order.email,
          onClick: handleSubmitEmail,
        },
        {
          icon: <WHATSAPP />,
          title: "Via Whatsapp",
          text: order.phone,
          onClick: handleSubmitWhatsapp,
        },
      ].map((item, index, array) => (
        <DialogBody
          key={index}
          divider
          className={`!font-poppins hover:bg-black/5 hover:cursor-pointer ${
            index === array.length - 1 && "!border-b-0"
          }`}>
          <a
            onClick={item.onClick}
            className="font-semibold text-black sm:text-sm flex flex-row">
            <span className=" mr-4">{item.icon}</span>
            {item.title} [
            <span href="#" className="font-semibold text-gray-500">
              {item.text}
            </span>
            ]
          </a>
        </DialogBody>
      ))}
    </Dialog>
  );
}
