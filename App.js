import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Quiz />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:16
  }
})

export default App;
