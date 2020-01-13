import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { UserTypes } from 'App/Stores/Users/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { filterUser, check, getAllUsers } from './UserSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    takeEvery(UserTypes.USER_FETCH, filterUser),
    takeEvery(UserTypes.SAVE_USER, check),
    takeEvery(UserTypes.GET_ALL_USERS, getAllUsers),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
  ])
}
