const React = require("react-native");

const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const primary = require("../../utils/theme").brandPrimary;

export default {
  formContainer: {
    margin: 10
  },
  signupContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:
      deviceWidth < 330
        ? Platform.OS === "android"
          ? deviceHeight / 9 - 10
          : deviceHeight / 9 - 10
        : Platform.OS === "android"
        ? deviceHeight / 7 - 10
        : deviceHeight / 5 - 10
  },
  signupHeader: {
    alignSelf: "center",
    fontSize: 22,
    padding: 10,
    fontWeight: "bold",
    color: "#FFF"
    //    marginTop: Platform.OS === 'android' ? (deviceHeight / 4) : ((deviceHeight / 6) + 10),
  },
  signupInstruction: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#FFF"
  },
  inputContainer: {
    marginTop: 30
  },
  icon: {
    color: "#FFF"
  },
  picker: {
    flex: 0,
    flexDirection: "row",
    paddingLeft: 5,
    marginBottom: 10
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
  btnContainer: {
    flex: 1,
    padding: 15
  },
  formItem: {
    marginBottom: 8
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary
  },
  inputGrp: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    borderWidth: 0,
    borderColor: "transparent"
  },
  input: {
    paddingLeft: 10,
    color: "#FFF"
  },
  termsButton: {
    marginTop: 10,
    marginBottom: 20
  },
  termsText: {
    alignSelf: "center",
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#EFF"
  },
  backToLogin: {
    margin: 10
  }
};
