import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import Home from "./Home";
export default class GessButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: false,
      counter: 0
    };
  }

  render() {
    if (this.state.winner) {
      <Home />;
    }
    return (
      <TouchableHighlight
        style={styles.topButton}
        onPress={this.guessButton.bind(this)}
      >
        <Text style={styles.buttonText}>{this.props.countrie}</Text>
      </TouchableHighlight>
    );
  }
  guessButton() {
    if (this.props.countrie === this.props.realCountrie) {
      this.setState({ winner: true });
      console.log("winner");
    } else {
      console.log("loose");
    }
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 22,
    color: "#FFF",
    alignSelf: "center"
  },

  topButton: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 50
  }
});
