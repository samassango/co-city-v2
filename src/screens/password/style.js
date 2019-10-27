const React = require("react-native");

const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const primary = require("../../utils/theme").brandPrimary;

export default {
  signupContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:
      Platform.OS === "android" ? deviceHeight / 4 : deviceHeight / 4 - 20
  },
  signupHeader: {
    alignSelf: "center",
    fontSize: 22,
    padding: 10,
    fontWeight: "bold",
    color: "#FFF",
    marginTop:
      Platform.OS === "android" ? deviceHeight / 5 : deviceHeight / 3 + 10
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  inputGrp: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.2)",
    marginBottom: 20,
    borderWidth: 0,
    borderColor: "transparent"
  },
  input: {
    paddingLeft: 10,
    color: "#FFF"
  },
  signupBtn: {
    alignItems: "center",
    color: "white",
    backgroundColor: "#043F77"
  },
  termsText: {
    alignSelf: "center",
    marginTop: 20,
    paddingBottom: 100,
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#EFF"
  },
  emailInput: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderWidth: 0,
    borderColor: "transparent",
    marginBottom: 20
  },
  inputIcon: {
    color: "#FFF"
  },
  resetInstruction: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#FFF"
  }
};
