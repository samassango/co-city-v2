import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import AppContainer from "./AppNavigator";
import ConfigureStore from "./configureStore";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    //const store = ConfigureStore();
    return (
      // <Provider store={store}>
      <AppContainer />
      // </Provider>
    );
  }
}
