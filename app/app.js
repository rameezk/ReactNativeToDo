import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import { View, Text } from 'react-native'

const store = createStore(todoApp)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Hello world</Text>
        </View>
      </Provider>
    )
  }
}

export default App
