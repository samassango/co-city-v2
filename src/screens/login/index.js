import React from "react";
import { connect } from "react-redux";

import styles from "./styles";
const bg = require("../../../assets/new-icon/background_image.png");
const logo = require("../../../assets/new-icon/ethekwini_logo.png");
import {
  Image,
  Platform,
  StatusBar,
  NetInfo,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Left,
  Right,
  Toast,
  Spinner
} from "native-base";
import Expo, { Notifications } from "expo";
import * as Animatable from "react-native-animatable";

import * as actions from "../../actions/login.actions";
import {
  createTBLLogin,
  createTBLHistory,
  createTBLStatusLog,
  deleteCaseHistory,
  _deviceInfo,
  _getDeviceInfo,
  sqLiteDataSorce
} from "../../utils/sqliteHelper";

import { registerForPushNotificationsAsync } from "../../utils/notificationConfig";

class LoginScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };
  componentWillMount() {
    createTBLLogin(sqLiteDataSorce);
    createTBLHistory(sqLiteDataSorce);
    createTBLStatusLog(sqLiteDataSorce);
    deleteCaseHistory(sqLiteDataSorce);
    registerForPushNotificationsAsync(null, null);

    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  loginHandler = () => {
    if (this.isInputValid()) {
      this.props.authenticateUser(this.state.username, this.state.password);
    }
  };

  isInputValid = () => {
    if (this.state.username === "") {
      Alert.alert(
        "Error: Invalid Username",
        "Please enter your valid Username.",
        [{ text: "ok" }]
      );
      return;
    }
    if (this.state.password === "") {
      Alert.alert(
        "Error: Invalid Password",
        "Please enter your valid password.",
        [{ text: "ok" }]
      );
      return;
    }
    return true;
  };

  componentWillUnmount() {
    this._notificationSubscription.remove();
  }

  _handleNotification = notification => {
    if (notification.origin === "selected") {
      if (notification.data.type === "casehistory") {
        this.props.navigation.navigate("IncidentHistory", {
          notificationObject: notification
        });
      } else {
        this.props.navigation.navigate("IncidentAlert", {
          notificationObject: notification
        });
      }
    }
  };

  render() {
    console.log(this.props);
    if (!!this.props.login.currentUser) {
      this.props.navigation.navigate("Dashboard");
    }
    return (
      <Container>
        <Content scrollEnabled={false} bounces={false}>
          <KeyboardAvoidingView behavior="padding">
            <ImageBackground source={bg} style={styles.background}>
              <Animatable.Image
                source={logo}
                animation="fadeIn"
                easing="ease-out"
                duration={1000}
                delay={800}
                style={
                  Platform.OS === "android" ? styles.aShadow : styles.iosShadow
                }
              />
              <Animatable.Text
                animation="fadeInUp"
                easing="ease-in-out"
                duration={1100}
                delay={1500}
                style={styles.catchPhrase}
              >
                Enhancing Service Delivery
              </Animatable.Text>

              <Animatable.View
                animation="fadeIn"
                easing="ease-in-out"
                delay={800}
                duration={1000}
                style={styles.bg}
              >
                <Item regular style={styles.inputGrp}>
                  <Icon name="person" style={styles.inputIcon} />
                  <Input
                    placeholder="Email"
                    placeholderTextColor="#FFF"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                    onChangeText={username => this.setState({ username })}
                  />
                </Item>

                <Item regular style={styles.inputGrp}>
                  <Icon name="unlock" style={styles.inputIcon} />
                  <Input
                    placeholder="Password"
                    placeholderTextColor="#FFF"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>

                <Button
                  block
                  primary
                  style={styles.loginBtn}
                  onPress={this.loginHandler.bind(this)}
                >
                  {this.props.isLoading ? (
                    <Spinner color="blue" />
                  ) : (
                    <Text
                      style={
                        Platform.OS === "android"
                          ? { color: "#FFF", textAlign: "center" }
                          : { fontSize: 16, fontWeight: "900" }
                      }
                    >
                      Login
                    </Text>
                  )}
                </Button>

                <View style={styles.otherLinksContainer}>
                  <Left style={styles.left}>
                    <Button
                      transparent
                      style={{ alignSelf: "flex-start" }}
                      onPress={() => this.props.navigation.navigate("SignUp")}
                    >
                      <Text style={styles.helpBtns}>Sign Up</Text>
                    </Button>
                  </Left>
                  <Right style={styles.right}>
                    <Button
                      transparent
                      style={{ alignSelf: "flex-end" }}
                      onPress={() => {
                        this.props.navigation.navigate("Password");
                      }}
                    >
                      <Text style={styles.helpBtns}>Forgot Password?</Text>
                    </Button>
                  </Right>
                </View>
              </Animatable.View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  isLoading: state.login.isLoading
});
const mapDispatchToProps = dispatch => ({
  authenticateUser: (username, password) =>
    dispatch(actions.authenticateUser(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
