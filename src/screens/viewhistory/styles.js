const React = require("react-native");

const { Platform, Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const primary = require("../../utils/theme").brandPrimary;

export default {
  container: {
    width: null,
    height: null,
    flex: 1
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
  headerContainer: {
    marginTop: Platform.OS === "android" ? -5 : undefined,
    marginLeft: Platform.OS === "android" ? -5 : undefined
  },
  commentHeadbg: {
    flex: 1
  },
  caseHistory: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  card: {
    flex: 0,
    backgroundColor: "#fff",
    margin: 20
  },
  sectOne: {
    flexDirection: "column"
  },
  category: {
    fontSize: 18
  },
  status: {
    color: "#01cca1"
  },
  dateNote: {
    color: "#555"
  },
  deleteBtn: {
    flex: 1
  },
  statusLog: {
    flex: 1
  },
  logTime: {
    color: "#666666"
  },
  logStatus: {
    color: "#666666"
  },
  cardHeader: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    paddingBottom: 10
  },
  cardItem: {
    backgroundColor: "transparent",
    paddingTop: 5,
    paddingLeft: 50,
    alignSelf: "center",
    alignItems: "center"
  },
  cardItemHeader: {
    backgroundColor: "#40bf80",
    paddingTop: 5,
    paddingLeft: 50
  },
  timeIcon: {
    fontSize: 16,
    color: "#666",
    width: null
  },
  date: {
    fontWeight: "300",
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
    paddingLeft: 5,
    paddingRight: 10
  },
  likeIcon: {
    fontSize: 16,
    color: "#666",
    width: null
  },
  commentBox: {
    backgroundColor: "#EEE",
    alignItems: "center",
    paddingLeft: 10
  },
  attachIconContainer: {
    padding: 10
    // paddingTop: 10
  },
  attachIcon: {
    color: "#797979",
    fontSize: 27
  },
  input: {
    color: "#222"
  },
  arrowForwardIcon: {
    color: primary
  },
  arrowForwardIconContainer: {
    paddingTop: 5
  },
  cmtName: {
    fontSize: deviceWidth < 330 ? 15 : 17,
    color: "#000",
    paddingLeft: 10
  },
  pageTitle: {
    color: "#fff",
    fontSize: 18
  },
  btnTxt: {
    color: "#FFF",
    fontSize: 16
  },
  headerIcons: {
    color: "#FFF",
    fontSize: 30
  }
};
