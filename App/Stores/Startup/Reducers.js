/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { StartupTypes } from './Actions'

const startup = (state) => ({
  ...state,
})

const requestAppPermissions = (state) => ({
  ...state,
})

const requestAppPermissionsSuccess = (state, { appPermissions }) => ({
  ...state,
  appPermissions: {
    ...appPermissions,
  },
})

const requestAppPermissionsFailed = () => ({
  ...INITIAL_STATE,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [StartupTypes.STARTUP]: startup,
  [StartupTypes.REQUEST_APP_PERMISSIONS]: requestAppPermissions,
  [StartupTypes.REQUEST_APP_PERMISSIONS_SUCCESS]: requestAppPermissionsSuccess,
  [StartupTypes.REQUEST_APP_PERMISSIONS_FAILED]: requestAppPermissionsFailed,
})
