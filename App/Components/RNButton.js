import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button } from 'react-native'
import PropTypes from 'prop-types'
const RNButton = (props) => {
  return <Button title={props.title} color={props.color} onPress={() => props.onPress()} />
}

RNButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
}

export default RNButton
