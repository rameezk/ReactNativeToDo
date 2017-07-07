import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import TodoListScene from './todo-list-scene'
import { Text } from 'react-native'

const AppNavigator = StackNavigator({
  List: { screen: TodoListScene },
})

export default AppNavigator
