import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import {
  Image,
  View,
  Platform,
  Text,
  Dimensions,
  ImageBackground
} from "react-native";
import {
  Container,
  Content,
  Header,
  Input,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Card,
  CardItem,
  Thumbnail,
  Separator
} from "native-base";

import styles from "./styles";

import { loadGetCaseHistoryRequest } from "../../actions/history.actions";
import MapView from "react-native-maps";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import { _deleteCaseHistory, sqLiteDataSorce } from "../../utils/sqliteHelper";

export default class ViewHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refNumber: this.props.caseHistoryObject.refNumber,
      addressObject: null,
      statusLog: null
    };
  }

  componentDidMount() {
    this._getStatusLog(this.props.caseHistoryObject.incidentsId);
    this.props.loadGetCaseHistoryRequest(
      this.props.caseHistoryObject.incidentsId,
      this.props.currentUser.id
    );
  }
  componentDidUpdate() {
    if (this.state.statusLog === null) {
      this._getStatusLog(this.props.caseHistoryObject.incidentsId);
    }
  }

  _deleteHistory() {
    let db = sqLiteDataSorce;
    _deleteCaseHistory(db, this.props.caseHistoryObject.id);
    return Actions.timeline();
  }

  _getStatusLog(_incidentsId) {
    let db = sqLiteDataSorce;

    db.transaction(tx => {
      tx.executeSql(
        `select * from tblStatusLog where incidentsId = ?;`,
        [_incidentsId],
        (tx, resultSet) => {
          console.log("select rows successful", resultSet);
          this.setState({ statusLog: resultSet.rows._array });
        },
        (tx, error) => {
          tx.executeSql(
            `create table if not exists tblStatusLog (id integer primary key not null, refNumber text not null, incidentsId text not null, status text not null,comments text not null, dateUpdate text not null );`,
            [],
            (tx, resultSet) => {
              tx.executeSql(
                `select * from tblStatusLog where incidentsId = ?;`,
                [_incidentsId],
                (tx, resultSet) => {
                  console.log("select rows successful", resultSet);
                  this.setState({ statusLog: resultSet });
                },
                (tx, error) => {
                  console.log("select rows fail", error);
                }
              );
            },
            (tx, error) => {
              console.log("fail to create table", error);
            }
          );
          console.log("select rows fail", error);
        }
      );
    });
  }
  render() {
      const histories = this.props.navigation.getParam('params',null)
    let latLng = {
      latitude:
        this.props.histories.incidentObject !== null
          ? parseFloat(this.props.histories.incidentObject.lat)
          : 0,
      longitude:
        this.props.histories.incidentObject !== null
          ? parseFloat(this.props.histories.incidentObject.lot)
          : 0
    };

    let date = new Date(this.props.caseHistoryObject.datecaptured);

    console.log("latlng", latLng);
    console.log("statusLog", this.state.statusLog);
    let statusLogViews = null;

    if (this.state.statusLog !== null) {
      statusLogViews = this.state.statusLog.map(statusItem => {
        console.log("statusItem", Number(statusItem.dateUpdate));
        let logDate = new Date(Number(statusItem.dateUpdate));
        console.log("statusItemDate", logDate);
        let time = logDate.getHours() + ":" + logDate.getMinutes();
        console.log("time", logDate.toLocaleTimeString());
        return (
          <CardItem style={styles.statusLog} key={statusItem.id}>
            <Text style={styles.logTime}>{logDate.toLocaleTimeString()}</Text>
            <Body style={{ paddingLeft: 25 }}>
              <Text style={styles.logStatus}>{statusItem.status}</Text>
            </Body>
          </CardItem>
        );
      });
    } else {
      let logDate = new Date(this.props.caseHistoryObject.datecaptured);
      let time = logDate.getHours() + ":" + logDate.getMinutes();
      statusLogViews = (
        <CardItem style={styles.statusLog}>
          <Text style={styles.logTime}>
            {time + logDate.getHours() > 12 ? " PM" : " AM"}
          </Text>
          <Body style={{ paddingLeft: 25 }}>
            <Text style={styles.logStatus}>
              {this.props.caseHistoryObject.status}
            </Text>
          </Body>
        </CardItem>
      );
    }

    return (
      <Container>
        <ImageBackground
          source={require("../../../images/glow2.png")}
          style={styles.container}
        >
          <Header style={styles.header} androidStatusBarColor="#018c6f">
            <Left style={styles.headerLeft}>
              <Button transparent onPress={() => Actions.timeline()}>
                <Icon active name="arrow-back" />
              </Button>
            </Left>
            <Body style={styles.headerBody}>
              <Text style={styles.pageTitle}>Ref: {this.state.refNumber}</Text>
            </Body>
            <Right style={styles.headerRight}>
              <Button
                transparent
                onPress={() =>
                  Actions.comments({
                    incidentsId: this.props.caseHistoryObject.incidentsId,
                    statusLog: this.state.statusLog
                  })
                }
              >
                <Icon name="chatboxes" style={styles.headerIcons} />
              </Button>
            </Right>
          </Header>

          <Content showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={styles.category}>
                      {this.props.histories.categoryObject !== null
                        ? this.props.histories.categoryObject.name
                        : "please wait..."}{" "}
                      -{" "}
                      {this.props.histories.responseSubCat !== null
                        ? this.props.histories.responseSubCat.name
                        : "wait..."}
                    </Text>
                    <Text note style={styles.status}>
                      Status: {this.props.caseHistoryObject.status}
                    </Text>
                    <Text note style={styles.dateNote}>
                      Date:{" "}
                      {new Date(
                        this.props.caseHistoryObject.datecaptured
                      ).toUTCString()}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <MapView
                  style={{
                    flex: 1,
                    width: deviceWidth,
                    height: deviceHeight / 4
                  }}
                  initialRegion={{
                    latitude: latLng.latitude,
                    longitude: latLng.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                >
                  <MapView.Marker
                    coordinate={latLng}
                    title={
                      this.state.addressObject !== null
                        ? this.state.addressObject.name
                        : ""
                    }
                    description={
                      this.state.addressObject !== null
                        ? this.state.addressObject.street +
                          " " +
                          this.state.addressObject.region +
                          " " +
                          this.state.addressObject.city
                        : ""
                    }
                    pinColor={"#990000"}
                  />
                </MapView>
              </CardItem>

              <CardItem>
                <Body>
                  <Text>{this.props.caseHistoryObject.notes}</Text>
                </Body>
              </CardItem>

              <CardItem>
                <View style={styles.deleteBtn}>
                  <Button block danger onPress={this._deleteHistory.bind(this)}>
                    <Text style={styles.btnTxt}>Delete</Text>
                  </Button>
                </View>
              </CardItem>

              <Separator bordered style={{ marginTop: 20, marginBottom: 10 }}>
                <Text>Status Change Log</Text>
              </Separator>

              {statusLogViews}
            </Card>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      loadGetCaseHistoryRequest: (incidentId, accessToken) =>
        dispatch(loadGetCaseHistoryRequest(incidentId, accessToken))
    };
  }
  
  const mapStateToProps = state => ({
    currentUser: state.login.currentUser,
    histories: state.histories
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewHistory);
  