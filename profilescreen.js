import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditProfileScreen from './editprofilescreen'; // Adjust the path as needed

function ProfileScreen() {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('editprofilescreen');
  };

  const handleLogout = () => {
    // Implement your logout logic or navigation here
    // For now, let's just navigate to the home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture Section */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('./img/profile-pic.jpg')}
          style={styles.profilePicture}
        />
      </View>

      {/* Name and Username Section */}
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Harvey Spector</Text>
        <Text style={styles.usernameText}>@BestCloser</Text>
      </View>

      {/* Round, Holes, and Throws Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.statsItem}>
          <Text style={styles.statsTextBold}>Rounds Played:</Text>
          <Text style={styles.statsText}>50</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsTextBold}>Holes Played:</Text>
          <Text style={styles.statsText}>500</Text>
        </View>
      </View>

      {/* Best Round Section */}
      <View style={styles.bestRoundContainer}>
        <Text style={styles.bestRoundTitle}>Best Round</Text>
        <Text style={styles.bestRoundInfo}>Course Name: Northview Church</Text>
        <Text style={styles.bestRoundInfo}>Round Score: -12</Text>
      </View>

      {/* Favorite Course Section */}
      <View style={styles.bestRoundContainer}>
        <Text style={styles.bestRoundTitle}>Favorite Course</Text>
        <Text style={styles.bestRoundInfo}>Course Name: Northview Church</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.ListItems} onPress={EditProfileScreen}>
        <View style={styles.listItemInnerContentView}>
          <Text style={styles.TextStyles}>Edit Profile</Text>
        </View>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.LogoutButton} onPress={handleLogout}>
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
    backgroundColor: '#7f7f7f',
    padding: 10,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  usernameText: {
    fontSize: 16,
    color: '#000000',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  statsItem: {
    flex: 1,
    flexDirection: 'row',
  },
  statsTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  statsText: {
    fontSize: 16,
    color: '#000000',
  },
  bestRoundContainer: {
    marginTop: 10,
  },
  bestRoundTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  bestRoundInfo: {
    fontSize: 16,
    color: '#000000',
  },
  ListItems: {
    backgroundColor: '#c4c4c4',
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  listItemInnerContentView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyles: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '400',
  },
  LogoutButton: {
    backgroundColor: '#bc544b',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  LogoutButtonInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProfileScreen;
