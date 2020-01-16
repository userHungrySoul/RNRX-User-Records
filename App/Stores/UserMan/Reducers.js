/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserManTypes } from './Actions'

const loginRequest = (state, { username, password }) => ({
  ...state,
  username: username,
  password: password,
})

const loginIsLoading = (state) => ({
  ...state,
  // loginIsLoading: !state.loginIsLoading,
  loginIsLoading: false,
})

const loginSuccess = (state, { userDetails }) => ({
  ...state,
  userDetails: userDetails,
  loginFailedError: null,
})

const loginFailed = (state, { loginFailedError }) => ({
  ...state,
  userDetails: null,
  loginFailedError: loginFailedError,
})

const resetUserMan = (state) => ({
  ...INITIAL_STATE,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserManTypes.LOGIN_REQUEST]: loginRequest,
  [UserManTypes.LOGIN_SUCCESS]: loginSuccess,
  [UserManTypes.LOGIN_FAILED]: loginFailed,
  [UserManTypes.RESET_USER_MAN]: resetUserMan,
  [UserManTypes.LOGIN_IS_LOADING]: loginIsLoading,
})
