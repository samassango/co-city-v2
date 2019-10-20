import React from "react";
import {
  Image,
  View,
  Platform,
  Alert,
  AsyncStorage,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Item,
  Input,
  Picker,
  CheckBox,
  Label,
  Card,
  CardItem,
  Thumbnail,
  Spinner
} from "native-base";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";

const primary = require("../../utils/theme").brandPrimary;

import styles from "./styles";
import * as reportingAction from "../../actions/reporting.actions";
import * as reportAction from "../../actions/report.action";
import * as sqliteHelper from "../../utils/sqliteHelper";

class ReportingIncident extends React.Component {
  state = {
    showToast: false,
    accessToken: this.props.currentUser.id,
    selectedType: "key1323",
    incidentTypes: [],
    image: null,
    imageBase64: null,
    description: null,
    descriptionError: null,
    subCategoryId: null,
    longitude: "",
    latitude: "",
    cantactNo: null,
    cantactNoError: null,
    errorMessage: "",
    locationState: true,
    jsonLocation: null,
    strAddress: null,
    strAddressError: null,
    reportedBy: null,
    capturedBy: "user",
    reportedByError: "",
    isReportIncidents: false,
    successReport: false,
    tshwaneUserId: null
  };

  componentWillMount() {
    this.setState({
      accessToken: this.props.currentUser.id,
      tshwaneUserId: this.props.currentUser.userId
    });
    //creating history table if it doesnt exist
    //createTBLHistory(sqLiteDataSorce);

    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      console.log("Yoh yoh yoh I can see the data");
      this._getLocationAsync();
    }
  }

  componentDidMount() {
    const category = this.props.navigation.getParam("params", null);

    sqliteHelper.createTBLStatusLog(sqliteHelper.sqLiteDataSorce);

    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      console.log("Yoh yoh yoh I can see the data");
      this._getLocationAsync();
    }
    //console.log("this.props.profile.profile",this.props.profile.profile)
    let profileObject = this.props.profile.profile;
    this.setState({
      reportedBy:
        profileObject !== null && profileObject !== undefined
          ? profileObject.fulname
          : "",
      cantactNo:
        profileObject !== null && profileObject !== undefined
          ? profileObject.mobileno
          : ""
    });
    const categoryId = category.categoryId;
    this.props.loadCategoriesTypeRequest(categoryId);
  }

  componentWillReceiveProps(nextProps) {
    const { categoryTypes } = nextProps;

    if (!!categoryTypes) {
      this.setState({
        selectedType: categoryTypes[0].subCategoryId,
        subCategoryId: categoryTypes[0].subCategoryId,
        incidentTypes: categoryTypes
      });
    }

    if (!!this.state.strAddress) {
      if (this.state.strAddress.length > 3) {
        this._getLocationByAddressAsync();
      }
    }
  }

  _reverseGeoLocationAsync = async (location = null) => {
    if (location !== null) {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        this.setState({
          errorMessage: "Permission to access location was denied"
        });
      } else {
        let address = await Location.reverseGeocodeAsync(location);
        console.log("address", address);
        this.setState({ strAddress: this._addressFormat(address) });
      }
    }
  };

  _addressFormat = address => {
    let objectAddress = address[0];

    let stringAddress =
      (objectAddress.name !== null ? objectAddress.name + ", " : "") +
      (objectAddress.street !== null ? objectAddress.street + ", " : "") +
      (objectAddress.city !== null ? objectAddress.city + ", " : "") +
      (objectAddress.country !== null ? objectAddress.country : "");

    return stringAddress;
  };

  onValueChange(value) {
    console.log("value", value);
    this.setState({
      selectedType: value
    });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
      exif: true
    });
    //console.log("result",result);

    if (!result.cancelled) {
      let imageFileExtention = result.uri.substr(
        result.uri.length - 3,
        result.uri.length
      );
      // console.log('imageFileExtention ',imageFileExtention)
      this.setState({
        image: result.uri,
        imageBase64:
          "data:image/" + imageFileExtention + ";base64," + result.base64
      });
    }
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    let jsonLocation = location;
    // console.log("jsonLocation11",location);

    this.setState({
      longitude: jsonLocation.coords.longitude,
      latitude: jsonLocation.coords.latitude,
      jsonLocation: jsonLocation
    });

    this._reverseGeoLocationAsync({
      longitude: jsonLocation.coords.longitude,
      latitude: jsonLocation.coords.latitude
    });
  };

  _getLocationByAddressAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.geocodeAsync(this.state.strAddress);
    let jsonLocation = location;
    console.log("jsonLocationByAddress", location);
    if (jsonLocation !== undefined) {
      this.setState({
        longitude: jsonLocation.coords.longitude,
        latitude: jsonLocation.coords.latitude,
        jsonLocation
      });
    }
  };
  _clearInputsForm() {
    let profileObject = this.props.profile.profile;
    this.setState({
      anonymous: false,
      showToast: false,
      accessToken: this.props.currentUser.id,
      selectedType: "key1323",
      incidentTypes: [],
      image: null,
      imageBase64: null,
      description: null,
      descriptionError: null,
      subCategoryId: null,
      longitude: "",
      latitude: "",
      cantactNo: profileObject.mobileno,
      cantactNoError: null,
      errorMessage: "",
      locationState: true,
      jsonLocation: null,
      strAddress: null,
      strAddressError: null,
      reportedBy: profileObject.fullname,
      capturedBy: "user",
      reportedByError: "",
      isReportIncidents: false,
      successReport: false,
      historiesArray: [],
      tshwaneUserId: null
    });
    if (!!this.props.report) {
      Alert.alert(
        "Successfully reported",
        "Thank you for Reporting.\nPlease Check report progress in case history.",
        [
          {
            text: "OK",
            onPress: () => this.props.navigation.navigate("IncidentReport")
          }
        ],
        { cancelable: false }
      );
    }
  }
  _postIncidentReport() {
    const category = this.props.navigation.getParam("params", null);

    if (this.state.latitude === "" && this.state.longitude === "")
      if (Platform.OS === "android" && !Constants.isDevice) {
        this.setState({
          errorMessage:
            "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
        });
      } else {
        console.log("Yoh yoh yoh I can see the data");
        this._getLocationAsync();
      }

    this.setState({ isReportIncidents: true, successReport: true });
    let profileObject = this.props.profile.profile;

    if (profileObject !== null) {
      let accessToken = this.state.accessToken;
      let params = {
        region: "599d61b07ceaa900113bbaa8",
        channel: "5981c1bada29000011ee94bc",
        category: category.categoryId,
        subCategory: this.state.selectedType,
        description:
          this.state.description !== null && this.state.description !== ""
            ? this.state.description
            : "No description",
        status: "593c39de022c4aca8604e150",
        deviceId: profileObject.deviceid,
        location: this.state.strAddress,
        lat: this.state.latitude,
        lot: this.state.longitude,
        mobileno: profileObject.mobileno,
        reportedBy: profileObject.fullname,
        capturedBy: "mobile user",
        tshwaneUserId: profileObject.id
      };
      if (this.state.imageBase64 !== null) {
        Object.assign(params, {
          images: {
            imageString: this.state.imageBase64
          }
        });
      }
      if (this._validateInputsFields()) {
        console.log("params", params);
        this.props.reportIncidents(params, accessToken);
        return this._clearInputsForm();
      }
    } else {
      Alert.alert(
        "Connection: Error",
        "Please check your internet connection",
        [
          {
            text: "OK",
            onPress: () => this.props.navigation.navigate("IncidentReport")
          }
        ],
        { cancelable: false }
      );
    }
  }
  _validateInputsFields() {
    let _isValidInputs = false;
    if (!this.state.description) {
      this.setState({ isReportIncidents: false });
      Alert.alert(
        "Error",
        "Please specify incident details.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      if (
        this.state.locationState === false &&
        this.state.strAddress === null
      ) {
        this.setState({ isReportIncidents: false });

        Alert.alert(
          "Error",
          "Please specify incident location.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      } else {
        _isValidInputs = true;
      }
    }
    return _isValidInputs;
  }
  _onChangeLocationState() {
    // this._getLocationAsync();
    let isChecked = this.state.locationState ? false : true;
    console.log("is check againS", isChecked);
    this.setState({ locationState: isChecked });
  }
  _onChangeAnonymousState() {
    let isChecked = this.state.anonymous ? false : true;
    this.setState({ anonymous: isChecked });
  }

  async _updateAsyncStorage() {
    await AsyncStorage.getItem("HISTORIES_KEY").then(currentHistories => {
      let results = this.props.report.reportResponse;
      let params = {
        refNumber: results.refNumber,
        notes: results.description,
        status: "New",
        datecaptured: results.reportedOn,
        incidentsId: results.id
      };

      console.log("currentHistories", currentHistories);
      if (currentHistories !== null && currentHistories !== undefined) {
        let histories = currentHistories;

        histories.concat(params);
        console.log("histories>>>>", histories);
        this.setState({ historiesArray: histories });
      } else {
        let histories = [];
        histories.push(params);
        console.log("histories", histories);
        this.setState({ historiesArray: histories });
      }
    });
    await AsyncStorage.removeItem("HISTORIES_KEY");
    let historyArray = this.state.historiesArray;
    console.log("historyArray>>>>>>", historyArray);
    AsyncStorage.setItem("HISTORIES_KEY", JSON.stringify(historyArray));
  }

  render() {
    let { image } = this.state;

    let category = this.props.navigation.getParam("params", null);
    console.log(category);
    let selectedTypesList = this.state.incidentTypes;

    let typeRows = selectedTypesList.map(row => renderTypesRows(row));
    function renderTypesRows(row) {
      return (
        <Item
          label={row.name}
          key={row.subCategoryId}
          value={row.subCategoryId}
        />
      );
    }

    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/glow2.png")}
          style={styles.container}
        >
          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              <Card>
                <CardItem style={styles.cardHeader}>
                  <Left style={styles.cardHeaderLeft}>
                    <Thumbnail
                      source={category.categoryIcon}
                      style={styles.avatar}
                    />
                  </Left>
                  <Body style={styles.cardHeaderBody}>
                    <Text>{category.name}</Text>
                    <Text note>Capture incident details below</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <View style={styles.btnsContainer}>
                    <Text style={styles.pickerLabel}>Select Type:</Text>
                    <Picker
                      style={styles.pickerBtn}
                      iosHeader="Select Type"
                      placeholder="Pick One"
                      mode="dropdown"
                      selectedValue={this.state.selectedType}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                      {typeRows}
                    </Picker>
                  </View>
                </CardItem>
                <CardItem>
                  <View style={styles.attachment}>
                    <Button
                      primary
                      block
                      iconLeft
                      style={styles.imageBtn}
                      onPress={this._pickImage}
                    >
                      <Text style={styles.btnTxt}>Attach Image</Text>
                    </Button>
                    <View>
                      {image && (
                        <Image
                          source={{ uri: image }}
                          style={styles.attImage}
                        />
                      )}
                    </View>
                  </View>
                </CardItem>
                <CardItem>
                  <Item regular>
                    <Input
                      style={styles.input}
                      multiline={true}
                      placeholder="Provide incident details here."
                      onChangeText={description =>
                        this.setState({ description, descriptionError: null })
                      }
                      value={this.state.description}
                    />
                  </Item>
                </CardItem>
                <CardItem>
                  <Left>
                    <CheckBox
                      style={styles.sceneCheckbox}
                      checked={this.state.locationState}
                      onPress={this._onChangeLocationState.bind(this)}
                    />
                    <Body>
                      <Text style={styles.sceneLabel}>At the scene?</Text>
                    </Body>
                  </Left>
                  <Right />
                </CardItem>
                <CardItem>
                  <View style={{ flex: 1 }}>
                    {this.state.locationState === false ? (
                      <Item floatingLabel>
                        <Input
                          style={{ flex: 1, padding: 10 }}
                          placeholder="Specify incident location"
                          onChangeText={strAddress =>
                            this.setState({
                              strAddress: strAddress,
                              strAddressError: null
                            })
                          }
                          value={this.state.strAddress}
                        />
                        <Label style={{ color: "#ff0000" }}>
                          {this.state.strAddressError}
                        </Label>
                      </Item>
                    ) : (
                      <Text style={{ color: "#000000" }}></Text>
                    )}
                  </View>
                </CardItem>
                <CardItem>
                  <View style={styles.submitBtn}>
                    <Button
                      block
                      primary
                      onPress={this._postIncidentReport.bind(this)}
                    >
                      {this.props.isLoading ? (
                        <Spinner color="white" />
                      ) : (
                        <Text
                          style={
                            Platform.OS === "android"
                              ? { fontSize: 14, textAlign: "center" }
                              : { fontSize: 16, fontWeight: "900" }
                          }
                        >
                          Report
                        </Text>
                      )}
                    </Button>
                  </View>
                </CardItem>
              </Card>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadCategoriesTypeRequest: categoryId =>
    dispatch(reportingAction.loadCategoriesTypeRequest(categoryId)),
  reportIncidents: (incidentsObject, accessToken) =>
    dispatch(reportAction.reportIncidents(incidentsObject, accessToken)),
  loadPostCaseHistoryRequest: (params, accessToken) =>
    dispatch(reportingAction.loadPostCaseHistoryRequest(params, accessToken))
});
const mapStateToProps = state => ({
  profile: state.profile,
  currentUser: state.login.currentUser,
  isLoading: state.reporting.isLoading,
  error: state.reporting.error,
  report: state.reporting.report,
  categories: state.reporting.categories,
  categoryTypes: state.reporting.categoryTypes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportingIncident);
