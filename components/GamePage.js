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
import { AsyncStorage } from "react-native";
import { remove } from "../util/generateLogic";
let count = 0;
class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: false,
      counter: 0
    };
    this.getScore = this.getScore.bind(this);
    this.sata = this.sata.bind(this);
  }

  getScore(cb) {
    this.setState({ counter: cb });
  }
  sata() {
    return AsyncStorage.getItem("count").then(counter => {
      return JSON.parse(counter);
    });
  }

  render() {
    const state = this.props.state.countries;
    const cleanStates = state.filter(contry => {
      return !remove.includes(contry.alpha2Code.toLowerCase());
    });

    const alpha2Code = cleanStates[
      Math.floor(Math.random() * Object.keys(flags).length)
    ].alpha2Code.toLowerCase();

    const countryName = _countryName(alpha2Code, cleanStates);

    const countriesArray = _randomCountry(cleanStates);
    countriesArray.push(countryName);
    const shuffeldGesses = _shuffle(countriesArray);
    console.log(countryName);
    console.log(alpha2Code);
    return (
      <View>
        <Text style={styles.count}>{this.state.counter}</Text>
        <Image style={styles.stretch} source={flags[alpha2Code]} />
        {shuffeldGesses.map((countrie, i) => {
          return (
            <GuessButton
              key={i}
              realCountrie={countryName}
              countrie={countrie}
              score={this.getScore}
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
