import * as React from "react"
import { View, Modal, ScrollView, TextInput, SafeAreaView } from "react-native"
import { useObserver } from "mobx-react-lite"
import { Text, Header, Button } from "../"
import { addCoinsStyles as styles } from "./add-coins.styles"

export interface AddCoinsProps {}

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const AddCoins: React.FunctionComponent<AddCoinsProps> = props => {
  // const { someStore } = useStores()
  const [amount, setAmount] = React.useState('0.00')
  return useObserver(() => (
    <View style={styles.WRAPPER}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={props.isVisible}
          onRequestClose={() => {
        }}>
          <ScrollView style={styles.TOP_LEVEL}>
            <Header headerTx="transactionListScreen.addCoins" style={styles.HEADER} titleStyle={styles.HEADER_TITLE} />
            <View style={styles.CONTENT}>
              <Text style={styles.PARAGRAPH}>Enter the amount you would like added to your account below</Text>
              <TextInput
                style={styles.INPUT_BOX}
                clearTextOnFocus
                enablesReturnKeyAutomatically
                clearButtonMode="always"
                onChangeText={text => setAmount(text)}
                placeholder={"0.00"}
                placeholderTextColor = "#eee"
                value={amount}
                keyboardType="numeric"
              />
            </View>
            <SafeAreaView style={styles.FOOTER}>
              <View style={styles.FOOTER_CONTENT}>
                <Button
                  testID="save-add-coins-button"
                  style={styles.ADD}
                  textStyle={styles.ADD_TEXT}
                  tx="common.save"
                  title="Save"
                  onPress={() => props.save(amount)}
                />
                <Button
                    testID="cancel-add-coins-button"
                    style={{marginTop: 5, ...styles.CANCEL}}
                    textStyle={styles.CANCEL_TEXT}
                    tx="common.cancel"
                    title="Cancel"
                    onPress={() => {
                      props.setIsVisible(false)
                    }
                  }
                />
              </View>
            </SafeAreaView>
          </ScrollView>
        </Modal>
    </View>
  ))
}
