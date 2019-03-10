import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
import { AsyncStorage, Alert, Image } from "react-native";
import { View } from "native-base";
import flags from "../Images/flags";

export default class AreaButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winnerContry: 0
    };
    this.guessButton = this.guessButton.bind(this);
  }
  componentDidMount() {
    const bothContries = this.props.allCountries;
    if (bothContries[0].area >= bothContries[1].area)
      this.setState({ winnerContry: bothContries[0].area });
    else this.setState({ winnerContry: bothContries[1].area });
  }

  render() {
    console.log(
      this.props.allCountries[0].area,
      this.props.allCountries[0].name
    );
    console.log(
      this.props.allCountries[1].area,
      this.props.allCountries[1].name
    );
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
    if (contry.area >= this.state.winnerContry) {
      console.log("winner");
    } else {
      console.log("looser");
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
