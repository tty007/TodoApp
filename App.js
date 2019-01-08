/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class App extends Component {
  state = {
    newTodo: '',
    todos: [],
  }

  onChangeText(newTodo) {
    // setStateが実行されるとstate状態が変化してrender()が再度走る
    this.setState({ newTodo })
  }

  onPressAdd() {
    const { newTodo } = this.state;
    console.log(newTodo);
    this.setState({
      newTodo: '',
      todos: [newTodo, ...this.state.todos],
    })
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <TextInput style={styles.form} onChangeText={text => this.onChangeText(text)} value={this.state.newTodo} />
        <TouchableOpacity style={styles.addButton}
          onPress={() => this.onPressAdd()}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollview}>
          {
            this.state.todos.map((todo, index) => (
              <View key={todo+index} style={styles.todoContainer}>
                <Text>{todo}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  form: {
    backgroundColor: '#EEE',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollview: {
    backgroundColor: '#DDD',
  },
  todoContainer: {
    backgroundColor: '#FFF',
    padding: 10,
  }
});
