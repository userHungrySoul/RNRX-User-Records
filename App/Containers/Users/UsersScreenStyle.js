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
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
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
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
    justifyContent: 'center',
    width: 100,
  },
  nameListScrollView: { maxHeight: 50 },
})
