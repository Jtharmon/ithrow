import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={require('../ithrow')} // Replace with the actual path to your image file
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Your App Content Goes Here</Text>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default App;
