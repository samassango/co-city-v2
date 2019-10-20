const React = require("react-native");

const { Dimensions } = React;

const primary = require("../../utils/theme").brandPrimary;

const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  header: {
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
  overviewHeaderContainer: {
    padding: 20,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: primary
  },
  overviewHeader: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "900",
    alignSelf: "center"
  },
  overviewHead: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#FFF"
  },
  overviewContent: {
    padding: 20,
    backgroundColor: primary
  },
  overviewTopicsBox: {
    paddingBottom: 20
  },
  overviewInfoHeader: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "900"
  },
  overviewInfoPerc: {
    alignSelf: "flex-end",
    fontSize: 14,
    fontWeight: "900"
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  pageTitle: {
    color: "#fff",
    fontSize: 18
  },
  roundedCustomButton: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 60,
    height: 60
  },
  cardContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
};
