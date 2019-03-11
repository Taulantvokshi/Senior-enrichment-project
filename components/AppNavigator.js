import { createAppContainer, createStackNavigator } from "react-navigation";
import Root from "../Root";
import Home from "./Home";
import GamePage from "./GamePage";
import CountryInfo from "./CountryInfo";
import EachContry from "./EachCountry";
const AppNavigator = createStackNavigator({
  Root: { screen: Root },
  GamePage: { screen: GamePage },
  Home: { screen: Home },
  CountryInfo: { screen: CountryInfo },
  EachContry: { screen: EachContry }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
