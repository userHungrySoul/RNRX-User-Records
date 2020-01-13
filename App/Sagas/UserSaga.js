import { put, call, select } from 'redux-saga/effects'
import UserActions from 'App/Stores/Users/Actions'
import { getUserDetails } from '../Stores/Users/Selectors'
import { userService } from '../Services/UserService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
const getRequestedUsername = (state) => state.user.username

export function* filterUser() {
  // const users = [
  //   {
  //     name: 'Uday',
  //     age: 25,
  //     address: 'Hyderabad',
  //   },
  //   {
  //     name: 'Sai',
  //     age: 25,
  //     address: 'Hyderabad',
  //   },
  //   {
  //     name: 'Kumar',
  //     age: 25,
  //     address: 'Hyderabad',
  //   },
  // ]
  try {
    const fetchUserDetails = yield call(userService.getUserAPI)
    if (!fetchUserDetails) {
      return null
    }
    const currUser = yield select(getRequestedUsername)
    const currUserDetails = yield call(getUserDetails, fetchUserDetails.results, currUser)
    yield put(UserActions.userFetchSuccess(currUserDetails[0]))
  } catch (error) {
    // console.log(`getRequestedUsername: catch: ${JSON.stringify(error)}`)
    yield put(UserActions.userFetchFailed('Fetching User Details failed.'))
  }
}

export function* check() {
  console.log('check: called')
}

export function* getAllUsers() {
  try {
    const fetchUserDetails = yield call(userService.getUserAPI)
    if (!fetchUserDetails) {
      return null
    }
    console.log('getAllUsers:saga: fetch success:')
    yield put(UserActions.getAllUsersSuccess(fetchUserDetails))
  } catch (error) {
    yield put(UserActions.getAllUsersFailed('Fetching User Details failed.'))
  }
}
