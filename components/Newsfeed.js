import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import Layout from "./Layout";
import globalStyles from "./utils/globalStyles";
import { WPAPI_PATHS, wpApiFetch } from "./utils/WPAPI";

export default function Newsfeed({ navigation, storedToken }) {
  const [newPostText, setNewPostText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [members, setMembers] = useState([]);

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
      // List Members
      wpApiFetch({
        path: WPAPI_PATHS.members
      })
      .then(data => {
        setMembers(data)
      })
    },
    [loading]
  );

  const onSubmit = () => {
    setLoading(true);
  }

  const formError = (data) => {
    const regex = /<[^>]*>/g;
    data?.message 
      ? setError(data.message.replaceAll(regex, ""))
      :'';
  }

  const memberById = (id) => {
    const member = members.find(member => member.id === id);
    return member;
  }

  const regex = /<[^>]*>/g;
  const newestPosts = posts.map((post, index) => (
    <View key={index} style={{marginTop: 15}}>
      <View style={[globalStyles.menu, {marginBottom: 5}]}>
        <View>
          <Image
            style={{width: 30, height: 30, marginRight: 5}}
            source={{
              uri: memberById(post.author)?.avatar_urls.full.startsWith('https:') 
                ? memberById(post.author).avatar_urls?.full 
                : 'https://www.gravatar.com/avatar/?d=identicon'
            }}
          />
        </View>
        <View>
          <Text styles={globalStyles.text}>
            {memberById(post.author)?.name}
          </Text>
        <Text styles={globalStyles.text}>{post.date}</Text>
        </View>
      </View>
      <Text styles={globalStyles.text}>{post.excerpt.rendered?.replace(regex, "")}</Text>
    </View>
  ));

	return (
		<Layout navigation={navigation}>

      <View>
        <Text style={[globalStyles.text, globalStyles.bold]}>News Feed</Text>
      </View>

      {storedToken ?
        <View style={globalStyles.narrowForm}>
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
        : null
      }

      <View>
        <Text style={[globalStyles.text, globalStyles.bold, {marginTop: 15}]}>Newest Posts</Text>
        {posts
          ? newestPosts
          : null
        }
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