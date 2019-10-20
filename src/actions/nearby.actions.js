import {
  apiRequest,
  googleApiRequest,
  googleApiDirectionsRequest
} from "../utils/api";
import * as constants from "../constants";

export const loadGooglePlacesSuccess = responseJson => {
  return {
    type: constants.LOAD_GOOGLE_PLACES_REQUEST_SUCCESS,
    payload: responseJson
  };
};

export const loadGooglePlacesError = error => {
  return {
    type: constants.LOAD_GOOGLE_PLACES_REQUEST_ERROR,
    patyload: error
  };
};

export const loadGooglePlaceStarted = () => {
  return { type: constants.LOAD_GOOGLE_PLACES_REQUEST_STARTED };
};

export const loadGooglePlacesRequest = (
  lat,
  lon,
  type,
  radius,
  keyword
) => dispatch => {
  dispatch(loadGooglePlaceStarted());
  let googleRequestUrl = googleApiRequest(lat, lon, type, radius, keyword);

  console.log("googlePlacesRequestUrl", googleRequestUrl);
  try {
    return fetch(googleRequestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(loadGooglePlacesSuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadGooglePlacesError(error));
  }
};

export const loadGoogleDirectionSuccess = responseJson => {
  return {
    type: constants.LOAD_GOOGLE_DIRECTION_REQUEST_SUCCESS,
    responseJson
  };
};

export const loadGoogleDirectionError = error => {
  return {
    type: constants.LOAD_GOOGLE_DIRECTION_REQUEST_ERROR,
    error
  };
};

export const loadGoogleDirectionStarted = () => {
  return { type: constants.LOAD_GOOGLE_DIRECTION_REQUEST_STARTED };
};

export const loadGoogleDirectionRequest = (
  currentVicinity,
  destinationVicinity
) => dispatch => {
  dispatch(loadGoogleDirectionStarted());
  let googleRequestUrl = googleApiDirectionsRequest(
    currentVicinity,
    destinationVicinity
  );

  try {
    return fetch(googleRequestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(loadGoogleDirectionSuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadGoogleDirectionError(error));
  }
};
