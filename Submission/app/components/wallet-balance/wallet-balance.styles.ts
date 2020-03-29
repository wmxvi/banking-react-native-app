import { ViewStyle } from "react-native"
import { color, spacing } from "../../theme"

export const walletBalanceStyles = {
  WRAPPER: {
    justifyContent: 'center'
  } as ViewStyle,

  CONTAINER: {
    borderBottomWidth: 1,
    borderBottomColor: color.line,
    margin: 20,
    // borderWidth: 1
  } as ViewStyle,

  TEXT: {
    fontSize: 31,
    marginBottom: 10,
  },

  SMALL_TEXT: {
    // borderWidth: 1,
    fontSize: 20,
  },

  BALANCE_TEXT: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.5)',
  }
}
