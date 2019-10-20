import { apiRequest } from "../utils/api";
import * as constants from "../constants";

export const loadSignupSuccess = payload => ({
  type: constants.LOAD_SIGNUP_SUCCESS,
  payload
});
export const loadLogin = () => ({
  type: "LOAD_CLEAR_SIGNUP_REQUEST"
});

export const loadSignupError = error => ({
  type: constants.LOAD_SIGNUP_FAIL,
  payload: error
});

export const loadSignupRequest = params => dispatch => {
  let requestUrl = apiRequest.baseUrl + apiRequest.createUserAccount;
  dispatch({ type: constants.LOAD_SIGNUP_REQUEST });

  try {
    return fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(loadSignupSuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadSignupError(error));
  }
};

export const loadPasswordResetSuccess = payload => ({
  type: constants.LOAD_PASSWORD_RESET_REQUEST_SUCCESS,
  payload
});

export const loadPasswordResetError = error => ({
  type: constants.LOAD_PASSWORD_RESET_REQUEST_ERROR,
  payload: error
});

export const loadPasswordResetRequest = params => dispatch => {
  let requestUrl = apiRequest.baseUrl + apiRequest.passwortReset.resetWithEmail;

  try {
    return fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(loadPasswordResetSuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadPasswordResetError(error));
  }
};

export const loadListOfPlacesSuccess = payload => ({
  type: constants.LOAD_LIST_OF_PLACES_REQUEST_SUCCESS,
  payload
});

export const loadListOfPlacesError = error => ({
  type: constants.LOAD_LIST_OF_PLACES_REQUEST_ERROR,
  payload: error
});

export const loadListOfPlacesRequest = () => dispatch => {
  let requestUrl = apiRequest.baseUrl + apiRequest.suburbs;
  dispatch({ type: constants.LOAD_LIST_OF_PLACES_REQUEST });
  console.log(requestUrl);
  try {
    return fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("respo", responseJson);
        dispatch(loadListOfPlacesSuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadListOfPlacesError(error));
  }
};
