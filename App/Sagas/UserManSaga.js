import { Alert } from 'react-native'
import { put, call, select } from 'redux-saga/effects'
import UserMan from 'App/Stores/UserMan/Actions'
import { userService } from 'App/Services/UserService'
import NavigationService from 'App/Services/NavigationService'
// Select functions
export const getUserMan = (state) => state.UserMan

export function* Login() {
  try {
    // start loading
    yield put(UserMan.loginIsLoading())
    // get username and password
    const { username, password } = yield select(getUserMan)
    if (!username || !password) {
      yield put(UserMan.loginFailed('Username not found'))
      return null
    }
    // call api
    const response = yield call(userService.loginUser, username, password)
    // call action with the response
    if (!response.status) {
      yield call(Alert.alert, 'Incorrect user details', 'Please enter valid username and password')
      yield put(UserMan.loginFailed(response))
      return null
    }
    yield put(UserMan.loginSuccess(response))
    yield put(UserMan.loginIsLoading())
    // navigate to home page
    NavigationService.navigateAndReset('HomeScreen')
  } catch (error) {
    // Handle Error
    yield put(UserMan.loginFailed(error))
    yield put(UserMan.loginIsLoading())
  }
}
