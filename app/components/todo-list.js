import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ListView } from 'react-native'

import TodoItem from '../components/todo-item'

class TodoList extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: this._rowHasChanged,
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    }

    this._renderRow = this._renderRow.bind(this)
  }

  _rowHasChanged = (r1, r2) => r1 != r2

  componentWillReceiveProps({ todos }) {
    const { todos: oldTodos } = this.props

    if (oldTodos !== todos) {
      const dataSource = this.state.dataSource.cloneWithRows([...todos])
      this.setState({ dataSource })
    }
  }

  _renderRow(rowId, todoData) {
    return (
      <TodoItem
        todo={todoData}
        onToggleTodoCallback={this.props.onTodoToggleCallback}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID, highlightRow) =>
            this._renderRow(rowID, rowData)}
        />
      </View>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onTodoToggleCallback: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
})

export default TodoList
