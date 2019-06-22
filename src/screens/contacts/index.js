import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Platform,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import {
  Container,
  Content,
  Header,
  Text,
  Icon,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Item,
  Card,
  CardItem,
  Button
} from "native-base";

import styles from "./styles";

export default class Contacts extends React.Component {
  render() {
    return (
      <Container style={styles.bg}>
        <ImageBackground
          source={require("../../../assets/glow2.png")}
          style={styles.container}
        >
          <Content>
            <View style={styles.cardContainer}>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={styles.cardInstruction}>
                      Tap the call button next to the any of the departments in
                      the list below to call. Normal call rates apply.
                    </Text>
                  </Body>
                </CardItem>

                <CardItem style={styles.cardItem}>
                  <Left style={styles.left}>
                    <Thumbnail
                      style={{ alignItems: "flex-start" }}
                      source={require("../../../assets/NewsIcons/pulego-icon/cot-logo_wht-bg.png")}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Text style={styles.cardText}>City of Tshwane</Text>
                    <Text note style={{ flex: 1, alignItems: "flex-start" }}>
                      012 358 9999
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={() =>
                        call({ number: "012 358 9999", prompt: false }).catch(
                          console.error
                        )
                      }
                    >
                      <Icon
                        style={styles.callIcon}
                        ios="ios-call"
                        android="md-call"
                      />
                    </TouchableOpacity>
                  </Right>
                </CardItem>

                <CardItem style={styles.cardItem}>
                  <Left style={styles.left}>
                    <Thumbnail
                      style={{ alignItems: "flex-start" }}
                      source={require("../../../assets/NewsIcons/pulego-icon/ts-logo_wht-bg.png")}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Text style={styles.cardText}>
                      Tshwane Metro Police Department
                    </Text>
                    <Text note style={{ flex: 1, alignItems: "flex-start" }}>
                      012 358 7095
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={() =>
                        call({ number: "0123587095", prompt: false }).catch(
                          console.error
                        )
                      }
                    >
                      <Icon
                        style={styles.callIcon}
                        ios="ios-call"
                        android="md-call"
                      />
                    </TouchableOpacity>
                  </Right>
                </CardItem>

                <CardItem style={styles.cardItem}>
                  <Left style={styles.left}>
                    <Thumbnail
                      source={require("../../../assets/NewsIcons/pulego-icon/ts-logo_wht-bg.png")}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Text style={styles.cardText}>
                      Tshwane Metro Police Department
                    </Text>
                    <Text note style={{ flex: 1, alignItems: "flex-start" }}>
                      012 358 7096
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={() =>
                        call({ number: "0123587096", prompt: false }).catch(
                          console.error
                        )
                      }
                    >
                      <Icon
                        style={styles.callIcon}
                        ios="ios-call"
                        android="md-call"
                      />
                    </TouchableOpacity>
                  </Right>
                </CardItem>

                <CardItem style={styles.cardItem}>
                  <Left style={styles.left}>
                    <Thumbnail
                      source={require("../../../assets/NewsIcons/pulego-icon/saps-logo_wht-bg.png")}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Text style={styles.cardText}>
                      South African Police Service
                    </Text>
                    <Text note style={{ flex: 1, alignItems: "flex-start" }}>
                      10111
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={() =>
                        call({ number: "10111", prompt: false }).catch(
                          console.error
                        )
                      }
                    >
                      <Icon
                        style={styles.callIcon}
                        ios="ios-call"
                        android="md-call"
                      />
                    </TouchableOpacity>
                  </Right>
                </CardItem>

                <CardItem style={styles.cardItem}>
                  <Left style={styles.left}>
                    <Thumbnail
                      source={require("../../../assets/NewsIcons/pulego-icon/ems-logo_wht-bg.png")}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Text style={styles.cardText}>
                      Emergency Medical Services
                    </Text>
                    <Text note style={{ flex: 1, alignItems: "flex-start" }}>
                      10177
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={() =>
                        call({ number: "10177", prompt: false }).catch(
                          console.error
                        )
                      }
                    >
                      <Icon
                        style={styles.callIcon}
                        ios="ios-call"
                        android="md-call"
                      />
                    </TouchableOpacity>
                  </Right>
                </CardItem>

                <CardItem style={styles.cardItem}>
                  <Left style={styles.left}>
                    <Thumbnail
                      source={require("../../../assets/NewsIcons/pulego-icon/ems-logo_wht-bg.png")}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Text style={styles.cardText}>
                      Emergency Medical Services
                    </Text>
                    <Text note style={{ flex: 1, alignItems: "flex-start" }}>
                      012 310 6300
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={() =>
                        call({ number: "0123106300", prompt: false }).catch(
                          console.error
                        )
                      }
                    >
                      <Icon
                        style={styles.callIcon}
                        ios="ios-call"
                        android="md-call"
                      />
                    </TouchableOpacity>
                  </Right>
                </CardItem>

                <CardItem style={styles.cardItem}>
                  <Left style={styles.left}>
                    <Thumbnail
                      source={require("../../../assets/NewsIcons/pulego-icon/ems-logo_wht-bg.png")}
                    />
                  </Left>
                  <Body style={styles.body}>
                    <Text style={styles.cardText}>
                      Emergency Medical Services
                    </Text>
                    <Text note style={{ flex: 1, alignItems: "flex-start" }}>
                      012 310 6400
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <TouchableOpacity
                      onPress={() =>
                        call({ number: "0123106400", prompt: false }).catch(
                          console.error
                        )
                      }
                    >
                      <Icon
                        style={styles.callIcon}
                        ios="ios-call"
                        android="md-call"
                      />
                    </TouchableOpacity>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
