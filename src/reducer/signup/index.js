import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  user: null,
  suburbs: null,
  passwordResetObj: null
};

const Signup = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isLoaded: true
      };

    case constants.LOAD_SIGNUP_FAIL:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_LIST_OF_PLACES_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_LIST_OF_PLACES_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suburbs: payload,
        isLoaded: true
      };

    case constants.LOAD_LIST_OF_PLACES_REQUEST_ERROR:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_PASSWORD_RESET_REQUEST_SUCCESS:
      return { ...state, passwordReset: payload };

    case constants.LOAD_PASSWORD_RESET_REQUEST_ERROR:
      return { ...state, resetError: payload };
    default:
      return state;
  }
};

export default Signup;
