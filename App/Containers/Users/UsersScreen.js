import React from 'react'
import {
  Text,
  View,
  Button,
  ActivityIndicator,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './UsersScreenStyle'
import { ApplicationStyles, Helpers, Metrics } from 'App/Theme'
import UserActions from '../../Stores/Users/Actions'
import { ScrollView } from 'react-native-gesture-handler'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('componentDidMount: fired:')
    this.props.getAllUsers()
  }

  renderUserDetails(userDetails) {
    return Object.keys(userDetails).map((detail, index) => {
      return (
        <View key={index}>
          {index === 0 ? (
            <View style={Style.imageView}>
              <Image
                style={Style.image}
                source={{
                  uri: 'https://image.tmdb.org/t/p/w500' + userDetails['profile_path'],
                }}
              />
            </View>
          ) : null}
          {typeof userDetails[detail] !== 'object' ? (
            <Text style={Style.instructions}>{detail + ': ' + userDetails[detail]}</Text>
          ) : null}
        </View>
      )
    })
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    var { userIsLoading, userDetails, propState, allUsers } = this.props
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
            <ScrollView horizontal style={Style.nameListScrollView}>
              {allUsers &&
                allUsers.results.map((eachname, index) => {
                  return (
                    <TouchableOpacity
                      style={Style.nameListScroll}
                      key={index}
                      onPress={() => this.props.userFetch(eachname.name)}
                    >
                      <Text key={index} style={Style.instructions}>
                        {eachname.name}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
            </ScrollView>
            <View>
              <TextInput
                style={Style.textInput}
                onChangeText={(text) => this.onChangeText(text)}
                placeholder="Please enter your name"
                value={this.state.name}
              />
              {/* <Text style={Style.instructions}>{JSON.stringify(allUsers)}</Text> */}
              <Button
                style={ApplicationStyles.button}
                onPress={() => this.getDetails()}
                title="Get Details"
              />
              <ScrollView>
                {userDetails ? (
                  this.renderUserDetails(userDetails)
                ) : (
                  <Text style={Style.instructions}>{'No Records Found'}</Text>
                )}
              </ScrollView>
            </View>
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
    // if (name) {
    this.props.userFetch(name)
    // }
  }
}

LoginScreen.propTypes = {
  userIsLoading: PropTypes.bool,
  user: PropTypes.object,
  userFetch: PropTypes.func,
  propState: PropTypes.object,
  userDetails: PropTypes.object,
  getAllUsers: PropTypes.func,
  allUsers: PropTypes.object,
}

const mapStateToProps = (state) => ({
  userIsLoading: state.example.userIsLoading,
  userDetails: state.user.userDetails,
  propState: state.user,
  allUsers: state.user.allUsers,
})

const mapDispatchToProps = (dispatch) => ({
  userFetch: (username) => dispatch(UserActions.userFetch(username)),
  getAllUsers: () => dispatch(UserActions.getAllUsers()),
  // fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
