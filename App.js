import React from "react";
import AppContainer from "./components/AppNavigator";
import { Platform, StatusBar } from "react-native";

export default class App extends React.Component {
  render() {
    {
      Platform.OS === "ios" && <StatusBar barStyle="default" />;
    }
    return <AppContainer />;
  }
}
