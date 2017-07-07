import React from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  handleClick() {
    this.props.onAddTodoCallback(this.state.text)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a todo"
          onChangeText={text => {
            this.setState({ text })
          }}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleClick.bind(this)}
        >
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d7d7d7',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    height: 40,
    borderWidth: 2,
    borderColor: '#0fa5d1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    backgroundColor: '#333',
    // marginLeft: 70,
    // marginRight: 70,
    marginBottom: 20,
    marginTop: 20,
    padding: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fafafa',
  },
})

AddTodo.propTypes = {
  onAddTodoCallback: PropTypes.func.isRequired,
}

export default AddTodo
