import { ViewStyle } from "react-native"
import { palette } from "../../theme/palette"

export const transactionItemStyles = {
  WRAPPER: {
    justifyContent: 'flex-start',
    // flex: 1,
    // borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
    padding: 20
  } as ViewStyle,
  PLUS: {
    backgroundColor: palette.orangeDarker,
  },
  MINUS: {
    backgroundColor: 'rgba(255, 255, 255,0.2)'
  },
  AMOUNT: {
    fontSize: 21
  },
  CURRENCY: {
    fontSize: 11
  },
  COUNTERPARTY: {
    opacity: 0.5,
    fontSize: 18,
    fontWeight: '500'
  },
  CATEGORY: {
    opacity: 0.5
  }
}
