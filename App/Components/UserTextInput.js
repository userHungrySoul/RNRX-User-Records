import React from 'react'
// eslint-disable-next-line no-unused-vars
import { TextInput, View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import Style from './styles.js'
const UserTextInput = (props) => {
  return (
    <View style={Style.UserTextInputContainer}>
      <TextInput
        style={Style.UserTextInputSelf}
        onChangeText={(text) => props.updateState(text)}
        placeholder={props.placeholderText}
        value={props.stateValue}
      />
    </View>
  )
}

UserTextInput.propTypes = {
  stateValue: PropTypes.string,
  placeholderText: PropTypes.string,
  updateState: PropTypes.func,
}

export default UserTextInput
