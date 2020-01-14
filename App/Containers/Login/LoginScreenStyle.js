import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.normal,
    fontStyle: 'italic',
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  logoContainer: { flex: 3, ...Helpers.center },
  logoImage: { height: 100, ...Helpers.fullWidth },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  // eslint-disable-next-line react-native/sort-styles
  imageView: {
    ...Helpers.center,
  },
  // eslint-disable-next-line react-native/no-color-literals
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
  },
  image: {
    height: 150,
    resizeMode: 'contain',
    width: 150,
  },
  // eslint-disable-next-line react-native/no-color-literals
  nameListScroll: {
    borderColor: 'grey',
    borderWidth: 0.5,
    width: 100,
    ...Helpers.center,
  },
  nameListScrollView: { maxHeight: 50 },
  loginInputContainer: { flex: 2 },
  flex4: { flex: 4 },
})
