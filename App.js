import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import LogIn from "./components/Authentication/LogIn";
import PasswordReset from "./components/Authentication/PasswordReset";
import SignUp from "./components/Authentication/SignUp";
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
  const [storedToken, setStoredToken] = useState("token");
  
	return (
    <NavigationContainer>

      <SafeAreaProvider>

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LogIn">
          {props => 
            <LogIn
              {...props}
              component={LogIn}
              setStoredToken={setStoredToken}
            />
          }
          </Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
          <Stack.Screen name="Newsfeed">
          {props => 
            <Newsfeed
              {...props}
              component={Newsfeed}
              storedToken={storedToken}
            />
          }
          </Stack.Screen>
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