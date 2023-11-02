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
        <TouchableOpacity style={styles.ListItems}>
            <View style={styles.Logoutbutton}>
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
        paddingHorizontial: 15, 
    },
    listItemInnerContentView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    } ,
    TextStyles: {
        fontSize: 15,
        color: '#676767ff',
        fontWeight: '400',
    },
    Logoutbutton: {
        backgroundColor: '#bc544b',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center", 
        //fix font color to be black not currently working right now.
        fontColor: '#000000'
    },
  });
  


export default ProfileScreen;
