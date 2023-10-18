import React, { createContext, useReducer } from "react";
import {
  INITIAL_STATE,
  notificationReducer,
} from "../reducer/NotificationReducer";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, INITIAL_STATE);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};
