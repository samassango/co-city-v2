import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
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

import styles from "../styles";
const primary = require("../../../utils/theme").brandPrimary;
const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);

const HistoryList = ({ histories, navigation, categories }) => {
  return (
    <List style={{ marginRight: 1, marginLeft: 1 }}>
      {!!histories &&
        histories.map(history => (
          <ListItem key={history.id} avatar>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
              onPress={() => {
                navigation.navigate("ViewHistory", {
                  params: {
                    historyId: history.id,
                    caseHistoryObject: history
                  }
                });
              }}
            >
              <Card
                style={{
                  flex: 1,
                  alignSelf: "center",
                  marginRight: 20,
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={
                        categories.find(
                          item => item.name === history.categoryName
                        ).categoryIcon
                      }
                    />
                    <Body>
                      <Text>Ref : {history.refNumber}</Text>
                      <Text note>
                        Report: {new Date(history.datecaptured).toDateString()}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Body style={{ paddingLeft: 10 }}>
                    <Text>{history.notes}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon name="ios-pricetag" style={{ marginRight: 7 }} />
                      <Text>{history.status}</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </ListItem>
        ))}
    </List>
  );
};
export default HistoryList;
