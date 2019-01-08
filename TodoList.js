import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default (props) => (
  <ScrollView style={styles.scrollview}>
    {
    props.todos.map((todo, index) => (
      <View key={todo+index} style={styles.todoContainer}>
      <Text>{todo}</Text>
      <TouchableOpacity onPress={() => props.onPressDelete(index)}>
        <Text>DELETE</Text>
      </TouchableOpacity>
      </View>
    ))
    }
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#DDD',
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 10,
  }
});