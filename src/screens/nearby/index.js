import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Thumbnail,
  Fab,
  Toast,
  Spinner,
  Item
} from "native-base";
import styles from "./styles";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MapView from "react-native-maps";

import {
  generateMarkerObject,
  fitToCoordinatesMarkers
} from "../../utils/utilsHelper";

import * as actions from "../../actions/nearby.actions";

import MarkerView from "./components/marker";

const police = require("../../../assets/mapIcon/shield.png");
const hospital = require("../../../assets/mapIcon/firstaid.png");
const fire = require("../../../assets/mapIcon/flame.png");

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
};

const stylesMap = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    justifyContent: "flex-end"
  },
  map: {
    ...StyleSheet.absoluteFillObject
    // flex: 0.5
  }
});

const ASPECT_RATIO = deviceWidth / deviceHeight;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO - 0.01;

class NearBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationIsUpdated: false,
      active: true,
      longitude: 0,
      latitude: 0,
      accuracy: 0,
      errorMessage: "",
      accessToken: "",
      type: "police",
      radius: 10000,
      keyword: "metro",
      markers: [],
      region: null,
      accessToken: "",
      regionObject: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  componentWillMount() {
    this._handleLocationPositionAsync();
  }
  _handleLocationPositionAsync = async () => {
    return await Location.watchPositionAsync(
      GEOLOCATION_OPTIONS,
      this.locationChanged
    );
  };

  locationChanged = location => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };

    this.setState({ location, regionObject: region });
    console.log("regionState", region);
    this._getGooglePlacesAsync();
  };

  componentDidMount() {
    this._getGooglePlacesAsync();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.googlePlaces)
      this.setState({
        markers: generateMarkerObject(nextProps.googlePlaces)
      });
  }

  _getGooglePlacesAsync = async () => {
    await this.props.loadGooglePlacesRequest(
      this.state.regionObject.latitude,
      this.state.regionObject.longitude,
      this.state.type,
      this.state.radius,
      this.state.keyword
    );
  };

  _onChangeCategoryServiceAsync = async (type, keyword) => {
    this.setState({ type, keyword });
    await this._getGooglePlacesAsync();
  };

  onRegionChange(results) {
    this.setState({ regionObject: results });
  }

  _handleFabOnPress(decision) {
    switch (decision) {
      case 1: {
        this.props.loadGooglePlacesRequest(
          this.state.regionObject.latitude,
          this.state.regionObject.longitude,
          "police",
          this.state.radius,
          "police"
        );
      }
      case 2: {
        this.props.loadGooglePlacesRequest(
          this.state.regionObject.latitude,
          this.state.regionObject.longitude,
          "fire_station",
          this.state.radius,
          "fire station"
        );
      }
      case 3: {
        this.props.loadGooglePlacesRequest(
          this.state.regionObject.latitude,
          this.state.regionObject.longitude,
          "hospital",
          this.state.radius,
          "hospital"
        );
      }
    }
  }

  render() {
    let contactArrayobject = [
      { type: "police", contact: "10111" },
      { type: "fire", contact: "10177" },
      { type: "hospital", contact: "10177" }
    ];

    let index = contactArrayobject.findIndex(item => {
      return item.type === this.state.type;
    });
    let typeObject = contactArrayobject[index];

    let googlePlaces = this.props.googlePlaces;

    let markerlist = [];
    if (googlePlaces) markerlist = generateMarkerObject(googlePlaces);

    let markers = [];
    // if (googlePlaces) markers = fitToCoordinatesMarkers(googlePlaces);
    // console.log("markers", markers);
    const currentVicinity = this.state.latitude + "," + this.state.longitude;

    return (
      <Container>
        <View style={stylesMap.container}>
          <MapView
            ref={ref => (ref === null ? null : ref.fitToElements(true))}
            style={stylesMap.map}
            region={this.state.regionObject}
            onRegionChangeComplete={region =>
              this.setState({ regionObject: region })
            }
            loadingEnabled={true}
            mapType={"standard"}
            showsUserLocation={true}
            // showsCompass={true}
            loadingIndicatorColor={"#01cca1"}
          >
            {googlePlaces !== null &&
              markerlist.map((marker, i) => {
                // console.log("marker",marker)
                return (
                  <MapView.Marker
                    coordinate={marker.LatLng}
                    pinColor={"#990000"}
                    key={i}
                  >
                    <MapView.Callout
                      tooltip={true}
                      onPress={() => {
                        this.props.navigation.navigate("NearByInfo", {
                          params: {
                            marker: marker,
                            currentVicinity: currentVicinity,
                            destinationVicinity: marker.details.vicinity,
                            typeObject: typeObject
                          }
                        });
                      }}
                    >
                      <MarkerView
                        title={marker.details.name}
                        description={marker.details.vicinity}
                        currentVicinity={currentVicinity}
                      />
                    </MapView.Callout>
                  </MapView.Marker>
                );
              })}
          </MapView>
          <View transparent>
            {this.props.isLoading ? <Spinner color="#01cca1" /> : null}
          </View>

          <View transparent>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: "#01cca1" }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}
            >
              <Icon name="menu" />

              <TouchableOpacity
                style={{ alignSelf: "flex-start", backgroundColor: "#3B5998" }}
                onPress={this._handleFabOnPress.bind(this, 1)}
              >
                <Thumbnail source={police} style={styles.iconPic} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignSelf: "center", backgroundColor: "#DD5144" }}
                onPress={this._handleFabOnPress.bind(this, 2)}
              >
                <Thumbnail source={fire} style={styles.iconPic} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignSelf: "flex-end", backgroundColor: "#34A34F" }}
                onPress={this._handleFabOnPress.bind(this, 3)}
              >
                <Thumbnail source={hospital} style={styles.iconPic} />
              </TouchableOpacity>
            </Fab>
          </View>
        </View>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadGooglePlacesRequest: (lat, lon, type, radius, keyword) =>
    dispatch(actions.loadGooglePlacesRequest(lat, lon, type, radius, keyword))
});

const mapStateToProps = state => ({
  isLoading: state.nearby.isLoading,
  isLoaded: state.nearby.isLoaded,
  error: state.nearby.error,
  googlePlaces: state.nearby.googlePlaces,
  googleDirection: state.nearby.googleDirection
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearBy);
