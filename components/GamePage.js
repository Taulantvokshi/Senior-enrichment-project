import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableHighlight
} from "react-native";
import flags from "../Images/flags";
import { _randomCountry, _countryName, _shuffle } from "../util/generateLogic";
import GuessButton from "./GuessButtons";

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      gameStatus: false
    };
  }

  componentDidMount() {}

  render() {
    const state = this.props.state.countries;
    const alpha2Code = state[
      Math.floor(Math.random() * Object.keys(flags).length)
    ].alpha2Code.toLowerCase();

    const countryName = _countryName(alpha2Code, state);
    const countriesArray = _randomCountry(state);
    countriesArray.push(countryName);
    const shuffeltGesses = _shuffle(countriesArray);
    console.log(this.state.gameStatus);

    return (
      <View>
        <Text style={styles.count}>{this.state.count}</Text>

        <Image style={styles.stretch} source={flags[alpha2Code]} />
        {shuffeltGesses.map(countrie => {
          return (
            <GuessButton
              key={countrie}
              realCountrie={countryName}
              countrie={countrie}
              status={this.props.status}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    backfaceVisibility: "visible",
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 20,
    borderColor: "#d6d7da"
  },
  texts: {
    alignSelf: "center"
  },
  count: {
    alignSelf: "center",
    margin: 10,
    fontWeight: "900",
    fontSize: 50
  },
  button: {
    height: 50,
    backgroundColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 50
  },
  buttonText: {
    fontSize: 22,
    color: "#FFF",
    alignSelf: "center"
  },

  topButton: {
    marginTop: 30,
    height: 50,
    backgroundColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 50
  }
});
export default GamePage;
