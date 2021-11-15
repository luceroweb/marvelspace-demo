import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
import globalStyles from "../utils/globalStyles";
import Layout from "../Layout";

export default function LogIn({ navigation, setStoredToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    () => {
      if(loading) {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'username': `${username}`,
            'password': `${password}`
          })
        };
        
        fetch(`https://jualuc1.dreamhosters.com/wp-json/jwt-auth/v1/token`, options)
        .then(response => response.json())
        .then(data => {
          data.token 
            ? formSuccess(data)
            : formError(data)
        })
      }
    },
    [loading]
  );

	const onFormSubmit = () => {
    setError('');
    setLoading(true);
	};

  const formSuccess = (data) => {
    setStoredToken(data.token);
    setLoggedin(true);
    setLoading(false);
    setUsername('');
    setPassword('');
    navigation.navigate('Newsfeed');
  }

  const formError = (data) => {
    const regex = /<[^>]*>/g;
    setLoading(false);
    setPassword('');
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
      {loggedIn 
        ? <View>
          <Text>Logged In</Text>
        </View>
        : (
          <View style={globalStyles.narrowForm}>
              <Text style={[globalStyles.text, globalStyles.bold]}>Login</Text>

              <Text style={globalStyles.text}>Username:</Text>
              <TextInput
                style={globalStyles.textInput}
                value={username}
                onChangeText={setUsername}
                onSubmitEditing={onFormSubmit}
              />

              <Text style={globalStyles.text}>Password:</Text>
              <TextInput
                style={globalStyles.textInput}
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={onFormSubmit}
                secureTextEntry={true}
              />
              <Button
                onPress={onFormSubmit}
                title="Login"
              />
              <Text>{loading && 'Loading'}</Text>
              <Text>{error}</Text>
          </View>
        )
      }
		</Layout>
	);
}