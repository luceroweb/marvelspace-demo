import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Layout from "./Layout";
import globalStyles from "./utils/globalStyles";
import { WPAPI_PATHS, wpApiFetch } from "./utils/WPAPI";

export default function Newsfeed({ navigation, storedToken }) {
  const [newPostText, setNewPostText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    () => {
      if(loading) {
        
        wpApiFetch({
          path: WPAPI_PATHS.posts, 
          data: {
            'content': `${newPostText}`,
            'status': 'publish',
            'title': `${new Date()}`,
            'slug': `${new Date()}`
          }, 
          method: 'POST',
          token: `${storedToken}`
        })
        .then(data => {
          console.log('data from api:',data);
          data.data?.status !== 400 
            ? formError(data) 
            : console.log('New Post Response', data);
          setLoading(false);
        })
      }
    },
    [loading]
  );

  const onSubmit = () => {
    setLoading(true);
    console.log('add a post submit', newPostText);
  }

  const formError = (data) => {
    const regex = /<[^>]*>/g;
    data?.message 
      ? setError(
        data.message
          .replaceAll(regex, "")
      )
      :'';
    console.log(data);
  }

	return (
		<Layout navigation={navigation}>

      <View style={globalStyles.narrowForm}>
        <Text style={[globalStyles.text, globalStyles.bold]}>News Feed</Text>

        <Text style={globalStyles.text}>Add a Post:</Text>
        <TextInput
          style={globalStyles.textInput}
          multiline={true}
          numberOfLines={4}
          value={newPostText}
          onChangeText={setNewPostText}
          onSubmitEditing={onSubmit}
        />
        <Button
          onPress={onSubmit}
          title="Add Post"
        />
        <Text>{loading && 'Loading'}</Text>
        <Text>{error}</Text>
      </View>

		</Layout>
	);
}
const styles = StyleSheet.create({
	text: {
		marginTop: 5,
    marginBottom: 5,
		fontSize: 14,
	},
});