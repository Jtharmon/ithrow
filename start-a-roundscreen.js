import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartARoundScreen = () => {
  return (
    <View>
      <Text>Start a Round Screen</Text>
      {/* Your screen content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});


export default StartARoundScreen;
