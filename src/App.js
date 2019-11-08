import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'

import createStore from './redux'
import HomePageView from './views/homepage.view'

function App () {
  const store = createStore()
  return (
    <Provider store={store}>
      <CssBaseline />
      <HomePageView />
    </Provider>)
}

export default App
