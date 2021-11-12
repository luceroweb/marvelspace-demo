import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import { wpApiFetch, WPAPI_PATHS } from './WPAPI';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState([]);
  const footerText = ['Brought to you by Team Black Panther', 'About', 'Rules', 'Contact', 'Terms', '©2021 MarvelSpace. All Rights Reserved'];

  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.posts })
      .then(response => {
        setProfileInfo(response.at(0).content.rendered)
      });
  });

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text>MarvelSpace!</Text>
        <Text>a space for super friends</Text>
      </View>

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

      <View style={styles.footer}>
        {
          footerText.map((text, i) => (
            <Text key={i} onPress={() => Linking.openURL('#')}>{text}</Text>
          ))
        }
      </View>
    </View>
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