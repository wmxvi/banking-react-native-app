import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../"
import { transactionItemStyles as styles } from "./transaction-item.styles"
import { Transaction } from "../../models/transaction"

export interface TransactionItemProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * Transaction data
   */
  data?: Transaction[]
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function TransactionItem(props: TransactionItemProps) {
  // grab the props
  const { tx, data, style, ...rest } = props
  const signStyle = (data.item.amount.indexOf('-') !== -1 ? styles.MINUS : styles.PLUS)

  return (
    <View style={{...style, ...styles.WRAPPER, ...signStyle}} {...rest}>
      <Text>
        <Text text={data.item.amount} style={styles.AMOUNT} />
        <Text text={data.item.currency} style={styles.CURRENCY} />
      </Text>
      <Text text={data.item.counterparty} style={styles.COUNTERPARTY} />
      <Text text={data.item.category} style={styles.CATEGORY} />
    </View>
  )
}
