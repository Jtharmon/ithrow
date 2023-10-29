import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App({ navigation }) {
  return (
    <ImageBackground
      source={require('./img/startpage.jpg')} // Provide the correct path to your image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>IThrow</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} 
          onPress={() => navigation.navigate('profile.js')}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Discs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start A Round!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

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
    color: 'black',
    fontSize: 48,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
