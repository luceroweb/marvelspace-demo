import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { posts, users } from "./components/WPAPI";
import Home from "./components/Home";
import Newsfeed from "./components/Newsfeed";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import Friends from './components/Friends';
import Profile from './components/Profile';
import Images from './components/Images';

const Stack = createNativeStackNavigator();

export default function App() {
	posts();
	users();
	return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="LogInPage" component={LogInPage}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Newsfeed" component={Newsfeed}/>
          <Stack.Screen name="SignUpPage" component={SignUpPage}/>
          <Stack.Screen name="Friends" component={Friends}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Images" component={Images}/>
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