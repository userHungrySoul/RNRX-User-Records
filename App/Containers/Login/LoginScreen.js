import React from 'react'
import { View, ActivityIndicator, Text, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './LoginScreenStyle'
import { Helpers, Metrics, Colors } from 'App/Theme'
// eslint-disable-next-line no-unused-vars
import UserMan from '../../Stores/UserMan/Actions'
import { BrandingLogo, UserTextInput, RNButton } from '../../Components'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // this.props.getAllUsers()
    this.props.isLoading()
  }

  render() {
    var { loginIsLoading } = this.props
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        {loginIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={Helpers.fill}>
            <BrandingLogo />
            <View style={Style.loginInputContainer}>
              <UserTextInput
                stateValue={this.state.email}
                updateState={(text) => this.onChangeText(text, 'email')}
                placeholderText="Enter Email ID"
              />
              <UserTextInput
                stateValue={this.state.password}
                updateState={(text) => this.onChangeText(text, 'password')}
                placeholderText="Enter Password"
                secureTextEntry={true}
              />
            </View>
            <View style={[Helpers.fill, Helpers.center, Helpers.row, Helpers.mainSpaceAround]}>
              <RNButton title="Reset" color={Colors.grey} onPress={() => this.resetPress()} />
              <RNButton title="Login" color={Colors.primary} onPress={() => this.onLoginPress()} />
            </View>
            <View style={Style.flex4}>{/* <Text>{JSON.stringify(this.props.dummy)}</Text> */}</View>
          </View>
        )}
      </View>
    )
  }

  onChangeText(text, key) {
    this.setState({ [key]: text })
  }

  resetPress() {
    this.props.resetUserMan()
    this.setState({
      email: '',
      password: '',
    })
  }

  onLoginPress() {
    var { email, password } = this.state
    if (email && password) {
      Keyboard.dismiss()
      // this.props.isLoading()
      this.props.login(email, password)
    } else {
      alert('invalid details')
    }
  }
}

LoginScreen.propTypes = {
  dummy: PropTypes.any,
  loginIsLoading: PropTypes.bool,
  login: PropTypes.func,
  resetUserMan: PropTypes.func,
  isLoading: PropTypes.func,
}

const mapStateToProps = (state) => ({
  loginIsLoading: state.UserMan.loginIsLoading,
  dummy: state.startup,
  appPermissions: state.startup,
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(UserMan.loginRequest(username, password)),
  resetUserMan: () => dispatch(UserMan.resetUserMan()),
  isLoading: () => dispatch(UserMan.loginIsLoading()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
