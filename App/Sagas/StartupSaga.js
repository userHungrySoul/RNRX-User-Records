// eslint-disable-next-line react-native/split-platform-components
import { PermissionsAndroid, Platform } from 'react-native'
import { put, call, select } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import StartupActions from 'App/Stores/Startup/Actions'
import NavigationService from 'App/Services/NavigationService'

export const getCurrPermissions = (state) => state.startup
/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchUser())
  yield put(StartupActions.requestAppPermissionsFailed())
  const currAppPermissions = yield select(getCurrPermissions)
  if (!currAppPermissions) {
    return null
  }
  const updatedPermissions = yield call(requestPermissions, currAppPermissions.appPermissions)
  if (!updatedPermissions) {
    yield put(StartupActions.requestAppPermissionsFailed())
    return null
  }
  yield put(StartupActions.requestAppPermissionsSuccess(updatedPermissions))
  NavigationService.navigateAndReset('MainScreen')
}

export async function requestPermissions(currAppPermissions) {
  // not using gen fun as async is not supported
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ])
      if (PermissionsAndroid.RESULTS.GRANTED === 'granted') {
        for (var key in granted) {
          let permissionType = key.split('.')[2]
          currAppPermissions[permissionType] = granted[key]
        }
        return currAppPermissions
      }
    } else {
      // iOS here, so you can go to your Save flow directly
    }
  } catch (e) {
    console.log(e)
    return null
  }
}

export function* testing() {
  console.log('testing saga')
}
