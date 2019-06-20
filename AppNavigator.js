import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import Home from "./src/screens/home";
import WelcomeScreen from "./src/screens/welcome";
import SignUp from "./src/screens/signup";
import Login from "./src/screens/login";
import IncidentReport from "./src/screens/report";
import IncidentHistory from "./src/screens/history";
import Profile from "./src/screens/profile";
import NearBy from "./src/screens/nearby";
import IncidentAlert from "./src/screens/alert";
import About from "./src/screens/about";
import Contacts from "./src/screens/contacts";

import Icon from "@expo/vector-icons/Ionicons";
import FontIcon from "@expo/vector-icons/FontAwesome";
import MatIcon from "@expo/vector-icons/MaterialIcons";
import EntypoIcon from "@expo/vector-icons/Entypo";

const HomeStack = createStackNavigator(
  {
    Dashboard: { screen: Home }
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
        )
      };
    }
  }
);

const AlertStack = createStackNavigator(
  {
    Dashboard: { screen: IncidentAlert }
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
        )
      };
    }
  }
);

const IncidentReportStack = createStackNavigator(
  {
    IncidentReport: { screen: IncidentReport }
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
        )
      };
    }
  }
);

const NearByStack = createStackNavigator(
  {
    NearBy: { screen: NearBy }
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
        )
      };
    }
  }
);

const IncidentHistoryStack = createStackNavigator(
  {
    IncidentHistory: { screen: IncidentHistory }
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
        )
      };
    }
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile }
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
        )
      };
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Dashboard",
        drawerIcon: (
          <FontIcon
            style={{ paddingLeft: 5 }}
            onPress={() => {}}
            name="dashboard"
            size={20}
          />
        )
      };
    }
  },
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
