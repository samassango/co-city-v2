import React from "react";
import { StyleSheet } from "react-native";

import styles from "./styles";
const bg = require("../../../assets/BG_2.png");
const logo = require("../../../assets/ts-logo.png");
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
import * as Animatable from "react-native-animatable";

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Button
      //     title="Login"
      //     onPress={() => this.props.navigation.navigate("Dashboard")}
      //   />
      //   <Button
      //     title="Signup"
      //     onPress={() => this.props.navigation.navigate("SignUp")}
      //   />
      // </View>
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
                  onPress={() => this.props.navigation.navigate("Dashboard")}
                >
                  <Text
                    style={
                      Platform.OS === "android"
                        ? { color: "#FFF", textAlign: "center" }
                        : { fontSize: 16, fontWeight: "900" }
                    }
                  >
                    Login
                  </Text>
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
                      onPress={() => {}}
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
// });
