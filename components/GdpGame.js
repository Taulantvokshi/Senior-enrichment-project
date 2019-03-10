import React from "react";
import Home from "./Home";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
  Button
} from "react-native";

export default class GdpGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goHome: false
    };
  }
  render() {
    if (this.state.goHome) {
      return <Home />;
    }
    return (
      <View>
        <Text>Hello</Text>
        <Button
          title="Go Home"
          onPress={() => this.setState({ goHome: true })}
        />
      </View>
    );
  }
}
