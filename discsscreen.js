import React from 'react';
import { View, Text, StyleSheet, InventoryList } from 'react-native';

function DiscsScreen() {
  return (
    <View>
      <Text>Other content in your component</Text>
      <DiscsScreen /> {/* Use the DiscsScreen component here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
  },
});

export default DiscsScreen;
