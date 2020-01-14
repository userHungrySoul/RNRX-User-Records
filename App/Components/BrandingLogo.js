import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Text, View, Image } from 'react-native'
import Style from '../Containers/Login/LoginScreenStyle'
const BrandingLogo = () => {
  return (
    <View style={Style.logoContainer}>
      <Image
        style={Style.logoImage}
        resizeMode={'contain'}
        source={require('../../App/Assets/Images/logo.png')}
      />
    </View>
  )
}

export default BrandingLogo
