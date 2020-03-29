import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import TransactionListScreen from '../../../app/screens/transaction-list-screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  transactions: { screen: TransactionListScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'transactionListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
