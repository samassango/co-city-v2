const React = require("react-native");

const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  text: {
    fontSize: 15,
    color: "#000",
    marginBottom: 10
  },
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
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
  rowHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: Platform.OS === "android" ? 0 : 0
  },
  btnHeader: {},
  pageTitle: {
    color: "#fff",
    fontSize: 18
  },
  card: {
    flex: 1,
    alignSelf: "center",
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10
  },
  cardHeader: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  articleTitle: {
    fontWeight: "bold"
  },
  articleDate: {
    flex: 1
  },
  touch: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  articleDetails: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  articleImage: {
    flex: 1,
    height: 200,
    width: null,
    marginBottom: 10
  },
  articleText: {
    flex: 1,
    marginTop: 10
  },
  footerText: {
    color: "#01cca1"
  }
};
