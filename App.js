import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { posts, users } from "./components/WPAPI";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
	posts();
	users();
	return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={SignUpPage} />
          <Stack.Screen name="Login" component={LogInPage} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	
	},
});
