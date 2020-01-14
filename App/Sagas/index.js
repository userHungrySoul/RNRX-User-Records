import { takeLatest, all, takeEvery } from 'redux-saga/effects'
// Startup types
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { startup } from './StartupSaga'
// User types
import { UserTypes } from 'App/Stores/Users/Actions'
import { filterUser, check, getAllUsers } from './UserSaga'
// Example types
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { fetchUser } from './ExampleSaga'
// UserMan Types
import { UserManTypes } from 'App/Stores/UserMan/Actions'
import { Login } from './UserManSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // User types
    takeEvery(UserTypes.USER_FETCH, filterUser),
    takeEvery(UserTypes.SAVE_USER, check),
    takeEvery(UserTypes.GET_ALL_USERS, getAllUsers),
    // Example types
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    // UserMan Types
    takeLatest(UserManTypes.LOGIN_REQUEST, Login),
  ])
}
