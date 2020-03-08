import { createStackNavigator } from "react-navigation-stack"
import { TransactionListScreen } from "../screens/transaction-list-screen"

export const PrimaryNavigator = createStackNavigator(
  {
    transactionListScreen: { screen: TransactionListScreen },
  },
  {
    initialRouteName: 'transactionListScreen',
    headerMode: "none",
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["transactions"]
