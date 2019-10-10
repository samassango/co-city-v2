import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
export default class NearBy extends React.Component {
  render() {
    return <MapView style={{ flex: 1 }} />;
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
