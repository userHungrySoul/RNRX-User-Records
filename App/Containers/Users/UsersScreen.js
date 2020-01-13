import React from 'react'
import { Text, View, Button, ActivityIndicator, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './UsersScreenStyle'
import { ApplicationStyles, Helpers, Metrics } from 'App/Theme'
import UserActions from '../../Stores/Users/Actions'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // this._fetchUser()
  }

  renderUserDetails(userDetails) {
    return Object.keys(userDetails).map((detail, index) => {
      return (
        <Text style={Style.instructions} key={index}>
          {detail + ': ' + userDetails[detail]}
        </Text>
      )
    })
  }

  render() {
    var { userIsLoading, userDetails, propState } = this.props
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        {userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <TextInput
              style={Style.textInput}
              onChangeText={(text) => this.onChangeText(text)}
              placeholder="Please enter your name"
              value={this.state.name}
            />
            <Text style={Style.instructions}>{JSON.stringify(propState)}</Text>
            <Button
              style={ApplicationStyles.button}
              onPress={() => this.getDetails()}
              title="Get Details"
            />
            {userDetails && userDetails ? (
              this.renderUserDetails(userDetails)
            ) : (
              <Text style={Style.instructions}>{'No Records Found'}</Text>
            )}
          </View>
        )}
      </View>
    )
  }

  onChangeText(text) {
    this.setState({ name: text })
  }

  getDetails() {
    var { name } = this.state
    // alert(name)
    this.props.userFetch(name)
  }
}

LoginScreen.propTypes = {
  userIsLoading: PropTypes.bool,
  user: PropTypes.object,
  userFetch: PropTypes.func,
  propState: PropTypes.object,
  userDetails: PropTypes.object,
}

const mapStateToProps = (state) => ({
  userIsLoading: state.example.userIsLoading,
  userDetails: state.user.userDetails,
  propState: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  userFetch: (username) => dispatch(UserActions.userFetch(username)),
  // fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
