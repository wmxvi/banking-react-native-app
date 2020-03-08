import { ViewStyle } from "react-native"
import { color, spacing } from "../../theme"

export const addCoinsStyles = {
  WRAPPER: {
    justifyContent: 'center',
    margin: 50,
  } as ViewStyle,
  TEXT: {
    color: color.palette.white,
    fontFamily: "Montserrat",
  },
  BOLD: { fontWeight: "bold" },
  TOP_LEVEL: {
    flex: 1,
    height: '50%',
    padding: '10%',
    backgroundColor: color.modal
  },
  PARAGRAPH: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 25,
    marginTop: 25,
    // textAlign: 'center',
    // alignSelf: 'center',
  },
  CONTENT: {
    // verticalAlign:'center',
    // alignSelf:'center',
  },
  ADD: {
    width: 330,
    marginTop: 20,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[8],
    backgroundColor: color.fullButton,
  },
  CANCEL: {
    marginTop: 20,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[8],
    backgroundColor: 'transparent',
  },
  ADD_TEXT: {
    ...this.TEXT,
    ...this.BOLD,
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 2,
  },
  CANCEL_TEXT: {
    ...this.TEXT,
    ...this.BOLD,
    fontSize: 15,
    letterSpacing: 2,
  },
  HEADER_TITLE: {
    ...this.TEXT,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 30,
    textAlign: "center",
    // marginTop: 50,
  },
  INPUT_BOX: {
    // height: 100,
    borderColor: color.line,
    borderWidth: 0,
    fontSize: 21,
    // paddingLeft: 10,
    // marginBottom: 10,
    color: '#fff',
    padding: 20,
    backgroundColor: color.box,
    fontWeight: '500',
    borderRadius: 5
  },

  FOOTER: {
    verticalAlign: 'flex-end',
    alignSelf: 'center'
  }
}
