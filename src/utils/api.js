export const apiRequest = {
  baseUrl: "https://tshwanesafetyapi.herokuapp.com/api",
  user: {
    login: "/TshwaneUsers/login",
    logout: "/TshwaneUsers/logout",
    profile: "/TshwaneUsers/:id",
    prifileUpdate: "/TshwaneUsers/update/:id"
  },
  createUserAccount: "/TshwaneUsers",
  createOrReplaceUserAccount: "/TshwaneUsers/replaceOrCreate",
  passwortReset: {
    resetWithEmail: "/TshwaneUsers/resetTshwaneUserPassword",
    resetwithResetToken: "/TshwaneUsers/reset-password"
  },
  suburbs: "/Suburbs",
  categories: {
    list: "/Categories",
    subCategories: {
      list: "/Categories/:categoryId/subCategories"
    },
    incident: "/Categories/:categoryId"
  },
  incidents: {
    postIncident: "/Incidents",
    area: "/Areas",
    channels: "/Channels",
    regions: "/Regions",
    getIncident: "/Incidents/:id"
  },
  enquiries: {
    postEnquiry: "/Enquiries",
    types: "/InquiryTypes"
  },
  reqisterDevice: "/RegisteredDevices",
  tokenRequest: "/Users/:userId/accessTokens",
  notifications: "/Notifications",
  viewNotification: "/Notifications/:notificationId",
  history: "/histories",
  subCategory: "/SubCategories/:subCategoryId"
};

export const oneSignalApi = {
  baseUrl: "https://onesignal.com/api/v1",
  pushApi: "/notifications",
  addDeviceApi: "/players",
  checkDevice: "/players/:id"
};

export const apiOneSignal = {
  oneSignalNotificationsUrl: "https://onesignal.com/api/v1/notifications"
};

export function googleApiRequest(lat, lon, type, radius, keyword) {
  //    let googlePlaces = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lon+'&radius='+radius+'&type='+type+'&keyword='+keyword+'&key=AIzaSyBlPw7OtX7_n2qXvJjGpztklBM52okqRkE';
  let googlePlaces =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat +
    "," +
    lon +
    "&radius=" +
    radius +
    "&type=" +
    type +
    "&key=AIzaSyBlPw7OtX7_n2qXvJjGpztklBM52okqRkE";
  return googlePlaces;
}

export function googleApiDirectionsRequest(
  yourVicinityLocation,
  yourDestinationVicinity
) {
  let googleDirection =
    "https://maps.googleapis.com/maps/api/directions/json?origin=" +
    yourVicinityLocation +
    "&destination=" +
    yourDestinationVicinity +
    "&key=AIzaSyBlPw7OtX7_n2qXvJjGpztklBM52okqRkE";
  return googleDirection;
}

//https://tshwanesafetyapi.herokuapp.com/explorer/
