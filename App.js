import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Switch, Platform } from 'react-native';

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
});

export default function App() {

  const [tasks, setTasks] = useState([
    { key: 'g', text: 'genesis', done: false },
    { key: 'e', text: 'exodus', done: false },
    { key: 'l', text: 'leviticus', done: false },
    { key: 'n', text: 'numbers', done: false },
    { key: 'd', text: 'deuturonomy', done: false },
    { key: 'j', text: 'joshua', done: false }
  ]);

  updateDone = (i, value) => {
    tasks[i].done = value;
    setTasks([...tasks]);
    console.log(i)
    console.log(value)
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item, index }) =>
          <View>
            <View style={styles.listItemCont}>
              <Text style={styles.listItem}>
                {item.text}
              </Text>
              <Switch value={item.done} onValueChange={(value) => updateDone(index, value)} />
            </View>
            <View style={styles.hr} />
          </View>}
      />
    </View>
  );
}