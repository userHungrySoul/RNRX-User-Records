import { put, call, select } from 'redux-saga/effects'
import UserMan from 'App/Stores/UserMan/Actions'
import { userService } from 'App/Services/UserService'
// Select functions
export const getUserMan = (state) => state.UserMan

export function* test() {
  console.log('test123')
}

export function* Login() {
  try {
    // start loading
    // yield put(UserMan.loginIsLoading())
    // get username and password
    const { username, password } = yield select(getUserMan)
    if (!username || !password) {
      yield put(UserMan.loginFailed('Username not found'))
      return null
    }
    // call api
    // todo
    var response = {
      name: username,
      age: 25,
      address: 'Hyderabad',
    }
    // call action with the response
    yield put(UserMan.loginSuccess(response))
    // navigate to home page
  } catch (error) {
    yield put(UserMan.loginFailed(error))
  }
}
