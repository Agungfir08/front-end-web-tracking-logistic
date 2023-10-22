import Lottie from "lottie-react";
import loadingTruck from "../../assets/Lottie/truck_loading.json";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

export default function LoadingTruck() {
  return (
    <div
      className=" fixed top-0 left-0 bg-black/40 flex justify-center items-center w-full h-full"
      style={{ zIndex: 10000 }}>
      <Lottie animationData={loadingTruck} style={{ height: 250 }} />
    </div>
  );
}
