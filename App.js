import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import LogIn from "./components/Authentication/LogIn";
import PasswordReset from "./components/Authentication/PasswordReset";
import SignUpPage from "./components/Authentication/SignUpPage";
import Newsfeed from "./components/Newsfeed";
import Profile from "./components/Profile";
import Images from "./components/Images";
import Friends from "./components/Friends";
import Messages from "./components/Messages";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Rules from "./components/Pages/Rules";
import Terms from "./components/Pages/Terms";

const Stack = createNativeStackNavigator();

export default function App() {
  
	return (
    <NavigationContainer>

      <SafeAreaProvider>

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Newsfeed" component={Newsfeed} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUpPage" component={SignUpPage} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
          <Stack.Screen name="Friends" component={Friends} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Images" component={Images} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Rules" component={Rules} />
        </Stack.Navigator>

      </SafeAreaProvider>
    </NavigationContainer>
	);
}