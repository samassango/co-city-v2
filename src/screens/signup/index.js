import React from "react";

import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Item,
  Input,
  Icon
} from "native-base";

export default class SignUp extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      <Container>
        <Content>
          <Item>
            <Icon active name="mail" />
            <Input placeholder="Email" />
          </Item>
          <Item>
            <Icon active name="call" />
            <Input placeholder="Phone Number" />
          </Item>
          <Item>
            <Icon active name="lock" />
            <Input placeholder="Password" secureTextEntry={true} />
          </Item>
          <Item>
            <Icon active name="card" />
            <Input placeholder="Credit Card Number" />
          </Item>
        </Content>
      </Container>
      // </View>
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
