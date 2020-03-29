import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../"
import { walletBalanceStyles as styles } from "./wallet-balance.styles"

export interface WalletBalanceProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * Balance amount
   */
   amount?: string
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function WalletBalance(props: WalletBalanceProps) {
  // grab the props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tx, amount, ...rest } = props

  return (
    <View style={styles.CONTAINER} {...rest}>
        <Text text="ACCOUNT BALANCE" style={styles.BALANCE_TEXT} />
        <Text>
          <Text text={amount.toString()} style={styles.TEXT} />
          <Text tx="common.currencySymbol" style={styles.SMALL_TEXT} />
        </Text>
    </View>
  )
}
