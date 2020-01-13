import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  userFetch: ['username'],
  userFetchSuccess: ['userDetails'],
  userFetchFailed: ['userDetailsError'],
  saveUser: ['user'],
})

export const UserTypes = Types
export default Creators
