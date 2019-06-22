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
    categoryIcon: require("../../../assets/NewsIcons/Icons_0018_Fight_Icon.png")
  },
  {
    categoryId: "5969edbcb517db0011008be2",
    datecaptured: "2017-07-15T10:26:04.498Z",
    description: "Drugs / Guns",
    name: "Drugs / Guns",
    categoryIcon: require("../../../assets/NewsIcons/Icons_0011_Gun_Icon.png")
  },
  {
    categoryId: "5969edd4b517db0011008be3",
    datecaptured: "2017-07-15T10:26:28.237Z",
    description: "Corruption",
    name: "Corruption",
    categoryIcon: require("../../../assets/NewsIcons/Icons_0017_Bribe_Icon.png")
  },
  {
    categoryId: "5969ede9b517db0011008be4",
    datecaptured: "2017-07-15T10:26:49.513Z",
    description: "Property Crime",
    name: "Property Crime",
    categoryIcon: require("../../../assets/NewsIcons/Icons_0016_Building_Icon.png")
  },
  {
    categoryId: "5969ef20b517db0011008be5",
    datecaptured: "2017-07-15T10:32:00.847Z",
    description: "Bylaw Infringement",
    name: "Bylaw Infringement",
    categoryIcon: require("../../../assets/NewsIcons/Icons_0012_By_Law_Infrigement_Icon.png")
  },
  {
    categoryId: "5969ef30b517db0011008be6",
    datecaptured: "2017-07-15T10:32:16.019Z",
    description: "Protest Action",
    name: "Protest Action",
    categoryIcon: require("../../../assets/NewsIcons/Icons_0014_Protest_Icon.png")
  },
  {
    categoryId: "59dded3cb466770012a44b83",
    categoryimage: "string",
    datecaptured: "2017-10-10T09:18:52.439Z",
    description: "string",
    name: "Vehicle Crime",
    categoryIcon: require("../../../assets/NewsIcons/Icons_0015_Break_In_Icon.png")
  },
  {
    categoryId: "596f1f41caa81e0011bf3a9e",
    datecaptured: "2017-07-19T08:58:41.054Z",
    description: "Traffic and Road",
    name: "Traffic and Road",
    categoryIcon: require("../../../assets/NewsIcons/Icons_0013_Traffic_Icon.png")
  }
];
export default class Home extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>`home page`</Text>
      // </View>
      <Container style={{ backgroundColor: "#eaf2f1" }}>
        <View
          style={{ marginLeft: 4, marginRight: 4, marginTop: 4, padding: 3 }}
        >
          <DeckSwiper
            dataSource={dataSource}
            renderItem={item => (
              <Card style={{ elevation: 3 }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
