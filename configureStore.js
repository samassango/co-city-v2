import { createStore } from "redux";
import Reducers from "./reducer";

const ConfigureStore = () => {
  const store = createStore(Reducers);
  return store;
};

export default ConfigureStore;
