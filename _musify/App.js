import React from "react";
import MainView from "./components/MainView";
import ListeningView from "./components/ListeningView";
import ResultView from "./components/ResultView";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const HomeStack = createStackNavigator(
  {
    Main: {
      screen: MainView,
    },
    Listen: {
      screen: ListeningView,
    },
    Result: {
      screen: ResultView,
    },
  },
  { headerMode: "none" }
);

const AppContainer = createAppContainer(HomeStack);

export default function App() {
  return <AppContainer />;
}
