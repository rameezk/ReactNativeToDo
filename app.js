import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import TodoList from './TodoList'

const App = props => {
  const { container, title, horizontalLine } = styles
  return (
    <View style={container}>
      <Text style={title}>React Native Todo</Text>
      <View style={horizontalLine} />
      <TodoList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 300,
    marginBottom: 20,
  },
})

export default App
