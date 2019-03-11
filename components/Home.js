import React from "react";
import GamePage from "./GamePage";
import Areagame from "./Areagame";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  Button
} from "react-native";

class Lala extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false,
      countries: [],
      button: false,
      areaGame: false
    };
  }

  componentDidMount() {
    this.setState({ button: false }); // something to check
  }
  render() {
    if (this.state.button) {
      this.state.button = false;
      return <GamePage status={this.getDataBack} state={this.state} />;
    }
    if (this.state.areaGame) {
      this.state.button = false;
      return <Areagame state={this.state} />;
    }

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/earth.png")} />
        <Text style={styles.heading}> Iguess </Text>

        <TouchableHighlight
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Flag's Game</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.areaGameButton.bind(this)}
          style={styles.buttonArea}
        >
          <Text style={styles.buttonText}>Area game</Text>
        </TouchableHighlight>

        <TouchableHighlight
          //onPress={this.areaGameButton.bind(this)}
          style={styles.buttonGdp}
        >
          <Text style={styles.buttonText}>Gdp game</Text>
        </TouchableHighlight>

        <ActivityIndicator animating={this.state.showProgress} size="large" />
        <Text>{this.state.countrie} </Text>

        <Image
          style={styles.image}
          source={require("../assets/continents.png")}
        />
      </View>
    );
  }

  onLoginPressed() {
    this.setState({ showProgress: true });

    fetch("https://restcountries.eu/rest/v2/all")
      .then(results => {
        return results.json();
      })
      .then(results => {
        this.setState({ showProgress: false });
        return results;
      })
      .then(data => {
        this.setState({ countries: data });
        this.setState({ button: true });
      });
  }
  areaGameButton() {
    this.setState({ showProgress: true });

    fetch("https://restcountries.eu/rest/v2/all")
      .then(results => {
        return results.json();
      })
      .then(results => {
        this.setState({ showProgress: false });
        return results;
      })
      .then(data => {
        this.setState({ countries: data });
        this.setState({ areaGame: true });
      });
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 130
  },
  container: {
    alignItems: "center",
    paddingTop: 20
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "900"
  },
  button: {
    marginTop: 50,
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
  buttonArea: {
    height: 50,
    backgroundColor: "#a1dd70",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 50
  },
  buttonGdp: {
    height: 50,
    backgroundColor: "#d9a2f1",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 50
  },
  image: {
    position: "absolute",
    top: 450,
    left: 40,
    width: 300,
    height: 300
  }
});

export default Lala;
