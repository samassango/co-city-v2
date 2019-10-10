import * as constants from "../../constants";

const initialState = {
  username: null,
  password: null,
  isLoading: false,
  isLoaded: false,
  loginError: null,
  currentUser: null
};

const Login = (state = initialState, { type, payload } = actions) => {
  console.log(type);
  console.log(payload);
  switch (type) {
    case constants.LOAD_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        username: payload.username,
        password: payload.password
      };

    case constants.LOAD_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
        isLoaded: true
      };

    case constants.LOAD_LOGIN_FAIL:
      return { ...state, isLoading: false, loginError: payload };

    default:
      return state;
  }
};

export default Login;
