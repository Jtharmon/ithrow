import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>
      <Text style={styles.username}>Username: JohnDoe123</Text>
      <Text style={styles.email}>Email: john.doe@example.com</Text>
      <Text style={styles.bio}>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ProfileScreen;
