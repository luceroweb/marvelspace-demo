import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Newsfeed from "./components/Newsfeed";

export default function App() {
  
	return (
    <SafeAreaProvider>
      <Newsfeed />
    </SafeAreaProvider>
	);
}