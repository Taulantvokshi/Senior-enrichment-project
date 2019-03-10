import { createAppContainer, createStackNavigator } from "react-navigation";
import Root from "../Root";
import Home from "./Home";
import GamePage from "./GamePage";

const AppNavigator = createStackNavigator({
  Root: { screen: Root },
  GamePage: { screen: GamePage },
  Home: { screen: Home }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
