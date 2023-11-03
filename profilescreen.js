import React from 'react';
import { View, Text, StyleSheet, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
function ProfileScreen() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.ListItems}>
          <View style={styles.listItemInnerContentView}>
            <Text style={styles.TextStyles}>My Profile</Text>
          </View>
        </TouchableOpacity>
        {/* Additional TouchableOpacity for the Logout button */}
        <TouchableOpacity style={styles.LogoutButton}>
          <View style={styles.LogoutButtonInner}>
            <Text style={styles.TextStyles}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    ListItems: {
      backgroundColor: '#c4c4c4',
      width: '100%',
      height: 50,
      paddingHorizontal: 15, // Corrected typo in padding property
    },
    listItemInnerContentView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
    },
    TextStyles: {
      fontSize: 15,
      color: '#676767ff',
      fontWeight: '400',
    },
    // Styling for the Logout button
    LogoutButton: {
      backgroundColor: '#bc544b',
      height: 50, // Set the height to 50 (adjust as needed)
      justifyContent: 'center',
      alignItems: 'center',
    },
    LogoutButtonInner: {
      fontColor: "#000000",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    TextStyles: {
        fontSize: 15,
        color: '#000000',
        fontWeight: '400',
    },
  });
  
  export default ProfileScreen;