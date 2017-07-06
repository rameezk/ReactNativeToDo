import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import SceneContainer from './containers/scene-container'

const store = createStore(todoApp)

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
