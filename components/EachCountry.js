import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";

class EachCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }
  render() {
    const { country } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableHighlight
          style={styles.topButton}
          onPress={() => navigate("CountryInfo", { country: country })}
        >
          <Text style={styles.buttonText}>{country.name}</Text>
        </TouchableHighlight>
      </View>
    );
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
    backgroundColor: "#77628c",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 10
  }
});

export default withNavigation(EachCountry);
