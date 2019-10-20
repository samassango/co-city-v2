import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  googlePlaces: null,
  googleDirection: null
};

const NearByServices = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_GOOGLE_PLACES_REQUEST_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case constants.LOAD_GOOGLE_PLACES_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        googlePlaces: payload,
        isLoaded: true
      };
    case constants.LOAD_GOOGLE_PLACES_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_GOOGLE_DIRECTION_REQUEST_STARTED:
      return { ...state, isLoading: true };
    case constants.LOAD_GOOGLE_DIRECTION_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        googleDirection: payload,
        isLoaded: true
      };
    case constants.LOAD_GOOGLE_DIRECTION_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export default NearByServices;
