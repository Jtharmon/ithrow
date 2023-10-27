import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const InventoryList = () => {
  // Sample data for disc golf inventory
  const discInventory = [
    { id: '1', name: 'Driver', quantity: 3 },
    { id: '2', name: 'Mid-Range', quantity: 5 },
    { id: '3', name: 'Putter', quantity: 2 },
    // Add more discs as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Disc Golf Inventory</Text>
      <FlatList
        data={discInventory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

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

export default InventoryList;
