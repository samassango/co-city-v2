import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Item,
  Input,
  Left,
  Right,
  Body,
  ListItem,
  List,
  Switch,
  Card,
  CardItem
} from "native-base";
import styles from "./styles";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
  }
  render() {
    return (
      <Container contentOffset={this.state.offset} scrollEnabled={false}>
        <ImageBackground
          source={require("../../../assets/BG-signUp_2.png")}
          style={styles.container}
        >
          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.cardContainer}>
              <Card style={styles.card}>
                <CardItem header>
                  <Text>About Tshwane Safety</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      Tshwane Safety App is a mobile platfom that provides
                      citizens in the City of Tshwane the ability to report and
                      provide annonymous tip-offs of incidents of crime,
                      corruption, traffic, and by-law infringements to the
                      Tshwane Metro Police Department (TMPD). Such data is
                      instentaneously recieved by the TMPD for appropriate
                      action to be taken. The app also provides other services
                      aimed at improving community safety.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text style={{ color: "#666666" }}>Version 2.0.0</Text>
                </CardItem>
              </Card>

              <Card style={styles.card}>
                <CardItem header>
                  <Text>Terms of Use</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <View style={{ marginBottom: 5 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        DEEMED ACCEPTANCE
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        BY CONTINUING TO USE THIS APPLICATION OR USING ANY
                        SERVICES OFFERED YOU ARE DEEMED TO HAVE ACCEPTED AND
                        AGREED TO THE TERMS AND PROVISIONS HERIN, IF YOU DO NOT
                        AGREE TO THESE TERMS DO NOT MAKE ANY USE OF THIS
                        PRODUCT.
                      </Text>
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 5 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        SECURITY AND PRIVACY POLICY
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        TMPD (and those that work with TMPD to provide this
                        service) reserves the right to disclose any information
                        posted or made accessible on the mobile application or
                        the Unstructured Supplementary Service Data (USSD)
                        services interface to the relevant internal and external
                        parties for the purpose of the service TMPD (and those
                        that work with TMPD to provide this service) do not
                        distribute any of your personal information to third
                        parties; unless requested by you.
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        In addition, TMPD (and those that work with TMPD to
                        provide this service) will not sell or disclose your
                        personal information to third parties unless you give us
                        your specific permission to do so. TMPD (and those that
                        work with TMPD to provide this service) may be obligated
                        to disclose personal information to meet any legal or
                        regulatory requirements of applicable laws.
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        It is solely the responsibility of the user to protect
                        your privacy and any such infringements by selecting the
                        option to be an anonymous user when reporting an
                        incident on Co-Safety. TMPD (and those that work with
                        TMPD to provide this service) reserves the right to
                        amend or modify this Security and Privacy statement at
                        any time and will provide you appropriate notice, such
                        changes shall not be retroactive.
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        TMPD reserves the right to warn and/or take any legal
                        action against any usage of service that may be deemed
                        by TMPD as abuse of service or unlawful use of service.
                      </Text>
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 5 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        LIMITATION OF LIABILITY
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        In no event will TMPD (and those that work with TMPD to
                        provide this service) be held liable for any loss of use
                        or direct, indirect, special, incidental or
                        consequential damages of any sort of the Co-safety
                        products or subsidiary thereof.
                      </Text>
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 5 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        INTELLECTUAL PROPERTY
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        TMPD (and those that work with TMPD to provide this
                        service) reserves all copyrights of all Co-safety
                        products. All infringements will therefore be reported.
                      </Text>
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 5 }}>
                      <Text style={{ fontWeight: "bold" }}>DISCLAIMER</Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        TMPD (and those that work with TMPD to provide this
                        service) will not be responsible for any information or
                        accuracy thereof made accessible on any of the Co-Safety
                        Products. Nor will it be responsible for taking or
                        failure of any action against the incidents by the
                        relevant authorities.
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        TMPD (and those that work with TMPD to provide this
                        service) disclaims all and any warranties with regard to
                        the Co-Safety, express or implied, including, without
                        limitation, any implied warranties of merchantability,
                        fitness for a particular purpose, accuracy of data, and
                        non-infringement; do not guarantee that the services
                        will function without interruption or errors, and
                        provide the service (including content and information)
                        on an “as is” and “as available” basis.
                      </Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                      <Text>
                        The laws of the Republic of South Africa (RSA) govern
                        this warranty and shall apply irrespective of what
                        country's laws apply to you.
                      </Text>
                    </View>
                  </Body>
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
