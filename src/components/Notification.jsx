import { useCallback, useContext, useEffect } from "react";
import { FAILED, SUCCESS } from "./Icon";
import { NotificationContext } from "../context/NotificationContext";
import { actionTypes } from "../reducer/NotificationActionTypes";

export default function Notification() {
  const { state, dispatch } = useContext(NotificationContext);

  const clearNotification = useCallback(() => {
    if (state.notificationType) {
      setTimeout(() => {
        dispatch({ type: actionTypes.CLEAR });
      }, 3500);
    }
  }, [state]);

  useEffect(() => {
    clearNotification();
  }, [clearNotification]);

  console.log(state);
  return (
    <>
      {state.notificationType !== null && (
        <div
          className={`fixed top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black w-fit py-3 sm:py-2.5 px-8 rounded-full flex justify-center gap-2 items-center animate-notifAnimation`}
          style={{ zIndex: 10000 }}>
          {state.notificationType === "success" ? <SUCCESS /> : <FAILED />}
          <p className=" text-lg sm:text-sm sm:whitespace-nowrap">
            {state.notificationText}
          </p>
        </div>
      )}
    </>
  );
}
