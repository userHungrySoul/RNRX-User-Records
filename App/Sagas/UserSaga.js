import { put, call, select } from 'redux-saga/effects'
import UserActions from 'App/Stores/Users/Actions'
import { getUserDetails } from '../Stores/Users/Selectors'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
const getRequestedUsername = (state) => state.user.username

export function* filterUser() {
  const users = [
    {
      name: 'Uday',
      age: 25,
      address: 'Hyderabad',
    },
    {
      name: 'Sai',
      age: 25,
      address: 'Hyderabad',
    },
    {
      name: 'Kumar',
      age: 25,
      address: 'Hyderabad',
    },
  ]
  try {
    const currUser = yield select(getRequestedUsername)
    const currUserDetails = yield call(getUserDetails, users, currUser)
    yield put(UserActions.userFetchSuccess(currUserDetails[0]))
  } catch (error) {
    yield put(UserActions.userFetchFailed(error))
  }
}

export function* check() {
  console.log('check: called')
}
