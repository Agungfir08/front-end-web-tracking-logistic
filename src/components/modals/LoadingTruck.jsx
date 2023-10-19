import Lottie from "lottie-react";
import loadingTruck from "../../assets/Lottie/truck.json";
export default function LoadingTruck() {
  return (
    <div className=" fixed top-0 left-0 z-20 bg-black/40 flex justify-center items-center w-full h-full">
      <div className="bg-white rounded-full">
        <Lottie animationData={loadingTruck} style={{ height: 250 }} />
      </div>
    </div>
  );
}
