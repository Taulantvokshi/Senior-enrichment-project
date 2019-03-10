import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import { AsyncStorage, Alert } from "react-native";
import { View } from "native-base";
let count = 0;

export default class GessButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      onCliced: false,
      lostGame: false
    };
    this.storeData = this.storeData.bind(this);
  }

  async storeData(data) {
    return await AsyncStorage.setItem("count", JSON.stringify(data));
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.topButton}
          onPress={this.guessButton.bind(this)}
        >
          <Text style={styles.buttonText}>{this.props.countrie}</Text>
        </TouchableHighlight>
      </View>
    );
  }

  guessButton() {
    if (this.props.countrie === this.props.realCountrie.name) {
      setTimeout(() => {
        count++;
        this.storeData(count);
        this.setState({ counter: count });
        this.props.score(this.state.counter);
        this.setState({ lostGame: false });
      }, 300);
    } else {
      setTimeout(() => {
        count = 0;
        this.storeData(count);
        this.setState({ counter: count, onCliced: true, lostGame: true });
        this.props.score(this.state.counter);
        this.props.gameStatus(this.state.lostGame);
      }, 300);
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
