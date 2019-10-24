import { combineReducers } from "redux";
import {
  Login,
  Reporting,
  Profile,
  PasswordReset,
  Signup,
  Notifications,
  NearByServices,
  Histories
} from "./src/reducer";

const Reducers = combineReducers({
  login: Login,
  signup: Signup,
  reporting: Reporting,
  profile: Profile,
  userReset: PasswordReset,
  notifications: Notifications,
  nearby: NearByServices,
  histories: Histories
});

export default Reducers;
