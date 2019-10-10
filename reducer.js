import { combineReducers } from "redux";
import {
  Login,
  Reporting,
  Profile,
  PasswordReset,
  Signup
} from "./src/reducer";

const Reducers = combineReducers({
  login: Login,
  signup: Signup,
  reporting: Reporting,
  profile: Profile,
  userReset: PasswordReset
});

export default Reducers;
