import { actionTypes } from "./NotificationActionTypes";

export const INITIAL_STATE = {
  notificationType: null,
  notificationText: null,
};

const notificationState = {
  SUCCESS: "success",
  ERROR: "error",
};

export const notificationReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS:
      return {
        notificationType: notificationState.SUCCESS,
        notificationText: action.message,
      };
    case actionTypes.ERROR:
      return {
        notificationType: notificationState.ERROR,
        notificationText: action.message,
      };
    case actionTypes.CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
