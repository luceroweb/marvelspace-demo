import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Layout from "./Layout";
import globalStyles from "./utils/globalStyles";
import { WPAPI_PATHS, wpApiFetch } from "./utils/WPAPI";

export default function Newsfeed({ navigation, storedToken }) {
  const [newPostText, setNewPostText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      // Create New Post
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
      // List Posts
      wpApiFetch({
        path: WPAPI_PATHS.posts
      })
      .then(data => {
        setPosts(data)
      })
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

  console.log("list posts",posts);
  const regex = /<[^>]*>/g;
  const newestPosts = posts.map((post, index) => (
    <View key={index} style={ {marginTop: 15}}>
      <Text styles={globalStyles.text}>Author ID: {post.author}</Text>
      <Text styles={globalStyles.text}>{post.date}</Text>
      <Text styles={globalStyles.text}>{post.excerpt.rendered.replaceAll(regex, "")}</Text>
    </View>
  ));

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

      <View>
        <Text style={[globalStyles.text, globalStyles.bold, {marginTop: 15}]}>Newest Posts</Text>
        {newestPosts}
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