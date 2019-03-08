import React from "react";
import GamePage from "./GamePage";
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
      button: false
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

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/earth.png")} />
        <Text style={styles.heading}> I guess </Text>

        <TouchableHighlight
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableHighlight>

        <ActivityIndicator animating={this.state.showProgress} size="large" />
        <Text>{this.state.countrie} </Text>
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
}

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 130
  },
  container: {
    alignItems: "center",
    paddingTop: 150
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "900"
  },
  button: {
    height: 50,
    backgroundColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 40,
    justifyContent: "center",
    borderRadius: 50
  },
  buttonText: {
    fontSize: 22,
    color: "#FFF",
    alignSelf: "center"
  },
  loader: {}
});

export default Lala;
