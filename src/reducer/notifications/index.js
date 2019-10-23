import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  notifications: null,
  notificationData: null,
  pushData: null
};

const Notifications = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_NOTIFICATIONS_REQUEST_STARTED:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_NOTIFICATIONS_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notifications: payload,
        isLoaded: true
      };

    case constants.LOAD_NOTIFICATIONS_REQUEST_FAIL:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_NOTIFICATIONS_DETAIL_REQUEST_STARTED:
      return { ...state, isLoading: true };

    case constants.LOAD_NOTIFICATIONS_DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notificationData: payload,
        isLoaded: true
      };

    case constants.LOAD_NOTIFICATIONS_DETAIL_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_PUSH_NOTIFICATION_REQUEST:
      return { ...state, isLoading: true };
    case constants.LOAD_PUSH_NOTIFICATION_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pushData: payload,
        isLoaded: true
      };
    case constants.LOAD_PUSH_NOTIFICATION_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export default Notifications;
