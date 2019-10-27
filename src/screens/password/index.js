import React from "react";
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

import styles from "./style";
import * as actions from "../../actions/signup.actions";

class Password extends React.Component {
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
    let params = { email: this.state.email };
    if (this.validateInputs()) {
      await this.props.loadPasswordResetRequest(params);

      if (this.props.passwordResetObj.passwordReset !== null) {
        this.setState({ isLoading: false, email: "" });
        Alert.alert(
          "Successful Request",
          "Your request was successful, please check your email!",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    }
  }
  validateInputs() {
    if (this.state.email) {
      return true;
    } else {
      Alert.alert(
        "Error",
        "Please enter email address.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
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
              <Content padder scrollEnabled={false}>
                <Text style={styles.signupHeader}>Forgot Your Password?</Text>

                <Text style={styles.resetInstruction}>
                  Enter your email address below, and password reset
                  instructions will be sent to you soon.
                </Text>

                <View style={styles.signupContainer}>
                  <View>
                    {this.props.passwordResetObj.passwordReset === null &&
                    this.state.isLoading === true ? (
                      <Spinner color="#018c6f" />
                    ) : null}
                  </View>
                  <Item regular style={styles.emailInput}>
                    <Icon name="mail" style={styles.inputIcon} />
                    <Input
                      placeholder="Email"
                      style={styles.input}
                      placeholderTextColor="#FFF"
                      onChangeText={email => this.setState({ email })}
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
                    onPress={() => this.props.navigation.navigate("Welcome")}
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
  passwordResetObj: state.login
});

function bindActions(dispatch) {
  return {
    loadPasswordResetRequest: params =>
      dispatch(actions.loadPasswordResetRequest(params))
  };
}

export default connect(
  mapStateToProps,
  bindActions
)(Password);
