import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Image,
  View,
  Platform,
  TouchableOpacity
} from "react-native";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Fab,
  Body,
  Form,
  Thumbnail,
  Card,
  CardItem
} from "native-base";

import styles from "../../styles";
import * as actions from "../../../../actions/nearby.actions";

class Marker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      currentVicinity: "",
      destinationVicinity: "",
      result: ""
    };
    this._initiateMapNavigation = this._handlePressMapNavigationAsync.bind(
      this
    );
  }

  componentDidMount() {
    this.setState({
      title: this.props.title,
      description: this.props.description,
      currentVicinity: this.props.currentVicinity,
      destinationVicinity: this.props.description
    });
  }

  _initiateMapNavigation() {
    return this.props.loadGoogleDirectionRequest(
      this.state.currentVicinity,
      this.state.destinationVicinity
    );
  }

  _handlePressMapNavigationAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://maps.google.com/?saddr=My%20Location&daddr=" +
        this.state.destinationVicinity
    );
    this.setState({ result });
  };

  render() {
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View style={styles.markerView}>
          <Card>
            <CardItem>
              <Body style={styles.bodyText}>
                <Text style={styles.markerViewTitle}>{this.state.title}</Text>
                <Text note style={styles.bodyTextNote}>
                  {this.state.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.calloutButton}>
              <TouchableOpacity>
                <Button primary>
                  <Text>Call or Navigate</Text>
                </Button>
              </TouchableOpacity>
            </CardItem>
          </Card>
        </View>
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadGoogleDirectionRequest: (currentVicinity, destinationVicinity) =>
    dispatch(
      actions.loadGoogleDirectionRequest(currentVicinity, destinationVicinity)
    )
});
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marker);
