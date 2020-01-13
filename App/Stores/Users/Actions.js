import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  userFetch: ['username'],
  userFetchSuccess: ['userDetails'],
  userFetchFailed: ['userDetailsError'],
  saveUser: ['user'],
  getAllUsers: null,
  getAllUsersSuccess: ['allUsers'],
  getAllUsersFailed: ['allUsersError'],
})

export const UserTypes = Types
export default Creators
