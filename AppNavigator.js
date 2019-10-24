import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { NavigationActions } from "react-navigation";

import Home from "./src/screens/home";
import WelcomeScreen from "./src/screens/login";
import SignUp from "./src/screens/signup";
import IncidentReport from "./src/screens/report";
import IncidentHistory from "./src/screens/history";
import ViewHistory from "./src/screens/viewhistory";
import Profile from "./src/screens/profile";
import NearBy from "./src/screens/nearby";
import NearByInfo from "./src/screens/nearbyInfo";
import IncidentAlert from "./src/screens/alert";
import About from "./src/screens/about";
import Contacts from "./src/screens/contacts";
import ReportingIncident from "./src/screens/reporting";
import PasswordReset from "./src/screens/passwordReset";
import EditProfile from "./src/screens/editProfile";
import AlertView from "./src/screens/alertView";

import Icon from "@expo/vector-icons/Ionicons";
import FontIcon from "@expo/vector-icons/FontAwesome";
import MatIcon from "@expo/vector-icons/MaterialIcons";
import EntypoIcon from "@expo/vector-icons/Entypo";

const HomeStack = createStackNavigator(
  {
    Dashboard: { screen: Home },
    Reporting: { screen: ReportingIncident }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Dashboard",
        headerStyle: {
          backgroundColor: "#1fb7a0"
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() => {
              AsyncStorage.clear();
              navigation.dispatch(
                NavigationActions.navigate({ routeName: "Welcome" })
              );
            }}
            name="md-log-out"
            size={30}
          />
        )
      };
    }
  }
);

const AlertStack = createStackNavigator(
  {
    Dashboard: { screen: IncidentAlert },
    AlertView: { screen: AlertView }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Incidents Alert",
        headerStyle: {
          backgroundColor: "#1fb7a0"
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() => navigation.navigate("Welcome")}
            name="md-log-out"
            size={30}
          />
        )
      };
    }
  }
);

const ContactStack = createStackNavigator(
  {
    Dashboard: { screen: Contacts }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Contacts",
        headerStyle: {
          backgroundColor: "#1fb7a0"
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() => navigation.navigate("Welcome")}
            name="md-log-out"
            size={30}
          />
        )
      };
    }
  }
);

const AboutStack = createStackNavigator(
  {
    Dashboard: { screen: About }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "About",
        headerStyle: {
          backgroundColor: "#1fb7a0"
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() => navigation.navigate("Welcome")}
            name="md-log-out"
            size={30}
          />
        )
      };
    }
  }
);

const IncidentReportStack = createStackNavigator(
  {
    IncidentReport: { screen: IncidentReport },
    Reporting: { screen: ReportingIncident }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Incident Report",
        headerStyle: {
          backgroundColor: "#1fb7a0"
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() => {
              AsyncStorage.clear();
              navigation.navigate("Welcome");
            }}
            name="md-log-out"
            size={30}
          />
        )
      };
    }
  }
);

const NearByStack = createStackNavigator(
  {
    NearBy: { screen: NearBy },
    NearByInfo: { screen: NearByInfo }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Nearby Services",
        headerStyle: {
          backgroundColor: "#1fb7a0"
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() => navigation.navigate("Welcome")}
            name="md-log-out"
            size={30}
          />
        )
      };
    }
  }
);

const IncidentHistoryStack = createStackNavigator(
  {
    IncidentHistory: { screen: IncidentHistory },
    ViewHistory: { screen: ViewHistory }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Case History",
        headerStyle: {
          backgroundColor: "#1fb7a0"
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() =>
              navigation.dispatch(
                NavigationActions.navigate({ routeName: "Welcome" })
              )
            }
            name="md-log-out"
            size={30}
          />
        )
      };
    }
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    PasswordReset: { screen: PasswordReset },
    EditProfile: { screen: EditProfile }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Profile",
        headerStyle: {
          backgroundColor: "#1fb7a0"
        },
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Welcome")}
            name="md-log-out"
            size={30}
          />
        )
      };
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    SignUp: { screen: SignUp }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  // Dashboard: {
  //   screen: HomeStack,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //       title: "Dashboard",
  //       drawerIcon: (
  //         <FontIcon
  //           style={{ paddingLeft: 5 }}
  //           onPress={() => {}}
  //           name="dashboard"
  //           size={20}
  //         />
  //       )
  //     };
  //   }
  // },
  IncidentReport: {
    screen: IncidentReportStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Incident Report",
        drawerIcon: (
          <Icon
            style={{ paddingLeft: 5 }}
            onPress={() => {}}
            name="md-menu"
            size={20}
          />
        )
      };
    }
  },
  Alert: {
    screen: AlertStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Alerts",
        drawerIcon: (
          <Icon
            style={{ paddingLeft: 5 }}
            onPress={() => {}}
            name="md-notifications"
            size={20}
          />
        )
      };
    }
  },
  History: {
    screen: IncidentHistoryStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Case History",
        drawerIcon: (
          <Icon
            style={{ paddingLeft: 5 }}
            onPress={() => {}}
            name="md-time"
            size={20}
          />
        )
      };
    }
  },
  NearByServices: {
    screen: NearByStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Nearby Services",
        drawerIcon: (
          <EntypoIcon
            style={{ paddingLeft: 5 }}
            onPress={() => {}}
            name="location-pin"
            size={20}
          />
        )
      };
    }
  },
  Contacts: {
    screen: ContactStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Contacts",
        drawerIcon: (
          <MatIcon
            style={{ paddingLeft: 5 }}
            onPress={() => {}}
            name="local-phone"
            size={20}
          />
        )
      };
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Profile",
        drawerIcon: (
          <MatIcon
            style={{ paddingLeft: 5 }}
            onPress={() => {}}
            name="face"
            size={20}
          />
        )
      };
    }
  },
  About: {
    screen: AboutStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "About",
        drawerIcon: (
          <Icon
            style={{ paddingLeft: 5 }}
            onPress={() => {}}
            name="md-information-circle-outline"
            size={20}
          />
        )
      };
    }
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
  Auth: { screen: AuthStack }
});
const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
