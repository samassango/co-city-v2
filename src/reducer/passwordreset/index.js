import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  currentUser: null
};

const PasswordReset = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_PASSWORD_RESET_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
        isLoaded: true
      };

    case constants.LOAD_SIGNUP_FAIL:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

export default PasswordReset;
