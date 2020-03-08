import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, ScrollView, FlatList, TextInput, Alert } from "react-native"
import { observer} from "mobx-react-lite"
import { useStores } from "../../models/root-store"
import { Button, Header, Screen, Text, Wallpaper, WalletBalance } from "../../components"
import { color, spacing } from "../../theme"
import { NavigationScreenProp } from "react-navigation"
// import { ScrollView } from "react-native-gesture-handler"
import { TransactionItem } from "../../components/transaction-item/transaction-item"
import { TransactionStore } from "../../models/transaction-store"
import { AddCoins } from "../../components/add-coins/add-coins"

export interface TransactionListScreenProps {
  transactionStore: TransactionStore,
  navigation: NavigationScreenProp<{}>
}

export interface TransactionScreenState {
  refreshing: boolean
}

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  // flex: 1,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  textTransform: 'uppercase',
  fontSize: 40,
  textAlign: "center",
  // marginTop: 50,
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 20,
  margin: 20,
  textAlign: "left",
}
const TRANSACTIONS_WRAPPER = {
  // borderWidth: 1
}
const TRANSACTION_LIST = {
  // borderWidth: 1
}
const SEARCH_BOX = {
  height: 40,
  borderColor: color.line,
  borderWidth: 1,
  paddingLeft: 10,
  marginBottom: 10,
  color: '#fff',
  fontWeight: '500',
  borderRadius: 5
}
const ADD: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.button,
}
const ADD_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 15,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "transparent", marginTop: 50}
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export const TransactionListScreen: React.FunctionComponent<TransactionsScreenProps> = observer((props) => {
  const { transactionStore } = useStores()
  const [refreshing, setRefreshing] = React.useState(false)
  const [searchTerm, onChangeText] = React.useState('')
  const [balance, setBalance] = React.useState(0.0)
  const [addCoinsVisible, setAddCoinsVisible] = React.useState(false)

  const fetchTransactions = () => {
    return transactionStore.getTransactions()
  }

  const calculateBalance = () => {
    let balance: float = 0.0
    transactionStore.transactions.forEach((tx) => {
      balance += parseFloat(tx.amount)
    })
    balance = balance.toFixed(2)
    setBalance(balance)
  }

  const saveCoins = async (amount: string) => {
    const parsedAmount = parseFloat(amount).toFixed(2).toString()
    await transactionStore.saveTransaction(parsedAmount).then(() => {
      fetchTransactions()
      calculateBalance()
      setAddCoinsVisible(false)
    })
  }

  React.useEffect(() => {
    fetchTransactions()
    calculateBalance()
  }, [])

  const keyExtractor = item => {
    return String(item.id)
  }

  const renderItem = (transaction) => {
    return (
      <TransactionItem data={transaction} />
    )
  }

  const renderList = () => {
    if (transactionStore.transactions.length === 0) {
      return (
        <Text>No transactions</Text>
      )
    }

    let data: Transactions[] = transactionStore.transactions.sort((tx1, tx2) => {
      return tx2.id - tx1.id // Sort by latest transaction
    })

    if (searchTerm.length > 0) {
      data = transactionStore.transactions.filter((item) => {
        return (
          item.category.indexOf(searchTerm) !== -1
          || item.counterparty.indexOf(searchTerm) !== -1
          || item.amount.indexOf(searchTerm) !== -1
        )
      })
    }

    return (
      <FlatList
        data={data}
        style={TRANSACTION_LIST}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={keyExtractor}
        onRefresh={fetchTransactions}
        refreshing={refreshing}
      />
    )
  }

  return (
    <View testID="TransactionList" style={FULL}>
      <Wallpaper />
      <AddCoins isVisible={addCoinsVisible} setIsVisible={setAddCoinsVisible} save={saveCoins} />
      <Header headerTx="common.appName" style={HEADER} titleStyle={HEADER_TITLE} />
      <WalletBalance amount={balance} />
      <Text style={TITLE} tx="transactionListScreen.header" />
      {/* @todo: Need to move this to component */}
      <Screen style={CONTAINER} backgroundColor={color.transparent}>
        <TextInput
          style={SEARCH_BOX}
          clearTextOnFocus
          enablesReturnKeyAutomatically
          clearButtonMode="always"
          onChangeText={text => onChangeText(text)}
          placeholder="Type to filter"
          placeholderTextColor = "#fff"
          value={searchTerm}
        />
        <View style={TRANSACTIONS_WRAPPER}>
          {renderList()}
        </View>
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            testID="add-coins-button"
            style={ADD}
            textStyle={ADD_TEXT}
            tx="transactionListScreen.addCoins"
            onPress={() => setAddCoinsVisible(true)}
          />
        </View>
      </SafeAreaView>
    </View>
  )
})
