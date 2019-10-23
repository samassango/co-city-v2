import React, { Component } from "react";
import {
  Image,
  View,
  Switch,
  TouchableOpacity,
  Platform,
  Alert
} from "react-native";
import { connect } from "react-redux";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Thumbnail,
  Item,
  Input,
  Label,
  Left,
  Right,
  Body,
  Card,
  CardItem,
  Form,
  Picker,
  Spinner
} from "native-base";

import styles from "./styles";

const primary = require("../../utils/theme").brandPrimary;

import * as actions from "../../actions/profile.actions";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";

import { isEmpty } from "../../utils/utilsHelper";

//import { loadListOfPlacesRequest } from '../../actions/signupAction';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    let profile = this.props.profile.profile;
    this.state = {
      isLoading: false,
      mobileno:
        profile !== null && profile !== undefined ? profile.mobileno : "",
      address: profile !== null && profile !== undefined ? profile.address : "",
      image:
        profile !== null && profile.hasOwnProperty("images")
          ? profile.images.imageString
          : "",
      fullname:
        profile !== null && profile !== undefined ? profile.fullname : "",
      Username:
        profile !== null && profile !== undefined ? profile.username : "",
      email: profile !== null && profile !== undefined ? profile.email : "",
      imageBase64: "",
      offset: {
        x: 0,
        y: 0
      }
    };
  }
  componentDidMount() {
    this.props.loadListOfPlacesRequest();
  }

  async updateProfile() {
    this.setState({ isLoading: true });

    let params = this._paramsUpdatedObject();
    // console.log("params22",params);
    if (!isEmpty(params)) {
      // console.log("UpdateObject",params)
      //Adding a userId
      params = Object.assign(params, { userId: this.props.currentUser.userId });
      //making a request and wait for response.
      await this.props.loadProfileUpdateRequest(
        this.props.currentUser.id,
        params
      );
      this.setState({ isLoading: false });
      Alert.alert(
        "Successfully updated",
        "Profile updates was successful.",
        [
          {
            text: "OK",
            onPress: () => this.props.navigation.navigate("Profile")
          }
        ],
        { cancelable: false }
      );
    } else {
      console.log("NochangesMade");
      this.setState({ isLoading: false });
      Alert.alert(
        "No changes made!",
        "Please make some changes to update your profile.",
        [
          {
            text: "OK",
            onPress: () => this.props.navigation.navigate("Profile")
          }
        ],
        { cancelable: false }
      );
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
      exif: true
    });
    // console.log("result",result);

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

  onValueChange(value) {
    this.setState({
      address: value
    });
  }
  _paramsUpdatedObject = () => {
    let params = {};
    let profile = this.props.profile.profile;
    if (profile.fullname !== this.state.fullname) {
      params = Object.assign(params, { fullname: this.state.fullname });
    }

    if (profile.images.imageString !== this.state.image) {
      params = Object.assign(params, {
        image: { imageString: this.state.image }
      });
    }

    if (profile.address !== this.state.address) {
      params = Object.assign(params, { address: this.state.address });
    }

    if (profile.mobileno !== this.state.mobileno) {
      params = Object.assign(params, { mobileno: this.state.mobileno });
    }

    return params;
  };
  render() {
    let { image } = this.state;

    let suburbsList = null;
    if (this.props.suburbs !== null) {
      suburbsList = this.props.suburbs.map((suburb, i) =>
        renderSuburbs(suburb, i)
      );
      function renderSuburbs(suburb, i) {
        return <Item label={suburb.name} key={suburb.id} value={suburb.id} />;
      }
    } else {
      suburbsList = [];
    }

    return (
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            <Card>
              <CardItem style={styles.cardHeader}>
                <Body>
                  <View style={styles.avatarContainer}>
                    <TouchableOpacity
                      style={{ alignSelf: "center" }}
                      onPress={this._pickImage.bind(this)}
                    >
                      {image ? (
                        <Image source={{ uri: image }} style={styles.avatar} />
                      ) : (
                        <Thumbnail
                          large
                          source={require("../../../assets/contacts/profilePicture_3.png")}
                          style={styles.profilePic}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </Body>
              </CardItem>
              <CardItem style={styles.form}>
                <Item inlineLabel style={styles.formItem}>
                  <Label>Fullname</Label>
                  <Input
                    style={styles.input}
                    value={this.state.fullname}
                    onChangeText={fullname => this.setState({ fullname })}
                  />
                </Item>
                <Item inlineLabel style={styles.formItem}>
                  <Label>Email</Label>
                  <Input
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item inlineLabel style={styles.formItem}>
                  <Label>Suburb</Label>
                  <Picker
                    itemTextColor="white"
                    style={styles.suburbPicker}
                    iosHeader="Select Suburb"
                    placeholder="Select One"
                    mode="dropdown"
                    selectedValue={this.state.address}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    {suburbsList}
                  </Picker>
                </Item>

                <Item inlineLabel style={styles.formItem}>
                  <Label>Phone No.</Label>
                  <Input
                    keyboardType="numeric"
                    maxLength={10}
                    minLength={10}
                    style={styles.input}
                    value={this.state.mobileno}
                    onChangeText={mobileno => this.setState({ mobileno })}
                  />
                </Item>
                {this.state.isLoading ? (
                  <Item inlineLabel style={styles.formItem}>
                    <Spinner color="#018c6f" />
                  </Item>
                ) : null}
              </CardItem>
              <CardItem footer style={styles.submitBtn}>
                <Button
                  block
                  style={styles.submitBtn}
                  onPress={this.updateProfile.bind(this)}
                >
                  <Text>Submit</Text>
                </Button>
              </CardItem>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadListOfPlacesRequest: () => dispatch(actions.loadListOfPlacesRequest()),
    loadProfileUpdateRequest: (accessToken, params) =>
      dispatch(actions.loadProfileUpdateRequest(accessToken, params))
  };
};

const mapStateToProps = state => ({
  currentUser: state.login.currentUser,
  profile: state.profile,
  suburbs: state.profile.suburbs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
