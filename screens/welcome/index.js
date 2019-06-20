import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
        <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
