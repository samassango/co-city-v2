import React from "react";

import { StyleSheet, View } from "react-native";
import { TouchableOpacity, Platform, ImageBackground } from "react-native";
import { Container, Content, Text } from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import styles from "./styles";

export default class IncidentReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
      data: [
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
      ],
      lstCategories: []
    };
  }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>report</Text>
      // </View>
      <Container>
        <Content
          bounces={true}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          style={styles.contentChannel}
        >
          <View>
            <Grid>
              <Row key={0}>
                <Col key={this.state.data[0].categoryId}>
                  <TouchableOpacity
                    key={this.state.data[0].categoryId}
                    onPress={() => {}}
                  >
                    <ImageBackground
                      key={this.state.data[0].categoryId}
                      source={require("../../../assets/NewsIcons/Icons_0018_Fight_Icon.png")}
                      style={styles.channelImg}
                    >
                      <Text
                        style={
                          Platform.OS === "android"
                            ? styles.achannelImgText
                            : styles.ioschannelImgText
                        }
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </Col>
                <Col key={this.state.data[1].categoryId}>
                  <TouchableOpacity
                    key={this.state.data[1].categoryId}
                    onPress={() => {}}
                  >
                    <ImageBackground
                      key={this.state.data[1].categoryId}
                      source={require("../../../assets/NewsIcons/Icons_0011_Gun_Icon.png")}
                      style={styles.channelImg}
                    >
                      <Text
                        style={
                          Platform.OS === "android"
                            ? styles.achannelImgText
                            : styles.ioschannelImgText
                        }
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row key={1}>
                <Col key={this.state.data[2].categoryId}>
                  <TouchableOpacity
                    key={this.state.data[2].categoryId}
                    onPress={() => {}}
                  >
                    <ImageBackground
                      key={this.state.data[2].categoryId}
                      source={this.state.data[2].categoryIcon}
                      style={styles.channelImg}
                    >
                      <Text
                        style={
                          Platform.OS === "android"
                            ? styles.achannelImgText
                            : styles.ioschannelImgText
                        }
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </Col>
                <Col key={this.state.data[3].categoryId}>
                  <TouchableOpacity
                    key={this.state.data[3].categoryId}
                    onPress={() => {}}
                  >
                    <ImageBackground
                      key={this.state.data[3].categoryId}
                      source={this.state.data[3].categoryIcon}
                      style={styles.channelImg}
                    >
                      <Text
                        style={
                          Platform.OS === "android"
                            ? styles.achannelImgText
                            : styles.ioschannelImgText
                        }
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row key={2}>
                <Col key={this.state.data[4].categoryId}>
                  <TouchableOpacity
                    key={this.state.data[4].categoryId}
                    onPress={() => {}}
                  >
                    <ImageBackground
                      key={this.state.data[4].categoryId}
                      source={this.state.data[4].categoryIcon}
                      style={styles.channelImg}
                    >
                      <Text
                        style={
                          Platform.OS === "android"
                            ? styles.achannelImgText
                            : styles.ioschannelImgText
                        }
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </Col>
                <Col key={this.state.data[5].categoryId}>
                  <TouchableOpacity
                    key={this.state.data[5].categoryId}
                    onPress={() => {}}
                  >
                    <ImageBackground
                      key={this.state.data[5].categoryId}
                      source={this.state.data[5].categoryIcon}
                      style={styles.channelImg}
                    >
                      <Text
                        style={
                          Platform.OS === "android"
                            ? styles.achannelImgText
                            : styles.ioschannelImgText
                        }
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row key={3}>
                <Col key={this.state.data[6].categoryId}>
                  <TouchableOpacity
                    key={this.state.data[6].categoryId}
                    onPress={() => {}}
                  >
                    <ImageBackground
                      key={this.state.data[6].categoryId}
                      source={this.state.data[6].categoryIcon}
                      style={styles.channelImg}
                    >
                      <Text
                        style={
                          Platform.OS === "android"
                            ? styles.achannelImgText
                            : styles.ioschannelImgText
                        }
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </Col>
                <Col key={this.state.data[7].categoryId}>
                  <TouchableOpacity
                    key={this.state.data[7].categoryId}
                    onPress={() => {}}
                  >
                    <ImageBackground
                      key={this.state.data[7].categoryId}
                      source={this.state.data[7].categoryIcon}
                      style={styles.channelImg}
                    >
                      <Text
                        style={
                          Platform.OS === "android"
                            ? styles.achannelImgText
                            : styles.ioschannelImgText
                        }
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
          </View>
        </Content>
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
