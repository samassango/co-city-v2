import { combineReducers } from "redux";
import {
  Login,
  Reporting,
  Profile,
  PasswordReset,
  Signup,
  Notifications,
  NearByServices
} from "./src/reducer";

const Reducers = combineReducers({
  login: Login,
  signup: Signup,
  reporting: Reporting,
  profile: Profile,
  userReset: PasswordReset,
  notifications: Notifications,
  nearby: NearByServices
});

export default Reducers;
