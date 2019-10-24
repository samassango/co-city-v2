import React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Platform,
  Slider,
  Dimensions,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Spinner,
  Fab
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import Modal from "react-native-simple-modal";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const primary = require("../../utils/theme").brandPrimary;

import { loadNotificationDetailsRequest } from "../../actions/notifications.actions";

class AlertView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationType: "slideInDown",
      open: false,
      value: 0,
      accessToken: this.props.currentUser.id,
      active: "true"
    };
  }

  componentDidMount() {
    const notification = this.props.navigation.getParam("params", null);
    console.log(notification);
    this.props.loadNotificationDetailsRequest(
      this.state.accessToken,
      notification.id
    );
  }
  modalO() {
    this.setState({ open: true });
  }

  modalX() {
    this.setState({ open: false });
  }
  render() {
    let detailObject = this.props.notifications.notificationData[0];
    // console.log("detailObject>>", detailObject);
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/glow2.png")}
          style={styles.container}
        >
          <Content showsVerticalScrollIndicator={false}>
            {!!this.props.notifications.notificationData ? (
              <View style={styles.cardContainer}>
                <Card style={styles.card}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{detailObject.title}</Text>
                        <Text note>
                          Published:{" "}
                          {new Date(detailObject.datecaptured).toDateString()}
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>

                  <CardItem>
                    <Body>
                      <Image
                        source={{ uri: detailObject.image }}
                        style={styles.articleImage}
                      />
                      <Text>{detailObject.message}</Text>
                    </Body>
                  </CardItem>

                  <CardItem footer>
                    <Text note style={styles.footerText}>
                      Published by: {detailObject.sentBy}
                    </Text>
                  </CardItem>
                </Card>
              </View>
            ) : (
              <View style={styles.spinnerContainer}>
                <Spinner />
              </View>
            )}
          </Content>

          <Modal
            offset={this.state.offset}
            open={this.state.open}
            modalDidOpen={() => console.log("modal did open")}
            modalDidClose={() => this.setState({ open: false })}
            onRequestClose={() => this.setState({ open: false })}
            style={styles.modal}
          >
            <View>
              <View style={styles.modalContentBox}>
                <Grid style={{ flex: 10, padding: 20 }}>
                  <Col style={{ paddingLeft: 30 }}>
                    <Button transparent style={styles.dayButton}>
                      <Icon
                        name="ios-sunny-outline"
                        style={{ color: primary, fontSize: 26 }}
                      />
                    </Button>
                  </Col>
                  <Col style={{ paddingLeft: 80 }}>
                    <Button transparent style={styles.nightButton}>
                      <Icon
                        name="ios-moon-outline"
                        style={{ fontSize: 26, color: "#fff" }}
                      />
                    </Button>
                  </Col>
                </Grid>
              </View>
              <View style={styles.modalContentBox}>
                <Grid
                  style={{
                    padding: 20,
                    paddingBottom: 15,
                    justifyContent: "center"
                  }}
                >
                  <Col>
                    <Text
                      style={
                        Platform.OS === "android"
                          ? { fontSize: 12, marginTop: 8 }
                          : { fontSize: 12, marginTop: 8 }
                      }
                    >
                      CHOOSE TYPESPACE
                    </Text>
                  </Col>
                  <Col>
                    <Button transparent iconRight style={{ marginTop: -5 }}>
                      <Text style={{ color: "#FFF" }}>SANS SERIF</Text>
                      <Icon name="ios-arrow-forward" style={{ fontSize: 28 }} />
                    </Button>
                  </Col>
                </Grid>
              </View>
              <View>
                <Grid style={{ flexDirection: "row", paddingTop: 20 }}>
                  <Col>
                    <Text style={styles.modalSmallText}>A</Text>
                  </Col>
                  <Col style={{ alignSelf: "flex-end" }}>
                    <Text style={styles.modalLargeText}>A</Text>
                  </Col>
                </Grid>
                <Slider
                  {...this.props}
                  minimumTrackTintColor="#fff"
                  onValueChange={value => this.setState({ value })}
                />
              </View>
            </View>
          </Modal>
        </ImageBackground>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadNotificationDetailsRequest: (accessToken, notificationId) =>
      dispatch(loadNotificationDetailsRequest(accessToken, notificationId))
  };
};

const mapStateToProps = state => ({
  currentUser: state.login.currentUser,
  notifications: state.notifications
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertView);
