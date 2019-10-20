import * as constants from "../constants";
import { saveData, removeData } from "../utils";
import { apiRequest } from "../utils/api";

const loginAction = (username, password) => ({
  type: constants.LOAD_LOGIN_REQUEST,
  payload: { username, password }
});

const loginSuccessAction = response => ({
  type: constants.LOAD_LOGIN_SUCCESS,
  payload: response
});

const loginFailAction = response => ({
  type: constants.LOAD_LOGIN_SUCCESS,
  payload: response
});
// This function for logging user.
export const authenticateUser = (username, password) => dispatch => {
  dispatch(loginAction(username, password));

  return fetch(apiRequest.baseUrl + apiRequest.user.login, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res && !!res.userId) {
        saveData("currentUser", res);
        dispatch(loginSuccessAction(res));
      } else {
        dispatch(loginFailAction(res));
      }
    })
    .catch(err => dispatch(loginFailAction(err)));
};

const loadLogoutRequest = () => ({ type: constants.LOAD_USER_LOGOUT_REQUEST });
const loadLogoutSuccess = success => ({
  type: constants.LOAD_USER_LOGOUT_SUCCESS,
  payload: success
});
const loadLogoutError = err => ({
  type: constants.LOAD_USER_LOGOUT_FAIL,
  payload: err
});
// This function is for loging the user out.
export const logoutUser = accessToken => dispatch => {
  let requestUrl =
    apiRequest.baseUrl +
    apiRequest.authenticate.logout +
    "?access_token=" +
    accessToken;
  dispatch(loadLogoutRequest());
  return fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(res => {
      removeData("currentUser");
      dispatch(loadLogoutSuccess(res));
    })
    .catch(err => dispatch(loadLogoutError(err)));
};
