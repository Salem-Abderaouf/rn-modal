import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const App = () => {

  return (
    <View style={styles.wrapper}>
      <Text>Hello modal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
