import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const TodoList = () => {
  const { container } = styles
  return (
    <View style={container}>
      <Text>This is a todo list</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default TodoList
