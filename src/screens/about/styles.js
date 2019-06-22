const React = require("react-native");

const { Dimensions, Platform } = React;

export default {
  header: {
    width: Dimensions.get("window").width,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: Platform.OS === "ios" ? undefined : -30
  },
  headerColor: {
    flexDirection: "row",
    backgroundColor: "#01cca1"
  },
  headerLeft: {
    flex: 1
  },
  headerBody: {
    flex: 3
  },
  headerRight: {
    flex: 1
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  cardContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  card: {
    marginBottom: 10
  },
  pageTitle: {
    color: "#fff",
    fontSize: 18
  }
};
