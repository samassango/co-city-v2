import React, { Component } from "react";

import { StyleSheet, Image } from "react-native";
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button
} from "native-base";
const dataSource = [
  {
    categoryId: "5969eda4b517db0011008be1",
    datecaptured: "2017-07-15T10:25:40.647Z",
    description: "Contact Crime",
    name: "Contact Crime",
    categoryIcon: require("../../../assets/new-icon/icons/contact_crime.png")
  },
  {
    categoryId: "5969edbcb517db0011008be2",
    datecaptured: "2017-07-15T10:26:04.498Z",
    description: "Drugs / Guns",
    name: "Drugs / Guns",
    categoryIcon: require("../../../assets/new-icon/icons/drugs_guns.png")
  },
  {
    categoryId: "5969edd4b517db0011008be3",
    datecaptured: "2017-07-15T10:26:28.237Z",
    description: "Corruption",
    name: "Corruption",
    categoryIcon: require("../../../assets/new-icon/icons/corruption.png")
  },
  {
    categoryId: "5969ede9b517db0011008be4",
    datecaptured: "2017-07-15T10:26:49.513Z",
    description: "Property Crime",
    name: "Property Crime",
    categoryIcon: require("../../../assets/new-icon/icons/property-crime.png")
  },
  {
    categoryId: "5969ef20b517db0011008be5",
    datecaptured: "2017-07-15T10:32:00.847Z",
    description: "Bylaw Infringement",
    name: "Bylaw Infringement",
    categoryIcon: require("../../../assets/new-icon/icons/by_law_infringement.png")
  },
  {
    categoryId: "5969ef30b517db0011008be6",
    datecaptured: "2017-07-15T10:32:16.019Z",
    description: "Protest Action",
    name: "Protest Action",
    categoryIcon: require("../../../assets/new-icon/icons/protest_action.png")
  },
  {
    categoryId: "59dded3cb466770012a44b83",
    categoryimage: "string",
    datecaptured: "2017-10-10T09:18:52.439Z",
    description: "string",
    name: "Vehicle Crime",
    categoryIcon: require("../../../assets/new-icon/icons/vehicle_crime.png")
  },
  {
    categoryId: "596f1f41caa81e0011bf3a9e",
    datecaptured: "2017-07-19T08:58:41.054Z",
    description: "Traffic and Road",
    name: "Traffic and Road",
    categoryIcon: require("../../../assets/new-icon/icons/road_and_traffic.png")
  }
];
export default class Home extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#eaf2f1" }}>
        <View
          style={{ marginLeft: 4, marginRight: 4, marginTop: 4, padding: 3 }}
        >
          <DeckSwiper
            dataSource={dataSource}
            renderItem={item => (
              <Card
                style={{ elevation: 3 }}
                onPress={() => this.props.navigation.navigate("Reporting")}
              >
                <CardItem>
                  <Left>
                    <Thumbnail source={item.categoryIcon} />
                    <Body>
                      <Text>{item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{ height: 300, flex: 1 }}
                    source={item.categoryIcon}
                  />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: "#24b792" }} />
                  <Text>{item.description}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
