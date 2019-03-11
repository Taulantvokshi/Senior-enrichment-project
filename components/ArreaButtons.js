import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import { AsyncStorage, Alert, Image } from "react-native";
import { View } from "native-base";
import flags from "../Images/flags";
let count = 0;
export default class AreaButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      winnerContry: 0,
      lostGame: false,
      onCliced: false
    };
    this.guessButton = this.guessButton.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  async storeData(data) {
    return await AsyncStorage.setItem("areaCountData", JSON.stringify(data));
  }

  render() {
    const contry = this.props.contry;

    return (
      <View>
        <Image
          style={[
            styles.profileImgContainer,
            { borderColor: "black", borderWidth: 2 }
          ]}
          source={flags[this.props.alpha2CodeImage]}
        />
        <TouchableHighlight
          style={styles.topButton}
          onPress={() => this.guessButton(this.props.contry)}
        >
          <Text style={styles.buttonText}>{contry.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
  guessButton(contry) {
    if (this.props.allCountries.area === contry.area) {
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
        this.setState({
          counter: count,
          onCliced: true,
          lostGame: true
        });
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
    backgroundColor: "#a1dd70",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 50
  },
  profileImgContainer: {
    backfaceVisibility: "visible",
    marginBottom: 20,
    marginTop: 20,
    height: 150,
    width: 150,
    alignSelf: "center",
    borderRadius: 70
  }
});
