import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/todoApp'
import APP from './components/App'

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                   window.__REDUX_DEVTOOLS_EXTENSION__() )
const wrappedApp = (
  <Provider>
    <App />
  </Provider>
)

render(<App />, document.getElemtnetByID('app'))