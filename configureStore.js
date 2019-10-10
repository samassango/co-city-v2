import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import devTools from "remote-redux-devtools";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

import Reducers from "./reducer";

const ConfigureStore = () => {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: "cocity",
      realtime: true
    })
  );

  const store = createStore(
    persistReducer({ key: "root", storage: AsyncStorage }, Reducers),
    enhancer
  );
  persistStore(store);

  return store;
};

export default ConfigureStore;
