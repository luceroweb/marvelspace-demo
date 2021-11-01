import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { wpApiFetch, WPAPI_PATHS } from './WPAPI';
import ThemeLoggedIn from './ThemeLoggedIn';

const Profile = ({ navigation }) => {
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.posts })
      .then(response => {
        setProfileInfo(response.at(0).content.rendered)
      });
  });

  return (
		<ThemeLoggedIn navigation={navigation}>

      <View style={styles.profileContainer}>
        <View style={styles.profileInfoContainer}>
          <Image 
            source={'https://i.pravatar.cc/300'} 
            style={{ height: '50%', width: '100%', borderRadius: 10 }}
          />
          <Text>MarvelSpace Tom!</Text>
          <Text>Avengers Tower, New York City</Text>
          <View style={styles.pillButton}>
            <Text>edit profile</Text>
          </View>
          
        </View>
        <View style={styles.profileAboutContainer}>
          <Text>About</Text>
          <View style={styles.profileAbout}>
            <Text>{profileInfo}</Text>
          </View>
        </View>
      </View>

    </ThemeLoggedIn>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#ED1D24',
  },
  profileContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  profileInfoContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    margin: 10,

  },
  profileAboutContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  profileAbout: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 10,
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'whitesmoke',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  pillButton: {
    borderRadius: 10,
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
});

export default Profile;