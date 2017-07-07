import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import SceneContainer from './containers/scene-container'

import devToolsEnhancer from 'remote-redux-devtools'

const store = createStore(todoApp, devToolsEnhancer())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SceneContainer />
      </Provider>
    )
  }
}

export default App
