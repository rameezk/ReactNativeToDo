import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VisibilityFilters } from '../actions/constants'
import { addTodo, toggleTodo } from '../actions/actions'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import TodoList from '../components/todo-list'
import AddTodo from '../components/add-todo'

class TodoListScene extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'React Native Todo',
  }

  _onAddTodo(todoText) {
    this.props.onAddTodo(todoText)
  }

  _onToggleTodo(todoID) {
    this.props.onToggleTodo(todoID)
  }

  render() {
    return (
      <View>
        <AddTodo onAddTodoCallback={todoText => this._onAddTodo(todoText)} />
        <TodoList
          todos={this.props.todos}
          onTodoToggleCallback={todoID => this._onToggleTodo(todoID)}
        />
      </View>
    )
  }
}

TodoListScene.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onAddTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}

function getVisibleTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos
  case VisibilityFilters.SHOW_ACTIVE:
    return todos
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: text => dispatch(addTodo(text)),
    onToggleTodo: todoID => dispatch(toggleTodo(todoID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScene)
