import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { wpApiFetch, WPAPI_PATHS } from './utils/WPAPI';
import Layout from './Layout';

export default function Profile ({ navigation }) {
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    wpApiFetch({ path: WPAPI_PATHS.posts })
      .then(response => {
        setProfileInfo(response.rendered)
      });
      wpApiFetch({ path: WPAPI_PATHS.members })
        .then(response => {
          // console.log(response)
        });
  });

  return (
    <Layout navigation={navigation}>

      <View style={styles.profileContainer}>

        <View style={styles.profileInfoContainer}>
          <Image 
            source={{uri: 'https://i.pravatar.cc/300'}} 
            style={{ height: 150, width: 150, borderRadius: 10 }}
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
      
    </Layout>
  )
}

const styles = StyleSheet.create({
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
  pillButton: {
    borderRadius: 10,
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
});