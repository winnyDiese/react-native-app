import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Home from './screens/home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
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
