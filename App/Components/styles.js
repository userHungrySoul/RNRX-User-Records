import { StyleSheet } from 'react-native'
import { Helpers } from 'App/Theme'

export default StyleSheet.create({
  UserTextInputContainer: { ...Helpers.fill, ...Helpers.ceneter },
  // eslint-disable-next-line react-native/no-color-literals
  UserTextInputSelf: { borderColor: 'gray', borderWidth: 1, height: 40, width: '100%' },
})
