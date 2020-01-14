import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginIsLoading: null,
  loginSuccess: ['userDetails'],
  loginFailed: ['error'],
  resetUserMan: null,
})

export const UserManTypes = Types
export default Creators
