import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  profile: null
};

const Profile = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload,
        isLoaded: true
      };

    case constants.LOAD_PROFILE_FAIL:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

export default Profile;
