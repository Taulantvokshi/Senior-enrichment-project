import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  AsyncStorage,
  Alert
} from "react-native";

import Home from "./Home";
import flags from "../Images/flags";
import { _countryName } from "../util/generateLogic";
import { remove } from "../util/generateLogic";
import AreaButtons from "./ArreaButtons";
let winnerContry;
export default class Areagame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goHome: false,
      gameStatus: false,
      counter: 0
    };
    this.getScore = this.getScore.bind(this);
    this.sata = this.sata.bind(this);
    this.getGameStatus = this.getGameStatus.bind(this);
  }
  createAlpha2Codes(cleanStates) {
    let arr = [];
    for (let i = 0; i < 2; i++) {
      arr.push(
        cleanStates[
          Math.floor(Math.random() * Object.keys(flags).length)
        ].alpha2Code.toLowerCase()
      );
    }
    return arr;
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

    const reandomTwoContries = this.createAlpha2Codes(cleanStates);

    const countryName = _countryName(reandomTwoContries[0], cleanStates);
    const secondCountrie = _countryName(reandomTwoContries[1], cleanStates);
    const bothContries = [countryName, secondCountrie];

    if (bothContries[0].area >= bothContries[1].area) {
      winnerContry = bothContries[0];
    } else if (bothContries[1].area > bothContries[0].area) {
      winnerContry = bothContries[1];
    }

    if (this.state.goHome) {
      return <Home />;
    }
    if (this.state.gameStatus === true) {
      // Alert.alert("Game Over", "Good luck next time!", {
      //   text: "OK",
      //   onPress: () => <Home />,
      //   style: "cancel"
      // });
      return <Home />;
    }
    return (
      <View>
        <Text style={styles.count}>{this.state.counter}</Text>
        <Text style={styles.titles}>Which country has a bigger area</Text>
        {bothContries.map((contry, i) => {
          return (
            <AreaButtons
              key={i}
              contry={contry}
              alpha2CodeImage={reandomTwoContries[i]}
              allCountries={winnerContry}
              score={this.getScore}
              gameStatus={this.getGameStatus}
            />
          );
        })}

        <Button
          title="Go Home"
          onPress={() => this.setState({ goHome: true })}
        />
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
  },
  titles: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "500"
  }
});
