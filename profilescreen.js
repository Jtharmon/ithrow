import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Picture Section */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('./img/profile-pic.jpg')}
          style={styles.profilePicture}
        />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Harvey Spector</Text>
        <Text style={styles.usernameText}>@BestCloser</Text>
      </View>

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

      <View style={styles.bestRoundContainer}>
        <Text style={styles.bestRoundTitle}>Best Round</Text>
        <Text style={styles.bestRoundInfo}>Course Name: Northview Church</Text>
        <Text style={styles.bestRoundInfo}>Round Score: -12</Text>
      </View>

      <View style={styles.bestRoundContainer}>
        <Text style={styles.bestRoundTitle}>Favorite Course</Text>
        <Text style={styles.bestRoundInfo}>Course Name: Northview Church</Text>
      </View>


      <TouchableOpacity style={styles.ListItems}>
        <View style={styles.listItemInnerContentView}>
          <Text style={styles.TextStyles}>Edit Profile</Text>
        </View>
      </TouchableOpacity>

      {/* Additional TouchableOpacity for the Logout button */
      <TouchableOpacity style={styles.LogoutButton}>
        <View style={styles.LogoutButtonInner}>
          <Text style={styles.TextStyles}>Logout</Text>
        </View>
      </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  // Entire background
  container: {
    flex: 1,
    backgroundColor: '#7f7f7f',
    padding: 10,
    justifyContent: 'space-between',
  },
  // Profile picture
  profilePictureContainer: {
    alignItems: 'center', // Center the profile picture
    marginTop: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  // Name and Username
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
  // Round, Holes, and Throws Statistics
  statsContainer: {
    flexDirection: 'row', // Display horizontally
    justifyContent: 'space-between', // Space items evenly
    alignItems: 'center',
    marginTop: 10,
  },
  statsItem: {
    flex: 1, // Equal width for all stats items
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
  // Best Round Section
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
  // Edit Profile Button
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
  // Logout Button
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
