import { apiRequest } from "../utils/api";
import { getAbsoluteApiUrl } from "../utils/utilsHelper";
import Expo, { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { registerForPushNotificationsAsync } from "../utils/notificationConfig";
import * as constants from "../constants";

export const loadProfileSuccess = responseJson => ({
  type: constants.LOAD_PROFILE_REQUEST_SUCCESS,
  payload: responseJson
});

export const loadProfileError = error => ({
  type: constants.LOAD_PROFILE_REQUEST_ERROR,
  payload: error
});
export const registerDevice = async () => {
  registerForPushNotificationsAsync();
  //  console.log("token44>>", token);
  let deviceToken = await Notifications.getExpoPushTokenAsync();
  return { type: constants.LOAD_DEVICE_TOKEN, deviceToken };
};
export const loadProfileDeviceUpdateRequest = (
  accessToken,
  userId,
  deviceToken
) => dispatch => {
  let requestApi =
    apiRequest.sercviceBaseUrl +
    "/TshwaneUsers/" +
    userId +
    "?access_token=" +
    accessToken;
  try {
    params = {
      deviceid: deviceToken
    };
    return fetch(requestApi, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('updateDevice',responseJson)
        dispatch(loadProfileSuccess(responseJson));
      });
  } catch (error) {
    // console.log("ProfileError:>>>>", error);
    dispatch(loadProfileError(error));
  }
};

export const loadProfileRequest = (accessToken, userId) => dispatch => {
  let requestUrl = apiRequest.sercviceBaseUrl + apiRequest.authenticate.profile;
  let sourceRequestUrl =
    getAbsoluteApiUrl(requestUrl, { id: userId }) +
    "?access_token=" +
    accessToken;
  try {
    //console.log("sourceRequestUrl",sourceRequestUrl)
    //console.log("accessToken",accessToken)
    return fetch(sourceRequestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        //console.log('Profile',responseJson)
        //_updateUserDeviceId

        dispatch(loadProfileSuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadProfileError(error));
  }
};

export const loadProfileUpdateSuccess = responseJson => ({
  type: constants.LOAD_PROFILE_UPDATE_REQUEST_SUCCESS,
  payload: responseJson
});
export const loadProfileUpdateError = error => ({
  type: constants.LOAD_PROFILE_UPDATE_REQUEST_ERROR,
  payload: error
});

export const loadProfileUpdateRequest = (accessToken, params) => dispatch => {
  let requestUrl = apiRequest.sercviceBaseUrl + apiRequest.authenticate.profile;
  let sourceRequestUrl =
    getAbsoluteApiUrl(requestUrl, { id: params.userId }) +
    "?access_token=" +
    accessToken;
  try {
    return fetch(sourceRequestUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        //  console.log('ProfileUpdates',responseJson)

        dispatch(loadProfileUpdateSuccess(responseJson));
      });
  } catch (error) {
    console.log("Error>>", error);
    dispatch(loadProfileUpdateError(error));
  }
};

export const _updateUserDeviceId = (
  userId,
  accessToken,
  diviceId
) => dispatch => {
  let requestApi =
    apiRequest.sercviceBaseUrl +
    "/TshwaneUsers/" +
    userId +
    "?access_token=" +
    accessToken;
  //console.log("requestApi",requestApi)
  try {
    params = {
      deviceid: diviceId
    };
    return fetch(requestApi, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log('updateDevice',responseJson)

        dispatch(loadUpdateUserDeviceIdSuccess());
      });
  } catch (error) {
    dispatch(loadUpdateUserDeviceIdError(error));
  }
};

export const loadListOfPlacesSuccess = responseJson => ({
  type: constants.LOAD_LIST_OF_PLACES_PROFILE_REQUEST_SUCCESS,
  payload: responseJson
});

export const loadListOfPlacesError = error => ({
  type: constants.LOAD_LIST_OF_PLACES_PROFILE_REQUEST_ERROR,
  payload: error
});

export const loadListOfPlacesRequest = () => dispatch => {
  let requestUrl = apiRequest.sercviceBaseUrl + apiRequest.suburbs;
  try {
    return fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => dispatch(loadListOfPlacesSuccess(responseJson)));
  } catch (error) {
    dispatch(loadListOfPlacesError(error));
  }
};

export const loadPasswordSuccess = responseJson => ({
  type: constants.LOAD_PASSWORD_PROFILE_REQUEST_SUCCESS,
  payload: responseJson
});

export const loadPasswordError = error => ({
  type: constants.LOAD_PASSWORD_PROFILE_REQUEST_ERROR,
  payload: error
});

export const loadProfilePasswordResetRequest = (
  accessToken,
  params
) => dispatch => {
  let requestUrl = apiRequest.sercviceBaseUrl + apiRequest.authenticate.profile;
  let sourceRequestUrl =
    getAbsoluteApiUrl(requestUrl, { id: params.userId }) +
    "?access_token=" +
    accessToken;

  try {
    return fetch(sourceRequestUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(loadPasswordSuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadPasswordError(error));
  }
};
