import { createStackNavigator } from "react-navigation-stack"
import { PrimaryNavigator } from "./primary-navigator"

// prettier-ignore
import {
  TransactionListScreen,
} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
  {
    transactionListScreen: { screen: TransactionListScreen },
    primaryStack: { screen: PrimaryNavigator },
  },
  {
    initialRouteName: 'transactionListScreen',
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
