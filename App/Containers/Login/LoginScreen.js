import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './LoginScreenStyle'
import { Helpers, Metrics, Colors } from 'App/Theme'
// eslint-disable-next-line no-unused-vars
import UserActions from '../../Stores/Users/Actions'
import { BrandingLogo, UserTextInput, RNButton } from '../../Components'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // this.props.getAllUsers()
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
              />
            </View>
            <View style={[Helpers.fill, Helpers.center]}>
              <RNButton title="Login" color={Colors.primary} onPress={() => this.onLoginPress()} />
            </View>
            <View style={Style.flex4}></View>
          </View>
        )}
      </View>
    )
  }

  onChangeText(text, key) {
    this.setState({ [key]: text })
  }

  onLoginPress() {
    var { email, password } = this.state
    if (email && password) {
      alert('button pressed')
    } else {
      alert('invalid details')
    }
  }
}

LoginScreen.propTypes = {
  loginIsLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  // userIsLoading: state.example.userIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  // userFetch: (username) => dispatch(UserActions.userFetch(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
