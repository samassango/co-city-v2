import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  profile: null,
  suburbs: null,
  ps_profile: null
};

const Profile = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload,
        isLoaded: true
      };

    case constants.LOAD_PROFILE_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_PROFILE_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_PROFILE_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload,
        isLoaded: true
      };

    case constants.LOAD_PROFILE_UPDATE_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_LIST_OF_PLACES_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_LIST_OF_PLACES_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suburbs: payload,
        isLoaded: true
      };

    case constants.LOAD_LIST_OF_PLACES_PROFILE_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_PASSWORD_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_PASSWORD_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ps_profile: payload,
        isLoaded: true
      };

    case constants.LOAD_PASSWORD_PROFILE_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

export default Profile;
