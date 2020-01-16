import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './HomeScreenStyle'
import { Helpers, Metrics, Colors } from 'App/Theme'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        <View style={Helpers.fill}>
          <View style={Style.flex4}>
            <Text>Home</Text>
            <Text>{JSON.stringify(this.props.userDetails)}</Text>
          </View>
        </View>
      </View>
    )
  }
}

HomeScreen.propTypes = {
  userDetails: PropTypes.any,
}

const mapStateToProps = (state) => ({
  userDetails: state.UserMan.userDetails,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
