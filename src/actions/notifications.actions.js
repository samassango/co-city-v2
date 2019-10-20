import { apiRequest, apiOneSignal } from "../utils/api";
import { getAbsoluteApiUrl } from "../utils/utilsHelper";
import { Notifications } from "expo";
import * as constants from "../constants";

export const loadNotificationsSuccess = payload => ({
  type: constants.LOAD_NOTIFICATIONS_REQUEST_SUCCESS,
  payload
});

export const loadNotificationsError = error => ({
  type: constants.LOAD_NOTIFICATIONS_REQUEST_ERROR,
  payload: error
});

export const loadNotificationsRequest = accessToken => dispatch => {
  let requestUrl = apiRequest.baseUrl + apiRequest.notifications;
  dispatch({
    type: constants.LOAD_NOTIFICATIONS_REQUEST_STARTED
  });
  try {
    return fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(loadNotificationsSuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadNotificationsError(error));
  }
};

export const loadNotificationDetailsSuccess = responseJson => ({
  type: constants.LOAD_NOTIFICATIONS_DETAIL_REQUEST_SUCCESS,
  payload: responseJson
});

export const loadNotificationDetailsError = error => ({
  type: constants.LOAD_NOTIFICATIONS_DETAIL_REQUEST_ERROR,
  payload: error
});

export const loadNotificationDetailsRequest = (
  accessToken,
  notificationId
) => dispatch => {
  let requestUrl = apiRequest.baseUrl + apiRequest.viewNotification;
  let requestSource = getAbsoluteApiUrl(requestUrl, {
    notificationId: notificationId
  });
  dispatch({
    type: constants.LOAD_NOTIFICATIONS_DETAIL_REQUEST_STARTED
  });

  try {
    return fetch(requestSource, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken
      }
    })
      .then(response => response.json())
      .then(responseJson =>
        dispatch(loadNotificationDetailsSuccess(responseJson))
      );
  } catch (error) {
    dispatch(loadNotificationDetailsError(error));
  }
};

export const loadPushNotificationSuccess = responseJson => ({
  type: constants.LOAD_PUSH_NOTIFICATION_REQUEST_SUCCESS,
  payload: responseJson
});

export const loadPushNotificationError = error => ({
  type: constants.LOAD_PUSH_NOTIFICATION_REQUEST_ERROR,
  payload: error
});

export const expoPushNotification = (title, message, username) => dispatch => {
  dispatch({ type: constants.LOAD_PUSH_NOTIFICATION_REQUEST });
  try {
    // Get the token that uniquely identifies this device
    let token = Notifications.getExpoPushTokenAsync();
    let PUSH_ENDPOINT = "https://exp.host/--/api/v2/push/send";
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    return fetch(PUSH_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: "ExponentPushToken[" + token + "]",
        title: title,
        body: message
      })
    })
      .then(res => res.json)
      .then(res => dispatch(loadPushNotificationSuccess(res)));
  } catch (error) {
    dispatch(loadPushNotificationError(error));
  }
};
