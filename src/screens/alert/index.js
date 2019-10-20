import React from "react";
import {
  Container,
  Content,
  Text,
  Card,
  Left,
  Body,
  List,
  ListItem,
  Spinner,
  CardItem
} from "native-base";
import { Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import * as notificationActions from "../../actions/notifications.actions";
import { sortObjectArrayDesc } from "../../utils/utilsHelper";
import styles from "./styles";
class IncidentAlert extends React.Component {
  state = {
    accessToken: "",
    userID: ""
  };

  componentDidMount() {
    try {
      if (
        this.props.hasOwnProperty("currentUser") &&
        this.props.currentUser !== null
      ) {
        this.props.loadNotificationsRequest(this.props.currentUser.id);
      } else {
        this.props.navigation.navigate("Welcome");
      }
    } catch (error) {
      console.log("Loading Notification Error:", error);
    }
  }

  render() {
    let rowListItems = [];
    if (!!this.props.notifications) {
      const newNotific = sortObjectArrayDesc(this.props.notifications);

      const renderRowItem = rowItem => {
        return (
          <ListItem key={rowItem.id} avatar>
            <TouchableOpacity style={styles.touch} onPress={() => {}}>
              <Card style={styles.card}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.articleTitle}>{rowItem.title}</Text>
                      <Text note>
                        {new Date(rowItem.datecaptured).toDateString()}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{ uri: rowItem.image }}
                    style={styles.articleImage}
                  />
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      {rowItem.message.length > 140
                        ? rowItem.message.substr(0, 80) + "..."
                        : rowItem.message}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text note>Published by: {rowItem.sentBy}</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </ListItem>
        );
      };

      rowListItems = newNotific.map(rowItem => renderRowItem(rowItem));
    }

    console.log("notifications", this.props);
    return (
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          {this.props.isLoading ? <Spinner /> : <List>{rowListItems}</List>}
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadNotificationsRequest: accessToken =>
    dispatch(notificationActions.loadNotificationsRequest(accessToken)),
  expoPushNotification: (title, message, username) =>
    dispatch(notificationActions.expoPushNotification(title, message, username))
});

const mapStateToProps = state => ({
  currentUser: state.login.currentUser,
  notifications: state.notifications.notifications,
  isLoading: state.notifications.isLoading,
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentAlert);
