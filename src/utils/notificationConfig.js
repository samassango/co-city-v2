import { Notifications } from "expo";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
// import * as firebase from "firebase";
import { apiRequest } from "./api";
// const firebaseConfig = {
//   apiKey: "AIzaSyBaCXKxwczFQzLE2HL1fQMn-Ueoq8mfSUM",
//   authDomain: "pulegofcm.firebaseapp.com",
//   databaseURL: "pulegofcm.firebaseapp.com",
//   projectId: "pulegofcm",
//   storageBucket: "tshwanesafety-175608.appspot.com",
//   messagingSenderId: "333227408440"
// };

// export const appFirebase = firebase.initializeApp(firebaseConfig);
import { _deviceInfo, _getDeviceInfo } from "./sqliteHelper";

export async function registerForPushNotificationsAsync(userId, accessToken) {
  console.log("UpdatePushToken>>", userId);
  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS
  let { status: existingStatus } = await Permissions.askAsync(
    Permissions.NOTIFICATIONS
  );

  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return;
  }

  if (userId !== null) {
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    let params = {
      deviceName: Constants.deviceName,
      deviceId: Constants.deviceId,
      pushToken: token,
      dateUpdate: new Date().getTime()
    };
    _deviceInfo(params);

    console.log("Token", token);

    let requestApi =
      apiRequest.sercviceBaseUrl +
      "/TshwaneUsers/" +
      userId +
      "?access_token=" +
      accessToken;
    console.log("RequestApi", requestApi);
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    return fetch(requestApi, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        deviceid: token
      })
    })
      .then(success => success.json())
      .then(response => {
        console.log("Success>>", response);
      })
      .then(error => {
        console.log("Error>>", error);
      });
  } else {
    return;
  }
}
