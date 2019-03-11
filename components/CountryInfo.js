import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import flags from "../Images/flags";

export default class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const country = navigation.getParam("country");
    return (
      <View>
        <Image
          style={[
            styles.profileImgContainer,
            { borderColor: "black", borderWidth: 2 }
          ]}
          source={flags[country.alpha2Code.toLowerCase()]}
        />
        <Text style={styles.text}>
          Name: <Text style={styles.content}>{country.name}</Text>
        </Text>
        <Text style={styles.text}>
          Demonym: <Text style={styles.content}>{country.demonym}</Text>
        </Text>
        <Text style={styles.text}>
          Capital: <Text style={styles.content}>{country.capital}</Text>
        </Text>
        <Text style={styles.text}>
          callingCodes:{" "}
          {country.callingCodes.map((item, i) => (
            <Text style={styles.content} key={i}>
              {item + " "}
            </Text>
          ))}
        </Text>
        <Text style={styles.text}>
          Region: <Text style={styles.content}>{country.region}</Text>
        </Text>
        <Text style={styles.text}>
          Sub Region: <Text style={styles.content}>{country.subregion}</Text>
        </Text>
        <Text style={styles.text}>
          Population: <Text style={styles.content}>{country.population}</Text>
        </Text>
        <Text style={styles.text}>
          Area: <Text style={styles.content}>{country.area}</Text>
        </Text>
        <Text style={styles.text}>
          Time Zones:
          {country.timezones.map((item, i) => (
            <Text style={styles.innerTex} key={i}>
              {item + " "}
            </Text>
          ))}
        </Text>
        <Text style={styles.text}>
          Borders:
          {country.borders.map((item, i) => (
            <Text style={styles.innerTex} key={i}>
              {item + " "}
            </Text>
          ))}
        </Text>
        <Text style={styles.text}>
          Currencies:
          <Text style={styles.content}>{" " + country.currencies[0].name}</Text>
        </Text>
        <Text style={styles.text}>
          TopLevelDomain:
          <Text style={styles.content}>{" " + country.topLevelDomain[0]}</Text>
        </Text>
        <Text style={styles.text}>
          NativeName:
          <Text style={styles.content}>{" " + country.nativeName}</Text>
        </Text>
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
    backgroundColor: "#d9a2f1",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    borderRadius: 50
  },
  text: {
    color: "black",
    fontSize: 22,
    alignSelf: "center"
  },
  innerTex: {
    fontSize: 13,
    fontWeight: "700"
  },
  content: {
    fontWeight: "700"
  },
  profileImgContainer: {
    backfaceVisibility: "visible",
    marginBottom: 20,
    marginTop: 70,
    height: 150,
    width: 150,
    alignSelf: "center"
  }
});
