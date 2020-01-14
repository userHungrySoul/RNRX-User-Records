import { put, call, select } from 'redux-saga/effects'
import UserMan from 'App/Stores/UserMan/Actions'
import { userService } from 'App/Services/UserService'
import { PermissionsAndroid } from 'react-native'
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
    // request device permission
    yield call(getPermission)
    // navigate to home page
  } catch (error) {
    yield put(UserMan.loginFailed(error))
  }
}

export async function* getPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
//       title: 'Cool Photo App Camera Permission',
//       message: 'Cool Photo App needs access to your camera ' + 'so you can take awesome pictures.',
//       buttonNeutral: 'Ask Me Later',
//       buttonNegative: 'Cancel',
//       buttonPositive: 'OK',
//     })
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the camera')
//     } else {
//       console.log('Camera permission denied')
//     }
//   } catch (err) {
//     console.warn(err)
//   }
}
