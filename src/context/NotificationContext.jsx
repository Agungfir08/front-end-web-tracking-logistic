import { createContext, useState } from "react";

export const NotificationContext = createContext({
  notification: null,
  notificationText: null,
  success: () => {},
  error: () => {},
});

const state = {
  SUCCESS: "success",
  ERROR: "error",
};

const NotificationContextProvider = ({ children }) => {
  const [notificationText, setNotificationText] = useState(null);
  const [notification, setNotification] = useState(null);

  const success = (message) => {
    setNotificationText(message);
    setNotification(state.SUCCESS);
  };

  const error = (message) => {
    setNotificationText(message);
    setNotification(state.ERROR);
  };

  const clear = () => {
    setNotificationText(null);
    setNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{ success, error, clear, notification, notificationText }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
