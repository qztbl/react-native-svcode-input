/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { CodeInput } from 'react-native-svcode-input';

const App = () => {
  return (
    <SafeAreaView style={styles.page}>
      <CodeInput
        style={styles.codeInput1} />
      <CodeInput
        style={styles.codeInput2}
        length={5}
        normalGridStyle={{ color: 'red', borderColor: 'pink' }}
        careGridStyle={{ borderColor: 'blue' }} 
        autoFocus={true}
        onChangeText={(str)=>{
          console.info(str)
        }}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 5
  },
  codeInput1: {
    marginHorizontal: 10,
  },
  codeInput2: {
    marginHorizontal: 10,
    marginTop: 20
  }
});

export default App;
