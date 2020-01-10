import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  userFetch: ['username'],
  saveUser: ['user'],
})

export const UserTypes = Types
export default Creators
