import { StyleSheet, Dimensions, Platform } from "react-native";

const deviceHeight = Dimensions.get("window").height;
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
  pageTitle: {
    color: "#fff",
    fontSize: 18
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 7
  },
  cardHeader: {
    flexDirection: "row"
  },
  cardHeaderLeft: {
    flex: 1,
    alignSelf: "flex-start",
    marginLeft: -15
  },
  cardHeaderBody: {
    flex: 3,
    justifyContent: "center",
    paddingLeft: 15
  },
  btnsContainer: {
    flexDirection: "row"
  },
  pickerLabel: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "center"
  },
  pickerBtn: {
    flex: 1,
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#01cca1"
  },
  attachment: {
    flex: 1,
    flexDirection: "column"
  },
  input: {
    flex: 1,
    height: 70,
    padding: 10
  },
  sceneCheck: {
    flexDirection: "row"
  },
  sceneLabel: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "center",
    left: -7
  },
  submitBtn: {
    flex: 1
  },
  imageBtn: {
    flex: 1
  },
  btnTxt: {
    color: "#fff"
  },
  attImage: {
    flex: 1,
    alignSelf: "center",
    marginTop: 15,
    width: 320,
    height: 200
  },
  avatar: {
    width: 95,
    height: 95,
    borderRadius: Platform.OS === "android" ? 60 : 30
  }
};
