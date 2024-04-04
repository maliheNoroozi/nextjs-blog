"use client";

import { useReducer, createContext, ReactNode, useContext } from "react";

interface NotificationState {
  id: string;
  message: string;
  type: "ERROR" | "SUCCESS";
}

type NotificationAction =
  | {
      type: ACTIONS.ADD_NOTIFICATION;
      payload: { notification: NotificationState };
    }
  | {
      type: ACTIONS.REMOVE_NOTIFICATION;
      payload: { id: string };
    };

interface NotificationProviderProps {
  children: ReactNode;
}

enum ACTIONS {
  ADD_NOTIFICATION = "add-notification",
  // ADD_NOTIFICATIONS = "add-notifications",
  REMOVE_NOTIFICATION = "remove-notification",
}

function reducer(
  notifications: NotificationState[],
  action: NotificationAction
): NotificationState[] {
  switch (action.type) {
    case ACTIONS.ADD_NOTIFICATION:
      const isNotificationExists = notifications.find(
        (notification) => notification.id === action.payload.notification.id
      );
      return isNotificationExists
        ? notifications
        : [...notifications, action.payload.notification];

    case ACTIONS.REMOVE_NOTIFICATION:
      return notifications.filter(
        (notification) => notification.id === action.payload.id
      );

    default:
      return notifications;
  }
}

const NotificationsContext = createContext<
  | {
      notifications: NotificationState[];
      addNotification: (notification: NotificationState) => void;
      removeNotification: (id: NotificationState["id"]) => void;
    }
  | undefined
>(undefined);

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [notifications, dispatch] = useReducer(reducer, []);

  const addNotification = (notification: NotificationState) => {
    dispatch({ type: ACTIONS.ADD_NOTIFICATION, payload: { notification } });
  };

  const removeNotification = (id: NotificationState["id"]) => {
    dispatch({ type: ACTIONS.REMOVE_NOTIFICATION, payload: { id } });
  };

  return (
    <NotificationsContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificatios = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("Something went wrong");
  }
  return context;
};
