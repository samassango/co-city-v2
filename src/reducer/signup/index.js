import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  user: null
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

    default:
      return state;
  }
};

export default Signup;
