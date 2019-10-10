import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  report: null
};

const Reporting = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        report: payload,
        isLoaded: true
      };

    case constants.LOAD_LOGIN_FAIL:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

export default Reporting;
