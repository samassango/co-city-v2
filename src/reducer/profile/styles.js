const React = require("react-native");

const { Platform, Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const primary = require("../../utils/theme").brandPrimary;
const deviceHeight = Dimensions.get("window").height;

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
  profileInfoContainer: {
    backgroundColor: primary,
    paddingTop: 10
  },
  profileUser: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 5
  },
  profileUserInfo: {
    alignSelf: "center",
    opacity: 0.8,
    fontWeight: "bold",
    color: "#FFF"
  },
  profilePic: {
    alignSelf: "center"
  },
  profileInfo: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 10
  },
  linkTabs: {
    backgroundColor: "#fff"
  },
  linkTabs_header: {
    padding: 15,
    alignSelf: "center"
  },
  linkTabs_tabCounts: {
    fontSize: 22,
    fontWeight: "bold",
    color: primary,
    alignSelf: "center",
    paddingBottom: Platform.OS === "android" ? 3 : 0
  },
  linkTabs_tabName: {
    color: "#444",
    fontWeight: "bold",
    fontSize: deviceWidth < 330 ? 13 : 15
  },
  newsImage: {
    width: 100,
    height: 120
  },
  newsContent: {
    flexDirection: "column",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  newsHeader: {
    color: "#444",
    fontWeight: "bold"
  },
  newsLink: {
    color: "#666",
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  newsTypeView: {
    borderBottomWidth: 1,
    borderBottomColor: "#666",
    alignSelf: "flex-end"
  },
  newsTypeText: {
    color: "#666",
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 5
  },
  arrowForwardIcon: {
    color: primary
  },
  attachIcon: {
    color: "#797979",
    fontSize: 27
  },
  btnEditProfile: {
    backgroundColor: "#EEE",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  modal: {
    backgroundColor: primary,
    position: "absolute",
    width: deviceWidth,
    height: null
  },
  modalContentBox: {
    borderBottomWidth: 1,
    borderBottomColor:
      Platform.OS === "android" ? "#fff" : "rgba(255,255,255,0.5)"
  },
  modalSmallText: {
    alignSelf: "flex-start",
    fontWeight: "700"
  },
  pageTitle: {
    color: "#fff",
    fontSize: 18
  },
  profileContainer: {
    marginTop: 12,
    marginRight: 10,
    marginLeft: 10
  },
  userName: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
  contactsDetails: {
    flexDirection: "column"
  },
  contactNumber: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  emailAddress: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  btnContainer: {
    flexDirection: "column"
  },
  buttonOne: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  butttonTwo: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  btnTxt: {
    color: "#FFF"
  },
  helpBtns: {
    backgroundColor: "#01cca1",
    color: "#FFF"
  },
  modalLargeText: {
    alignSelf: "flex-end",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 28
    // paddingBottom: Platform.OS === 'android' ? 10 : 0,
    // marginTop: Platform.OS === 'android' ? -10 : 0
  },
  nightButton: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 30,
    width: 60,
    height: 60
  },
  dayButton: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 60,
    height: 60
  }
};
