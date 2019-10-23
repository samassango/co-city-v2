import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  View,
  Spinner
} from "native-base";

import styles from "./styles";
import { loadProfilePasswordResetRequest } from "../../actions/profile.actions";

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      },
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false
    };
  }
  async resetUser() {
    this.setState({ isLoading: true });
    let params = {
      password: this.state.password,
      userId: this.props.currentUser.userId
    };
    if (this.validateInputs()) {
      if (this._passwordMissmatch()) {
        await this.props.loadProfilePasswordResetRequest(
          this.props.currentUser.id,
          params
        );

        if (this.props.profile.ps_profile !== null) {
          this.setState({
            isLoading: false,
            email: "",
            password: "",
            confirmPassword: ""
          });
          Alert.alert(
            "Successful Request",
            "Your password has successfully changed.",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        }
      } else {
        Alert.alert(
          "Password Missmatch!",
          "Your entered password does not match.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    }
  }
  validateInputs() {
    if (this.state.password) {
      if (this.state.confirmPassword) {
        return true;
      } else {
        Alert.alert(
          "Confirm Password!",
          "Please enter confirm your new password.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        "Password!",
        "Please enter your new password.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
    return false;
  }

  _passwordMissmatch() {
    if (this.state.password == this.state.confirmPassword) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Container>
        <Content contentOffset={this.state.offset} scrollEnabled={false}>
          <View>
            <ImageBackground
              source={require("../../../assets/new-icon/background_image.png")}
              style={styles.background}
            >
              <Content scrollEnabled={false}>
                <Text style={styles.signupHeader}>Reset Password?</Text>

                <Text style={styles.resetInstruction}>
                  Enter your new password and confirm it.
                </Text>

                <View style={styles.signupContainer}>
                  <View>
                    {this.props.profile.passwordReset === null &&
                    this.state.isLoading === true ? (
                      <Spinner color="#018c6f" />
                    ) : null}
                  </View>
                  <Item regular style={styles.emailInput}>
                    <Icon name="unlock" style={styles.inputIcon} />
                    <Input
                      placeholder="New password"
                      style={styles.input}
                      secureTextEntry
                      placeholderTextColor="#FFF"
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                    />
                  </Item>
                  <Item regular style={styles.emailInput}>
                    <Icon name="unlock" style={styles.inputIcon} />
                    <Input
                      placeholder="Confirm password"
                      style={styles.input}
                      secureTextEntry
                      placeholderTextColor="#FFF"
                      value={this.state.confirmPassword}
                      onChangeText={confirmPassword =>
                        this.setState({ confirmPassword })
                      }
                    />
                  </Item>
                  <Button
                    block
                    bordered
                    onPress={this.resetUser.bind(this)}
                    style={styles.signupBtn}
                  >
                    <Text style={{ color: "#FFF" }}>Reset</Text>
                  </Button>

                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                  >
                    <Text style={styles.termsText}>Go Back</Text>
                  </TouchableOpacity>
                </View>
              </Content>
            </ImageBackground>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  currentUser: state.login.currentUser
});

const mapDispatchToProps = dispatch => ({
  loadProfilePasswordResetRequest: (accessToken, params) =>
    dispatch(loadProfilePasswordResetRequest(accessToken, params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordReset);
