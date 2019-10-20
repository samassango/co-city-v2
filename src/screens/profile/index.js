import React from "react";
import { connect } from "react-redux";
import { ImageBackground, View } from "react-native";
import {
  Container,
  Content,
  Text,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Button
} from "native-base";

import styles from "./styles";
import * as actions from "../../actions/profile.actions";

class Profile extends React.Component {
  componentDidMount() {
    console.log("currentUser", this.props.currentUser);

    const { id, userId } = this.props.currentUser;

    const { profile } = this.props.profile;

    if (profile === null || profile === undefined) {
      this.props.loadProfileRequest(id, userId);
    }
  }
  render() {
    let profileImage = null;
    console.log("profile", this.props);
    const { profile } = this.props.profile;
    if (profile !== null) {
      if ("images" in profile) {
        if (profile.images.imageString !== undefined) {
          profileImage = profile.images.imageString;
        }
      }
    }

    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/glow2.png")}
          style={styles.container}
        >
          <Content showsVerticalScrollIndicator={false}>
            <View>
              <Card style={styles.profileContainer}>
                <CardItem>
                  <Body>
                    <Thumbnail
                      large
                      source={
                        profileImage !== null
                          ? { uri: profileImage }
                          : require("../../../assets/contacts/profilePicture_3.png")
                      }
                      style={styles.profilePic}
                    />
                  </Body>
                </CardItem>

                <CardItem>
                  <Body>
                    <Text style={styles.userName}>
                      {this.props.profile.profile !== null
                        ? this.props.profile.profile.fullname
                        : ""}
                    </Text>
                  </Body>
                </CardItem>

                <CardItem style={styles.contactsDetails}>
                  <Text note style={styles.contactNumber}>
                    Contact No.:{" "}
                    {this.props.profile.profile !== null
                      ? this.props.profile.profile.mobileno
                      : ""}
                  </Text>

                  <Text note style={styles.emailAddress}>
                    Email address:{" "}
                    {this.props.profile.profile !== null
                      ? this.props.profile.profile.email
                      : ""}
                  </Text>
                </CardItem>
              </Card>

              <View style={styles.btnContainer}>
                <Button
                  block
                  primary
                  style={styles.buttonOne}
                  onPress={() => {}}
                >
                  <Text style={styles.btnTxt}>Forgot Password?</Text>
                </Button>
                <Button
                  block
                  primary
                  style={styles.butttonTwo}
                  onPress={() => {}}
                >
                  <Text style={styles.btnTxt}>Edit Profile</Text>
                </Button>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  loadProfileRequest: (accessToken, userId) =>
    dispatch(actions.loadProfileRequest(accessToken, userId))
});

const mapStateToProps = state => ({
  currentUser: state.login.currentUser,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
