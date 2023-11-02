import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './profilescreen'; // Import the ProfileScreen component

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AppScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} /> 
        <Stack.Screen name="Discs" component={OtherScreen} />
        <Stack.Screen name="Events" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function AppScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./img/startpage.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>IThrow</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Discs')}
            >
            <Text style={styles.buttonText}>Discs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Events')}
          >
            <Text style={styles.buttonText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('StartARound')}
          >
            <Text style={styles.buttonText}>Start A Round!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
  }

function OtherScreen() {
  // Define content for the "Other" screen here
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

export default App;
