import React from "react";
import { withNavigation } from "react-navigation";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { SearchBar } from "react-native-elements";
import EachCountry from "./EachCountry";
class LearnAboutCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    const state = this.props.state.countries;
    const { navigate } = this.props.navigation;

    return (
      <View>
        <SearchBar
          placeholder="Search Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <ScrollView>
          <TouchableHighlight
            style={styles.topButton}
            onPress={() => navigate("Home")}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableHighlight>
          {state
            .filter(country => {
              return country.name
                .toLowerCase()
                .includes(this.state.search.toLowerCase());
            })
            .map((country, i) => {
              return <EachCountry key={i} country={country} />;
            })}
        </ScrollView>
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
    backgroundColor: "#053f5e",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 10
  }
});
export default withNavigation(LearnAboutCountries);
