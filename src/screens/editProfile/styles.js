const React = require("react-native");

const { Dimensions, Platform } = React;

const primary = require("../../utils/theme").brandPrimary;

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
  pickerLabel: {
    flex: 1,
    color: "#FFF",
    justifyContent: "flex-start",
    alignSelf: "center"
  },
  suburbPicker: {
    flex: 2,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "#fff"
  },
  picker: {
    flex: 0,
    flexDirection: "row",
    paddingLeft: 5,
    marginBottom: 10
  },
  rowHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: Platform.OS === "android" ? 0 : 0
  },
  btnHeader: {
    alignSelf: "center"
  },
  imageHeader: {
    height: 25,
    width: 95,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  profilePic: {
    width: 75,
    height: 75,
    borderRadius: Platform.OS === "android" ? 60 : 30
  },
  form: {
    flexDirection: "column"
  },
  formItem: {
    margin: 5
  },
  input: {
    color: "#000"
  },
  switch: {
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
    alignSelf: "flex-end",
    marginTop: Platform.OS === "android" ? -2 : -5,
    paddingTop: Platform.OS === "android" ? 25 : 10,
    paddingBottom: Platform.OS === "android" ? 0 : 10
  },
  pageTitle: {
    color: "#fff",
    fontSize: 18
  },
  cardContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  cardHeader: {
    backgroundColor: "#01cca1"
  },
  avatarContainer: {
    margin: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: Platform.OS === "android" ? 60 : 30
  },
  submitBtn: {
    flex: 1
  }
};
