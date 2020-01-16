import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // This action is triggered when the application starts
  startup: null,
  requestAppPermissions: null,
  requestAppPermissionsSuccess: ['appPermissions'],
  requestAppPermissionsFailed: null,
})

export const StartupTypes = Types
export default Creators
