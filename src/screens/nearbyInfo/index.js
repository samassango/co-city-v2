import React, { Component } from "react";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

import call from "react-native-phone-call";
import { connect } from "react-redux";
import { Platform, ImageBackground } from "react-native";

import {
  Container,
  Content,
  Text,
  Left,
  Right,
  Body,
  Button,
  Icon,
  View,
  Card,
  CardItem
} from "native-base";
import styles from "./styles";

class NearbyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
    this._handleDirectionNavigator = this._handleDirectionNavigator.bind(this);
    this._handleCallService = this._handleCallService.bind(this);
  }

  componentDidMount() {}

  _handleDirectionNavigator = async () => {
    const { marker, destinationVicinity } = this.props.navigation.getParams(
      "params",
      null
    );
    let urlSource = null;

    if (Platform.OS === "ios") {
      urlSource =
        "http://maps.apple.com/?daddr=" +
        marker.LatLng.latitude +
        "," +
        marker.LatLng.longitude +
        "&dirflg=d&t=m";
    } else {
      urlSource =
        "https://maps.google.com/?saddr=My%20Location&daddr=" +
        destinationVicinity;
    }
    let result = await WebBrowser.openBrowserAsync(urlSource);
    this.setState({ result });
  };

  _handleCallService() {
    const { typeObject } = this.props.navigation.getParams("params", null);
    const args = {
      number: typeObject.contact,
      prompt: false
    };

    call(args).catch(console.error);
  }
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/glow2.png")}
          style={styles.container}
        >
          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              <Card>
                <CardItem>
                  <Body>
                    <Text>Call or Navigate</Text>
                    <Text note>
                      Tap on the buttons below to call or navigate to your
                      selected emergency service.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button
                      block
                      primary
                      onPress={this._handleDirectionNavigator}
                    >
                      <Icon ios="ios-navigate" android="md-navigate" />
                      <Text>Navigate</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button block primary onPress={this._handleCallService}>
                      <Icon ios="ios-call" android="md-call" />
                      <Text>Call</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(NearbyInfo);
