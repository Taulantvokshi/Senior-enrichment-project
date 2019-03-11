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
import { AsyncStorage, Alert } from "react-native";
import { remove } from "../util/generateLogic";
import Home from "./Home";
class GamePage extends React.Component {
  static navigationOptions = {
    title: "Hello"
  };
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: false,
      counter: 0
    };
    this.getScore = this.getScore.bind(this);
    this.sata = this.sata.bind(this);
    this.getGameStatus = this.getGameStatus.bind(this);
  }

  getGameStatus(cb) {
    this.setState({ gameStatus: cb });
  }

  getScore(cb) {
    this.setState({ counter: cb });
  }

  sata() {
    return AsyncStorage.getItem("areaCountData").then(counter => {
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

    const countriesArray = _randomCountry(cleanStates, 3);
    countriesArray.push(countryName.name);
    const shuffeldGesses = _shuffle(countriesArray);

    console.log(countryName.name);
    console.log(alpha2Code);

    if (this.state.gameStatus === true) {
      Alert.alert("Game Over", "Good luck next time!", {
        text: "OK",
        onPress: () => this.sendMeHome(),
        style: "cancel"
      });
      return <Home />;
    }

    return (
      <View>
        <Text style={styles.count}>{this.state.counter}</Text>
        <Image
          style={[
            styles.profileImgContainer,
            { borderColor: "black", borderWidth: 2 }
          ]}
          source={flags[alpha2Code]}
        />
        {shuffeldGesses.map((countrie, i) => {
          return (
            <GuessButton
              key={i}
              realCountrie={countryName}
              countrie={countrie}
              score={this.getScore}
              gameStatus={this.getGameStatus}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 20
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
  },
  profileImgContainer: {
    backfaceVisibility: "visible",
    marginBottom: 60,
    height: 200,
    width: 200,
    alignSelf: "center"
  }
});
export default GamePage;
