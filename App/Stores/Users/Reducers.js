/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const userFetch = (state, { username }) => ({
  ...state,
  username: username,
})

export const saveUser = (state) => ({
  ...state,
  user: 'user',
})

const userFetchSuccess = (state, { userDetails }) => ({
  ...state,
  userDetails: userDetails,
  userDetailsError: null,
})

const userFetchFailed = (state, { userDetailsError }) => ({
  ...state,
  userDetails: null,
  userDetailsError: userDetailsError,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.USER_FETCH]: userFetch,
  [UserTypes.USER_FETCH_SUCCESS]: userFetchSuccess,
  [UserTypes.USER_FETCH_FAILED]: userFetchFailed,
})
