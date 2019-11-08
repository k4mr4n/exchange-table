import { combineReducers } from 'redux'
import configureStore from './configure-store'
import rootSaga from '../sagas/'

/* ------------- Reducers ------------- */
import rates from './rates.reducer'
/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  rates
})

export default (initialStore = {}) => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga, initialStore)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('.').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
