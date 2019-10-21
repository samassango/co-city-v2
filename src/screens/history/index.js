import React from "react";

import {
  Image,
  View,
  TouchableOpacity,
  Platform,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import Expo from "expo";
import { SQLite } from "expo-sqlite";

import {
  Container,
  Content,
  Text,
  Icon,
  Header,
  Button,
  Card,
  Left,
  Body,
  Right,
  CardItem,
  List,
  ListItem,
  Thumbnail,
  Spinner
} from "native-base";

import styles from "./styles";
import {
  _handleGetCaseHistory,
  sqLiteDataSorce,
  _handleInsertCaseHistory
} from "../../utils/sqliteHelper";
import { storeCaseHistory } from "../../actions/history.actions";
import { sortArrayDesc } from "../../utils/utilsHelper";

class IncidentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: "",
      categories: [
        {
          name: "Contact Crime",
          categoryIcon: require("../../../assets/new-icon/icons/contact_crime.png")
        },
        {
          name: "Drugs / Guns",
          categoryIcon: require("../../../assets/new-icon/icons/drugs_guns.png")
        },
        {
          name: "Corruption",
          categoryIcon: require("../../../assets/new-icon/icons/corruption.png")
        },
        {
          name: "Property Crime",
          categoryIcon: require("../../../assets/new-icon/icons/property-crime.png")
        },
        {
          name: "Other",
          categoryIcon: require("../../../assets/new-icon/icons/vehicle_crime.png")
        },
        {
          name: "Protest Action",
          categoryIcon: require("../../../assets/new-icon/icons/protest_action.png")
        },
        {
          name: "Traffic and Road",
          categoryIcon: require("../../../assets/new-icon/icons/road_and_traffic.png")
        },
        {
          name: "Bylaw Infringement",
          categoryIcon: require("../../../assets/new-icon/icons/by_law_infringement.png")
        }
      ],
      historiesArray: [],
      notification: {},
      results: "LIST_LOADING"
    };
  }

  componentDidMount() {
    if (
      this.props.hasOwnProperty("notificationObject") &&
      this.props.notification !== null
    ) {
      let data = this.props.notificationObject.data;

      let params = {
        refNumber: data.refNumber,
        notes: data.message,
        status: data.status,
        dateCaptured: data.reportedOn,
        comments: data.message,
        incidentId: data.incidentId,
        categoryName: data.category
      };
      if (params.refNumber !== null) storeCaseHistory(params, sqLiteDataSorce);
      else console.log("Cannot save null values");
    }
    let db = SQLite.openDatabase("tshwaneMobi.db");

    db.transaction(
      tx => {
        tx.executeSql(
          "select * from tblCaseHistory",
          [],
          (_, { rows: { _array } }) => {
            console.log("SQLiteRows>>>>", _array);
            let sortedArray = sortArrayDesc(_array, "id");
            this.setState({
              historiesArray: sortedArray,
              results: _array.length > 0 ? "LIST_LOADING" : "LIST_EMPTY"
            });
            // return JSON.stringify(_array);
          }
        );
      },
      error => {
        console.log("SQLite Error>>>>", error);
      },
      success => {
        console.log("SQLite Success>>>>", success);
      }
    );
  }
  render() {
    const _thisContext = this;

    console.log("historiesArray", this.state.historiesArray);

    let rowListItems = [];
    if (this.state.historiesArray !== undefined) {
      if (
        this.state.historiesArray.length > 0 &&
        this.state.historiesArray[0] !== undefined
      ) {
        let historiesItems = this.state.historiesArray;

        rowListItems = historiesItems.map(rowItem => renderRowItem(rowItem));

        function renderRowItem(rowItem) {
          let categoryIcon = _thisContext.state.categories[0].categoryIcon; // temporary value.

          let categoryIndex = _thisContext.state.categories.findIndex(
            item => item.name == rowItem.categoryName
          );

          if (categoryIndex >= 0) {
            categoryIcon =
              _thisContext.state.categories[categoryIndex].categoryIcon;
          }
          return (
            <ListItem key={rowItem.id} avatar>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() =>
                  this.props.navigation.navigate("ViewHistory", {
                    params: {
                      historyId: rowItem.id,
                      caseHistoryObject: rowItem
                    }
                  })
                }
              >
                <Card style={styles.card}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={categoryIcon} />
                      <Body>
                        <Text>Ref: {rowItem.refNumber}</Text>
                        <Text note>
                          Reported:{" "}
                          {new Date(rowItem.datecaptured).toDateString()}
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>{rowItem.notes}</Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent primary>
                        <Icon name="ios-pricetag" style={{ marginRight: 7 }} />
                        <Text>{rowItem.status}</Text>
                      </Button>
                    </Left>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </ListItem>
          );
        }
      }
    }
    let loadingIndicator =
      this.state.results === "LIST_LOADING" &&
      this.state.historiesArray.length > 0 ? null : (
        <Spinner color="#01cca1" />
      );

    let listRowItems = null;

    if (this.state.historiesArray.length > 0) {
      listRowItems = <List>{rowListItems}</List>;
    } else {
      loadingIndicator = null;
      listRowItems = (
        <Text
          style={{
            color: "#666",
            fontWeight: "bold",
            alignSelf: "center",
            margin: 15
          }}
        >
          Case history empty. Please come back after reporting an incident
        </Text>
      );
    }
    return (
      <Container style={styles.bg}>
        <ImageBackground
          source={require("../../../assets/glow2.png")}
          style={styles.container}
        >
          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.listContainer}>
              {listRowItems}
              {loadingIndicator}
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentHistory);
