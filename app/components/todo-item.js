import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CheckBox from 'react-native-checkbox'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: props.todo,
    }
    this.handleTodoToggle = this.handleTodoToggle.bind(this)
  }

  handleTodoToggle() {
    this.props.onToggleTodoCallback(this.state.todo.id)
  }

  componentWillReceiveProps({ todo }) {
    const { todo: oldTodo } = this.props

    if (oldTodo !== todo) {
      this.setState({ todo })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.todoText}>
          {this.state.todo.text}
        </Text>
        <CheckBox
          checked={this.state.todo.completed}
          label=""
          onChange={this.handleTodoToggle}
        />
      </View>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
  onToggleTodoCallback: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#e7e7e7',
  },
  todoText: {
    fontSize: 15,
    fontWeight: '300',
  },
})

export default TodoItem
