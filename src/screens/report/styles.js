const React = require("react-native");
const { Dimensions, Platform } = React;

const primary = "#01cca1";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    flexDirection: "column"
  },
  bgHead: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    marginTop: Platform.OS === "android" ? -20 : -3,
    marginBottom: 15
  },
  imageHeader: {
    height: 30,
    width: 100,
    resizeMode: "contain"
  },
  channelBtn1: {
    borderWidth: 1,
    borderColor: Platform.OS === "android" ? "#ddd" : "rgba(255,255,255,0.5)"
  },
  na: {},
  channelImg: {
    flex: 1,
    height: deviceHeight / 5 + 10,
    width: deviceWidth / 2 - 20,
    padding: 5,
    //    margin: 20,
    alignItems: "center",
    justifyContent: "space-around"
  },
  ioschannelImgText: {
    fontSize: 12,
    fontWeight: "900",
    padding: 20,
    paddingLeft: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginLeft: 20,
    marginTop: deviceHeight / 6 + 10
  },
  achannelImgText: {
    fontSize: 12,
    fontWeight: "900",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: deviceHeight / 4 - 20
  },
  contentChannel: {
    padding: 20
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
  categories: {
    flex: 1,
    color: "#000"
  },
  pageTitle: {
    color: "#FFF",
    fontSize: 18
  }
};
