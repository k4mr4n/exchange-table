import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// creates the store
export default (rootReducer, rootSaga = {}, initialStore = {}) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []
  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))
  enhancers.push(composeWithDevTools())

  const store = createStore(rootReducer, initialStore, compose(...enhancers))

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
