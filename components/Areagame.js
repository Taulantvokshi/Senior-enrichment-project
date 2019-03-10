import React from "react";
import Home from "./Home";
import flags from "../Images/flags";
import { _countryName } from "../util/generateLogic";
import { remove } from "../util/generateLogic";
import AreaButtons from "./ArreaButtons";
import { Text, StyleSheet, View, Button } from "react-native";

export default class Areagame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goHome: false,
      counter: 0
    };
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

  render() {
    const state = this.props.state.countries;
    const cleanStates = state.filter(contry => {
      return !remove.includes(contry.alpha2Code.toLowerCase());
    });

    const reandomTwoContries = this.createAlpha2Codes(cleanStates);

    const countryName = _countryName(reandomTwoContries[0], cleanStates);
    const secondCountrie = _countryName(reandomTwoContries[1], cleanStates);
    const randomContriesNames = [countryName, secondCountrie];

    if (this.state.goHome) {
      return <Home />;
    }
    return (
      <View>
        <Text style={styles.count}>{this.state.counter}</Text>
        {randomContriesNames.map((contry, i) => {
          return (
            <AreaButtons
              key={i}
              contry={contry}
              alpha2CodeImage={reandomTwoContries[i]}
              allCountries={randomContriesNames}
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
  }
});
