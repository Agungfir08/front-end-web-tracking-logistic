import React, { createContext, useReducer } from "react";

export const NotificationContext = createContext();

const initialState = {
  notificationType: null,
  notificationText: null,
};

const notificationState = {
  SUCCESS: "success",
  ERROR: "error",
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        notificationType: notificationState.SUCCESS,
        notificationText: action.message,
      };
    case "ERROR":
      return {
        notificationType: notificationState.ERROR,
        notificationText: action.message,
      };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};
