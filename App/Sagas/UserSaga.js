import { put, call } from 'redux-saga/effects'
import UserActions from 'App/Stores/Users/Actions'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* filterUser() {
  // console.log('filterUser: called')
  const user = {
    name: 'Uday',
    age: 25,
    address: 'Hyderabad',
  }
  // yield put({ type: 'SAVE_USER', user })
  // yield put(
  //   UserActions.saveUser({
  //     name: 'Uday',
  //     age: 25,
  //     address: 'Hyderabad',
  //   })
  // )
  yield put(UserActions.saveUser(user))
}

export function* check() {
  console.log('check: called')
}
