import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as startupReducer } from './Startup/Reducers'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as UserReducer } from './Users/Reducers'
import { reducer as UserManReducer } from './UserMan/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    startup: startupReducer,
    user: UserReducer,
    example: ExampleReducer,
    UserMan: UserManReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
