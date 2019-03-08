import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Home from "./components/Home";

export default class Root extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./assets/continents.png")}
        />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  image: {
    position: "absolute",
    top: 450,
    left: 40,
    width: 300,
    height: 300
  }
});
