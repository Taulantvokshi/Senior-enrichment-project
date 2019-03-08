import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import { AsyncStorage } from "react-native";
import { View } from "native-base";
let count = 0;
export default class GessButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
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
    if (this.props.countrie === this.props.realCountrie) {
      setTimeout(() => {
        count++;
        this.storeData(count);
        this.setState({ counter: count });
        this.props.score(this.state.counter);
      }, 500);
    } else {
      setTimeout(() => {
        count = 0;
        this.storeData(count);
        this.setState({ counter: count });
        this.props.score(this.state.counter);
      }, 500);
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
