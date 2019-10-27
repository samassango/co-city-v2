import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Alert, ImageBackground } from "react-native";

import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  View,
  Spinner,
  Left,
  Picker
} from "native-base";

import * as actions from "../../actions/signup.actions";
import styles from "./styles";

import { validateEmail } from "../../utils/utilsHelper";

class SignUp extends React.Component {
  state = {
    offset: {
      x: 0,
      y: 0
    },
    fullname: "",
    mobileNo: "",
    username: "",
    email: "",
    suburb: "",
    password: "",
    confirmPassword: "",
    errorMessage: "",
    isloading: false,
    selectedType: ""
  };

  componentDidMount() {
    this.props.loadListOfPlacesRequest();
  }

  _createAccount() {
    if (this.state.fullname) {
      if (this.state.mobileNo) {
        if (this.state.email) {
          if (this.state.suburb) {
            if (validateEmail(this.state.email)) {
              if (this._confirmPassword()) {
                this.setState({ isloading: true });
                return this.props.loadSignupRequest({
                  payNumber: "",
                  fullname: this.state.fullname,
                  username: this.state.email,
                  password: this.state.password,
                  email: this.state.email,
                  mobileno: this.state.mobileNo,
                  suburb: this.state.suburb
                });
              }
            } else {
              Alert.alert(
                "Error: Invalid Email",
                "Please enter your valid email.",
                [{ text: "ok" }]
              );
            }
          } else {
            Alert.alert(
              "Error: Invalid suburb",
              "Please enter your valid suburb.",
              [{ text: "ok" }]
            );
          }
          //this.setState({errorMessage: 'please enter your password.'})
        } else {
          Alert.alert("Error: Email", "Please enter your email.", [
            { text: "ok" }
          ]);
          //this.setState({errorMessage: 'please enter your email.'})
        }
      } else {
        Alert.alert(
          "Error: Contact number",
          "Please enter your cantact number.",
          [{ text: "ok" }]
        );
      }
    } else {
      Alert.alert("Error: fullname", "Please enter your fullname.", [
        { text: "ok" }
      ]);
    }
  }
  _confirmPassword() {
    let passwordMatch = false;
    if (this.state.password === this.state.confirmPassword)
      passwordMatch = true;
    else Alert.alert("Error", "Password missmatch!", [{ text: "ok" }]);

    return passwordMatch;
  }

  onValueChange(value) {
    this.setState({
      suburb: value
    });
  }

  render() {
    if (this.props.user !== null) {
      Alert.alert(
        "Success",
        "Thank you for signing up. We've sent an accout verification link to your email.",
        [
          { text: "OK", onPress: () => this.props.navigation.navigate("Login") }
        ],
        { cancelable: false }
      );
    }
    console.log("properties", this.props);
    let suburbsList = null;
    if (!!this.props.suburbs) {
      suburbsList = this.props.suburbs.map((suburb, i) =>
        renderSuburbs(suburb, i)
      );
      function renderSuburbs(suburb, i) {
        return <Item label={suburb.name} key={suburb.id} value={suburb.id} />;
      }
    }

    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/new-icon/background_image.png")}
          style={styles.background}
        >
          <Content>
            <View style={styles.formContainer}>
              <Text style={styles.signupHeader}>Join eThekwini Safety</Text>

              <Text style={styles.signupInstruction} note>
                {
                  "By Signing up, you agree to our Terms of Use.\n You will receive an email to verify your account once you have created an account"
                }
              </Text>

              <View style={styles.inputContainer}>
                <Item regular style={styles.inputGrp}>
                  <Icon
                    ios="ios-person"
                    android="md-person"
                    style={styles.icon}
                  />
                  <Input
                    placeholder="Enter your fullname"
                    style={styles.input}
                    placeholderTextColor="#FFF"
                    autoCapitalize="words"
                    onChangeText={fullname => this.setState({ fullname })}
                  />
                </Item>
                <Item regular style={styles.inputGrp}>
                  <Icon ios="ios-call" android="md-call" style={styles.icon} />
                  <Input
                    placeholder="Enter your mobile number"
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={10}
                    minLength={10}
                    placeholderTextColor="#FFF"
                    onChangeText={mobileNo => this.setState({ mobileNo })}
                  />
                </Item>
                <Item regular style={styles.inputGrp}>
                  <Icon ios="ios-mail" android="md-mail" style={styles.icon} />
                  <Input
                    placeholder="Enter your email"
                    style={styles.input}
                    placeholderTextColor="#FFF"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <View style={styles.picker}>
                  <Text style={styles.pickerLabel}>Select Suburb:</Text>
                  <Picker
                    itemTextColor="white"
                    style={styles.suburbPicker}
                    iosHeader="Select Suburb"
                    placeholder="Select One"
                    mode="dropdown"
                    selectedValue={this.state.suburb}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    {suburbsList}
                  </Picker>
                </View>
                <Item regular style={styles.inputGrp}>
                  <Icon ios="ios-lock" android="md-lock" style={styles.icon} />
                  <Input
                    placeholder="Enter your password"
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor="#FFF"
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
                <Item regular style={styles.inputGrp}>
                  <Icon ios="ios-lock" android="md-lock" style={styles.icon} />
                  <Input
                    placeholder="Confirm your password"
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor="#FFF"
                    onChangeText={confirmPassword =>
                      this.setState({ confirmPassword })
                    }
                  />
                </Item>
              </View>
            </View>

            <View style={styles.btnContainer}>
              <Button
                style={styles.signupBtn}
                onPress={this._createAccount.bind(this)}
              >
                <Text style={styles.submitBtnText}>Submit</Text>
              </Button>
            </View>
            <View style={styles.backToLogin}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Welcome")}
              >
                <Text style={styles.termsText}>Go Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.termsButton}>
              <Button
                block
                transparent
                onPress={() => this.props.navigation.navigate("About")}
              >
                <Text style={styles.termsText}>Terms & Conditions</Text>
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadListOfPlacesRequest: () => dispatch(actions.loadListOfPlacesRequest()),
  loadSignupRequest: params => dispatch(actions.loadSignupRequest(params))
});

const mapStateToProps = state => ({
  user: state.signup.user,
  suburbs: state.signup.suburbs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
