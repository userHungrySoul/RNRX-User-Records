import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './UsersScreenStyle'
import { ApplicationStyles, Helpers, Metrics } from 'App/Theme'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ExampleScreen extends React.Component {
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
    var { userIsLoading, userDetails } = this.props
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
            <Text style={Style.instructions}>{instructions}</Text>
            <Button
              style={ApplicationStyles.button}
              onPress={() => this.getDetails()}
              title="Get Details"
            />
            {userDetails ? (
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
    alert(name)
  }
}

ExampleScreen.propTypes = {
  userIsLoading: PropTypes.bool,
  userDetails: PropTypes.object,
}

const mapStateToProps = (state) => ({
  userIsLoading: state.example.userIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  // fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleScreen)
